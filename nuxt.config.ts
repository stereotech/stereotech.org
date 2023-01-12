require('dotenv').config()
import { NuxtConfig } from '@nuxt/types'
import ru from 'vuetify/src/locale/ru'

const locale = process.env.NUXT_ENV_LOCALE || 'ru'
const domain = process.env.NUXT_ENV_DOMAIN || 'https://5dtech.pro'
const rootPath = process.env.NUXT_ENV_ROOT || '/'

const config: NuxtConfig = {
  target: 'static',
  head: {
    title: '5D Additive Manufacturing',
    titleTemplate: 'Stereotech - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Stereotech - 5D Additive Manufacturing' },
      { name: 'msapplication-TileColor', content: '#0277bd' },
      { name: 'theme-color', content: '#0277bd' },
      { name: 'yandex-verification', content: process.env.YANDEX_VER || '' }

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
    // middleware: 'i18n'
    base: rootPath
  },
  /*
  ** Global CSS
  */
  css: [

  ],
  /*
  ** Plugins to load before mounting the App
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    // ['~/modules/docs/', { port: 3001 }],
    // '~/modules/crawler/',
    // '~/modules/static/',
    //'~/modules/components/',
    //'@aceforth/nuxt-optimized-images'
  ],
  plugins: [
    //'~/plugins/init',
    '~/plugins/htmlparser',
    '~/plugins/vue-the-mask',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '54147616',
        webvisor: true
      }
    ],
    ['vue-yandex-maps/nuxt', {
      apiKey: process.env.API_KEY,
      lang: 'ru_RU',
      version: '2.1'
    }],
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/recaptcha',
    '@nuxtjs/i18n'
  ],
  content: {
    markdown: {
      tocDepth: 2
    },
    fullTextSearchFields: ['text']
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'ru',
        name: 'Русский',
        file: 'ru.json',
      },
      {
        code: 'de',
        name: 'Deutsche',
        file: 'de.json'
      }
    ],
    differentDomains: false,
    lazy: true,
    langDir: 'locales/',
    defaultLocale: locale,
  },
  env: {
    LOCALE: locale,
    DOMAIN: domain,
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    VIDEO_KEY: process.env.VIDEO_KEY || '',
    MEGAPLAN_LOGIN: process.env.MEGAPLAN_LOGIN || '',
    MEGAPLAN_PASS: process.env.MEGAPLAN_PASS || '',
    SECURE_TOKEN: process.env.SECURE_TOKEN || '',
    YANDEX_VER: process.env.YANDEX_VER || '',
    API_KEY: process.env.API_KEY || '',
    API_STATAMIC: process.env.API_STATAMIC || '',
    SITE_KEY: process.env.SITE_KEY || '',
    BITRIX_SEC: process.env.BITRIX_SEC || '',
    MATERIAL_TABLE_ID: process.env.MATERIAL_TABLE_ID || '',
    MATERIAL_TABLE_KEY: process.env.MATERIAL_TABLE_KEY || '',
    REPLAIN_CHAT_ID: process.env.REPLAIN_CHAT_ID || '',
    COCKPIT_TOKEN: process.env.COCKPIT_TOKEN || '',
    API_ADDRESS: process.env.API_ADDRESS || 'https://api2.stereotech.org/'
  },
  manifest: {
    name: 'Stereotech - 5D Additive Manufacturing',
    description: 'Stereotech - 5D Additive Manufacturing',
    author: 'Stereotech',
    lang: locale
  },
  sitemap: {
    hostname: domain
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    treeShake: false,
    materialIcons: false,
    theme: {
      dark: false,
      disable: false,
      default: false,
      options: {
        customProperties: true
      },
      themes: {
        light: {
          primary: '#0277bd',
          secondary: '#ffffff',
          accent: '#191b38',
          error: '#FF5252',
          info: '#9C27B0',
          success: '#4CAF50',
          warning: '#FFC107'
        },
        dark: {
          primary: '#0277bd',
          secondary: '#ffffff',
          accent: '#827eab',
          error: '#ff867f',
          info: '#d05ce3',
          success: '#80e27e',
          warning: '#fff350'
        }
      }
    },
    iconfont: 'mdi',
    lang: {
      locales: {
        ru
      }
    }
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
  recaptcha: {
    /* reCAPTCHA options */
    siteKey: process.env.SITE_KEY,
    version: 3,
    hideBadge: true
  },
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true
  },
  /*
  ** Build configuration
  */
  generate: {
    dir: 'public',
    fallback: true,
    interval: 100
  }
}

export default config
