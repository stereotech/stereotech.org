
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { Plugin } from '@nuxt/types'

Vue.use(VueI18n)

declare module '@nuxt/types' {
  interface Context {
    $i18n (): void
  }
}

const i18nPlugin: Plugin = ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch\
  app.i18n = new VueI18n({
    locale: navigator.language.substr(0, 2),
    fallbackLocale: 'en',
    messages: {
      'en': require('~/locales/en.json'),
      'ru': require('~/locales/ru.json')
    },
  })

  //@ts-ignore
  app.i18n.path = (link: string) => {
    //@ts-ignore
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    //@ts-ignore
    return `/${app.i18n.locale}/${link}`
  }
}

export default i18nPlugin