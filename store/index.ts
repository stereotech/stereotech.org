import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export interface RootState {
    locales: Locale[]
    locale: string
}

export const state = (): RootState => ({
  locale: 'en',
  locales: [
    { key: 'English', value: 'en' },
    { key: 'Русский', value: 'ru' }]
})

export const mutations: MutationTree<RootState> = {
  setLang (state, locale: string) {
    if (state.locales.find(l => l.value == locale) !== undefined) {
      state.locale = locale
    }
  }
}

interface Locale {
    key: string,
    value: string
}
