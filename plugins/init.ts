import { Plugin } from '@nuxt/types'

const initPlugin: Plugin = async ({ $docs, isDev, env, req, app, store: { commit, state, dispatch }, redirect }) => {

    try {
        console.log(app.i18n.locale)
        commit('setLocale', app.i18n.locale)
        await dispatch('getLangData', app.i18n.locale)
        commit('setFilled')
    } catch (e) {
        console.error('Error on filling the store, please run the docs server.') // eslint-disable-line no-console
        console.error(e)
    }
}

export default initPlugin