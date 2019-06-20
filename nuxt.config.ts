import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  mode: 'spa',
  head: {
    title: 'Stereotech - 5D Additive Manufacturing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Stereotech - 5D Additive Manufacturing' },
      { name: 'msapplication-TileColor', content: '#0277bd' },
      { name: 'theme-color', content: '#0277bd' },
      { name: 'yandex-verification', content: 'a1c4d874d28573f7' }
    ]
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0277bd' }
  ],

  router: {
    //middleware: 'i18n'
  },
  /*
  ** Global CSS
  */
  css: [
    '@mdi/font/css/materialdesignicons.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/i18n' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '54147616'
      }
    ],
  ],

  manifest: {
    name: 'Stereotech - 5D Additive Manufacturing',
    description: 'Stereotech - 5D Additive Manufacturing',
    author: 'Stereotech'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    treeShake: true,
    materialIcons: false,
    theme: {
      primary: '#0277bd',
      secondary: '#ffffff',
      accent: '#263238',
      error: '#FF5252',
      info: '#9C27B0',
      success: '#4CAF50',
      warning: '#FFC107'
    },
    iconfont: 'mdi'
  },
  loading: { color: '#263238' },
  loadingIndicator: {
    name: 'folding-cube',
    color: '#ffffff',
    background: '#0277bd'
  },

  googleAnalytics: {
    id: 'UA-100135045-1'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

export default config
