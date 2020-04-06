const VueI18NExtract = require('vue-i18n-extract').default;
const fs = require('fs')


const report = VueI18NExtract.createI18NReport('./components/**/*.?(vue)', './locales/*.?(json)')
const items = VueI18NExtract.parseVueFiles('./components/**/*.?(vue)')
fs.readFile('locales/ru.json', (e, data) => {
    let lang = JSON.parse(data)
    items.forEach(item => {
        const missing = report.missingKeys.find(m => (m.path === item.path) && (m.language === 'ru'))
        if (missing) {
            lang[item.path] = item.path
        }
    });
    fs.writeFile('ru_extracted.json', JSON.stringify(lang, null, ' '), () => { console.log('Locale extracted') })
})

