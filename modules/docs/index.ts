import { join } from 'path'
const logger = require('consola').withScope('docs/module')
import { DocsServer, DocsServerOptions } from './server'
import { Module } from '@nuxt/types'

const docsServerModule: Module = async function (moduleOptions) {
    const isDev = this.options.dev
    const isGenerate = this.options.generate
    const isBuild = this.options.build
    const runServer = isDev || isGenerate

    const options: DocsServerOptions = {
        port: 3001,
        docsDir: join(isDev! ? this.options.srcDir! : this.options.srcDir!, 'docs'),
        repo: 'nuxt/docs',
        watch: isDev,
        ...this.options.docs,
        ...moduleOptions
    }

    if (runServer) {
        const docsServer = new DocsServer(options)
        //await docsServer.cloneRepo()
        await docsServer.init()
        await docsServer.listen()
        if (isGenerate) {
            this.nuxt.hook('generate:done', () => docsServer.close())
        } else {
            this.nuxt.hook('close', () => docsServer.close())
        }
    }

    if (isBuild) {
        // Add runtime plugin
        this.addPlugin({
            src: join(__dirname, 'plugin.ts'),
            options: {
                url: `http://localhost:${options.port}`
            }
        })
    }
}

export default docsServerModule