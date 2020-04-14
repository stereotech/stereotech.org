const VueI18NExtract = require('vue-i18n-extract').default;
const fs = require('fs')


const components_report = VueI18NExtract.createI18NReport('./components/**/*.?(vue)', './locales/*.?(json)')
const components_items = VueI18NExtract.parseVueFiles('./components/**/*.?(vue)')
const pages_report = VueI18NExtract.createI18NReport('./pages/**/*.?(vue)', './locales/*.?(json)')
const items = VueI18NExtract.parseVueFiles('./pages/**/*.?(vue)')
fs.readFile('locales/ru.json', (e, data) => {
    let lang = JSON.parse(data)
    components_items.forEach(item => {
        const missing = components_report.missingKeys.find(m => (m.path === item.path) && (m.language === 'ru'))
        if (missing) {
            lang[item.path] = item.path
        }
    });
    items.forEach(item => {
        const missing = pages_report.missingKeys.find(m => (m.path === item.path) && (m.language === 'ru'))
        if (missing) {
            lang[item.path] = item.path
        }
    });
    fs.writeFile('ru_extracted.json', JSON.stringify(lang, null, ' '), () => { console.log('Locale extracted') })
})
