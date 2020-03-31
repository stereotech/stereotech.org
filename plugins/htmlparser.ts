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
        let processChild = (node: any) => {
            node.childNodes.forEach((childNode: Element) => {

                processChild(childNode)
                if (childNode.nodeType === 1) {
                    childNode.removeAttribute('class')
                    childNode.removeAttribute('style')
                    childNode.removeAttribute('face')
                }
            })
        }
        let root = parse(inputHtml)
        processChild(root)
        //@ts-ignore
        if (root.classList) {
            //@ts-ignore
            root.classList.add('v-data-table__wrapper')
        }

        let result = root.toString()

        result = result.replace(/<\/?font>/g, '')
        result = result.replace(/<span><br ?\/?><\/span>/g, '')
        result = result.replace(/<img src="([^"]*)"\s?\/>/g, '<div class="container fill-height"><div class="row align-center justify-center"><div class="col-lg-4 col-sm-6 col-12"><div class="v-responsive v-image"><div class="v-responsive__sizer" style="padding-bottom: 50%;"></div><div class="v-image__image v-image__image--contain" style="background-image: url($1 ); background-position: center center;"></div><div class="v-responsive__content" ></div></div></div></div></div>')
        return result
    })
}

export default convertHtmlPlugin
