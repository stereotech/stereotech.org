import { Plugin } from '@nuxt/types'
import { parse } from 'node-html-parser'

declare module 'vue/types/vue' {
    interface Vue {
        $convertHtml (inputHtml: string): string
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $convertHtml (inputHtml: string): string
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $convertHtml (inputHtml: string): string
    }
}

const convertHtmlPlugin: Plugin = (context, inject) => {
    inject('convertHtml', (inputHtml: string) => {
        inputHtml = inputHtml.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        console.log(inputHtml)
        let processChild = (node: any) => {
            node.childNodes.forEach((childNode: Node) => {
                processChild(childNode)
                if (childNode.nodeType === 1) {
                    //@ts-ignore
                    childNode.removeAttribute('class')
                    //@ts-ignore
                    childNode.removeAttribute('style')
                }

            })
        }

        let root = parse(inputHtml)
        processChild(root)
        return root.toString()
    })
}

export default convertHtmlPlugin