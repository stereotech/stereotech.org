import { Plugin } from '@nuxt/types'

const initPlugin: Plugin = async ({ $docs, isDev, env, req, app, store: { commit, state, dispatch }, redirect }) => {
    if (state.filled) {
        return
    }

    if (req) {
        const hostParts = (req.headers.host || '').replace('.org', '').split('.')
        if (hostParts.length === 2) {
            if (hostParts[0] === 'www') { return redirect(301, 'https://nuxtjs.org' + req.url) }

            if (isDev) {
                commit('setLocale', hostParts[0])
            }
        }
    } else {
        commit('setLocale', env.LOCALE)
    }
    try {
        await dispatch('getLangData', state.locale)
        commit('setFilled')
    } catch (e) {
        console.error('Error on filling the store, please run the docs server.') // eslint-disable-line no-console
        console.error(e)
    }
}

export default initPlugin