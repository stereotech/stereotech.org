import { ActionTree, MutationTree } from 'vuex'

export interface RootState {
  locale: string
  filled: boolean
  lang: any
  menu: any
}

export const state = (): RootState => ({
  filled: false,
  locale: 'ru',
  lang: {},
  menu: {}
})

export const mutations: MutationTree<RootState> = {
  setLocale (state, locale: string) {
    state.locale = locale
  },
  setLang (state, lang) {
    state.lang = lang
  },
  setMenu (state, menu) {
    state.menu = menu
  },
  setFilled (state) {
    state.filled = true
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async getLangData ({ commit }, locale: string) {
    const lang = await this.$docs.get('/lang/' + locale)
    commit('setLang', lang)
    const menu = await this.$docs.get('/menu/' + locale)
    commit('setMenu', menu)
  }
}

interface Locale {
  key: string,
  value: string
}
