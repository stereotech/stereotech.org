import { promisify } from 'util'
import { resolve } from 'path'
import fs from 'fs'
const micro = require('micro')
const { send } = require('micro')
import fm from 'front-matter'
import { thisTypeAnnotation } from '@babel/types'
import chokidar from 'chokidar'
const degit = require('degit')
const glob = promisify(require('glob'))
const logger = require('consola').withScope('docs/server')
const readFile = promisify(fs.readFile)
const { marked, partialRenderer } = require('./renderer')

export interface DocsServerOptions {
    docsDir?: string
    defaultLang?: string
    port?: number
    repo?: string
    watch?: boolean
}

export class DocsServer {
    docsDir: string
    defaultLang: string
    port: number
    repo: string | undefined
    watch: boolean | undefined
    releases: {}
    docsFiles: any
    menu: any
    langs: any
    homepage: {}
    server: any
    constructor (options: DocsServerOptions) {
        this.docsDir = options.docsDir || process.cwd()
        this.defaultLang = options.defaultLang || 'en'
        this.port = options.port || 3001
        this.repo = options.repo
        this.watch = options.watch

        this.releases = {}
        this.docsFiles = {}
        this.menu = {}
        this.langs = {}
        this.homepage = {}
        this.server = null
    }

    glob (pattern: string) {
        return glob(pattern, {
            cwd: this.docsDir,
            ignore: 'node_modules/**/*',
            nodir: true
        })
    }

    async cloneRepo () {
        if (fs.existsSync(this.docsDir)) {
            return
        }
        logger.info(`Cloning ${this.repo} into ${this.docsDir}`)
        await degit(this.repo, { force: true, cache: false }).clone(this.docsDir)
    }

    async init () {
        await Promise.all([
            this.getFiles()
        ])
        if (this.watch) {
            this.watchFiles(this.docsDir)
        }
    }

    async listen () {
        if (this.server) {
            return
        }

        this.server = micro((req: any, res: any) => {
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Access-Control-Allow-Methods', 'GET')
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
            try {
                const data = this.get(req.url)
                send(res, 200, data)
            } catch (err) {
                send(res, 404, { message: err.message })
            }
        })
        this.server.listen = promisify(this.server.listen)
        this.server.close = promisify(this.server.close)

        await this.server.listen(this.port)
        this.server.url = `http://localhost:${this.port}`
    }

    async close () {
        if (!this.server) {
            return
        }

        await this.server.close()
        delete this.server
    }





    async getFiles (): Promise<any> {
        logger.info('Building files...')

        await this.getMenu()
        await this.getLanguages()
        await this.getDocFiles()

    }
    async getDocFiles () {
        const docPaths = await this.glob('*/**/*.md')
        await Promise.all(docPaths.map((path: string) => this.getDocFile(path)))
    }

    async getDocFile (path: string, parseOptions?: any, useCache = true) {
        if (this.docsFiles[path] && useCache) {
            return this.docsFiles[path]
        }

        let file = await readFile(resolve(this.docsDir, path), 'utf-8')

        const fmFile = fm<any>(file)
        this.docsFiles[path] = {
            attrs: fmFile.attributes,
            body: marked(fmFile.body, parseOptions)
        }

        return this.docsFiles[path]
    }


    async getLanguages () {
        logger.info('Building languages...')

        const langPaths = await this.glob('*/lang.json')

        const langs: any = {}

        await Promise.all(langPaths.map(async (path: string) => {

            const lang = path.split('/')[0]
            const fileContent = await readFile(resolve(this.docsDir, path), 'utf-8')
            langs[lang] = JSON.parse(fileContent)
        }))

        this.langs = langs

    }
    async getMenu () {
        logger.info('Building menu...')

        const menuPaths = await this.glob('*/**/menu.json')

        const menu: any = {}
        await Promise.all(menuPaths.map(async (path: string) => {
            const keys = path.split('/').slice(0, -1)
            const lastKey = keys.pop()

            let pathMenu = menu
            for (const key of keys) {
                pathMenu[key] = pathMenu[key] || {}
                pathMenu = pathMenu[key]
            }

            const fileContent = await readFile(resolve(this.docsDir, path), 'utf-8')
            if (lastKey) {
                pathMenu[lastKey] = JSON.parse(fileContent)
            }
        }))

        this.menu = menu
    }

    watchFiles (cwd: string) {
        logger.info('Watching files changes...')

        const options: chokidar.WatchOptions = {
            cwd,
            ignoreInitial: true,
            ignored: 'node_modules/**/*'
        }
        // Doc Pages
        chokidar.watch('*/**/*.md', options)
            .on('add', path => this.getDocFile(path, null, false))
            .on('change', path => this.getDocFile(path, null, false))
            .on('unlink', path => delete this.docsFiles[path])

        // Menu
        chokidar.watch('*/**/menu.json', options)
            .on('add', () => this.getMenu())
            .on('change', () => this.getMenu())
            .on('unlink', () => this.getMenu())
    }

    get (url: string) {
        if (url.indexOf('/menu') === 0) {
            const lang = url.split('/')[2]
            const category = url.split('/')[3]

            if (lang && category && this.menu[lang] && this.menu[lang][category]) {
                return this.menu[lang][category]
            }
            if (lang && this.menu[lang]) {
                return this.menu[lang]
            }

            if (lang) {
                throw new Error('Language not found')
            }

            return this.menu
        }

        if (url.indexOf('/lang') === 0) {
            const lang = url.split('/')[2]

            if (lang && this.langs[lang]) {
                return this.langs[lang]
            }

            if (lang) {
                throw new Error('Language not found')
            }

            return this.langs
        }

        const path = url.slice(1) + '.md'
        const lang = path.slice(0, 2)

        // Check if path exists
        let doc = this.docsFiles[path]
        const isInvalid = !doc || (!doc.body && !Object.keys(doc.attrs).length)
        if (isInvalid && lang !== 'en') {
            // Check fallback for EN
            doc = this.docsFiles['en' + path.slice(2)]
            if (!doc) {
                throw new Error('File not found')
            }
            doc.langFallback = true
        }

        // Send back doc content
        return doc
    }
}

