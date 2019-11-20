import { Plugin } from '@nuxt/types'
import { response } from 'express';

declare module 'vue/types/vue' {
    interface Vue {
        $docs: {
            get (path: string): Promise<any>;
        }
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $docs: {
            get (path: string): Promise<any>
        }
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $docs: {
            get (path: string): Promise<any>
        }
    }
}

declare module '@nuxt/types' {
    interface Context {
        $docs: {
            get (path: string): Promise<any>
        }
    }
}

const docsPlugin: Plugin = (context, inject) => {
    if (process.client && process.static) {
        return;
    }
    const $docs = {
        async get (path: string) {
            const response = await fetch('<%= options.url %>' + path)
            if (!response.ok) {
                const error = new Error(response.statusText)
                error.response = response
                throw error
            }
            return response.json();
        }
    }
    inject('docs', $docs)
    context.$docs = $docs
}

export default docsPlugin