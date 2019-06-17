
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
    // Set i18n instance on app
    // This way we can use it in middleware and pages asyncData/fetch
    console.log(navigator.language)
    app.i18n = new VueI18n({
        locale: navigator.language.substr(0, 2),
        fallbackLocale: 'en',
        messages: {
            'en': require('~/locales/en.json'),
            'ru': require('~/locales/ru.json')
        }
    })

    app.i18n.path = (link) => {
        if (app.i18n.locale === app.i18n.fallbackLocale) {
            return `/${link}`
        }

        return `/${app.i18n.locale}/${link}`
    }
}
