module.exports = {
    extends: [
        '@nuxtjs/eslint-config-typescript'
    ],
    plugins: [
        'vuetify'
    ],
    rules: {
        'vuetify/no-deprecated-classes': 'error',
        'vuetify/grid-unknown-attributes': 'error',
        'vuetify/no-legacy-grid': 'error',
    }
}