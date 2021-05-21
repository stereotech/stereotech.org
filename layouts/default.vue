<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      temporary
      hide-overlay
      width="300"
    >
      <v-list nav>
        <template v-for="(menuItem, index) in mainMenu">
          <v-list-group
            value="true"
            :key="index"
            :prepend-icon="menuItem.icon"
            v-if="menuItem.child"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <template
              v-for="(subItem, subIndex) in mapMenuItems(menuItem.child)"
            >
              <v-list-item
                :key="subIndex"
                nuxt
                :to="localePath(subItem.link)"
                exact
              >
                <v-list-item-content>
                  <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
          <v-list-item
            v-else
            :key="index"
            :href="menuItem.link"
            target="_blank"
          >
            <v-list-item-avatar>
              <v-icon color="primary">
                {{ menuItem.icon }}
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content color="primary">
              <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list-item nuxt :to="localePath('/resellers')">
          <v-list-item-icon>
            <v-icon>mdi-map-marker-question-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ $t("Где купить") }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="secondary" app clipped-left>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-avatar size="36px" class="mx-1">
        <img src="ste-logo.png" alt="Logo" />
      </v-avatar>
      <v-toolbar-title>
        <nuxt-link no-prefetch :to="localePath('/')">
          <span
            :class="`font-weight-medium ${
              $vuetify.theme.dark ? 'white--text' : 'accent--text'
            }`"
            >Stereo</span
          >
          <span
            :class="`font-weight-medium ml-n1 ${
              $vuetify.theme.dark ? 'grey--text' : 'primary--text'
            }`"
            >tech</span
          >
        </nuxt-link>
      </v-toolbar-title>

      <v-toolbar-items class="hidden-sm-and-down ml-2">
        <template v-for="(menuItem, index) in mainMenu">
          <v-menu
            min-width="100%"
            v-if="menuItem.child !== undefined"
            :key="index"
            offset-y
            open-on-hover
            close-on-click
          >
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" text color="primary">{{ menuItem.title }}</v-btn>
            </template>
            <v-card>
              <v-container>
                <v-row justify="center">
                  <template v-for="(childItem, childIndex) in menuItem.child">
                    <v-col cols="6" :key="childIndex">
                      <v-list dense nav class="primary--text">
                        <v-list-item
                          nuxt
                          exact
                          :to="localePath(childItem.link)"
                        >
                          <v-list-item-avatar tile v-if="childItem.icon">
                            <v-icon
                              color="primary"
                              v-if="childItem.icon.startsWith('mdi-')"
                              >{{ childItem.icon }}</v-icon
                            >
                            <v-img contain v-else :src="childItem.icon"></v-img>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>{{
                              childItem.title
                            }}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider v-if="childItem.child" />
                        <v-list-item
                          v-for="(sublink, sublinkIndex) in childItem.child"
                          :key="sublinkIndex"
                          nuxt
                          exact
                          :to="localePath(sublink.link)"
                        >
                          <v-list-item-content>
                            <v-list-item-title class="caption">{{
                              sublink.title
                            }}</v-list-item-title>
                            <v-list-item-subtitle>{{
                              sublink.description
                            }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-col>
                  </template>
                </v-row>
              </v-container>
            </v-card>
          </v-menu>
          <v-btn
            v-else-if="menuItem.link.startsWith('/')"
            :key="index"
            text
            nuxt
            :to="localePath(menuItem.link)"
            >{{ menuItem.title }}</v-btn
          >
          <v-btn
            v-else
            :key="index"
            text
            color="primary"
            :href="menuItem.link"
            target="_blank"
            >{{ menuItem.title }}</v-btn
          >
        </template>
      </v-toolbar-items>
      <v-spacer />
      <v-btn
        text
        color="primary"
        nuxt
        :to="localePath('/resellers')"
        exact
        class="hidden-sm-and-down"
      >
        {{ $t("Где купить") }}
        <v-icon right dark>mdi-map-marker-question-outline</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" color="primary">
            <v-icon>mdi-earth</v-icon>
          </v-btn>
        </template>
        <v-list nav>
          <v-list-item
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            >{{ locale.name }}</v-list-item
          >
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer height="auto" color="primary" dark>
      <v-container>
        <v-row>
          <v-col cols="12" sm="3">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-list flat light dense dark color="primary">
                    <v-list-item>
                      <v-list-item-title>
                        &copy;{{ currentYear }} —
                        <strong>Stereotech</strong>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item href="tel:+79023648404">
                      <v-list-item-title>+79023648404</v-list-item-title>
                    </v-list-item>
                    <v-list-item href="mailto:info@5dtech.pro" target="_blank">
                      <v-list-item-title>info@5dtech.pro</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-btn
                        text
                        icon
                        href="https://vk.com/5dtechpro"
                        target="_blank"
                      >
                        <v-icon>mdi-vk</v-icon>
                      </v-btn>
                      <v-btn
                        text
                        icon
                        href="https://instagram.com/5dtechpro/"
                        target="_blank"
                      >
                        <v-icon>mdi-instagram</v-icon>
                      </v-btn>
                      <v-btn
                        text
                        icon
                        href="https://www.youtube.com/channel/UCgpK6bZ6uaGyIGB2jp-aTUw/"
                        target="_blank"
                      >
                        <v-icon>mdi-youtube</v-icon>
                      </v-btn>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="12" sm="9">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  lg="3"
                  v-for="(menu, index) in mainMenu"
                  :key="index"
                >
                  <v-list flat light dense dark color="primary">
                    <v-list-item>
                      <v-list-item-title
                        class="text-uppercase font-weight-bold"
                        >{{ menu.title }}</v-list-item-title
                      >
                    </v-list-item>
                    <v-divider />
                    <v-list-item
                      nuxt
                      :to="localePath(child.link)"
                      v-for="(child, childIndex) in menu.child"
                      :key="childIndex"
                    >
                      <v-list-item-title>{{ child.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6" lg="3">
            <a href="https://navigator.sk.ru/orn/1122828" target="_blank">
              <v-img
                height="64"
                contain
                :src="`https://sk.ru/themes/generic/images/sklogo_${$store.state.locale}.png`"
              />
            </a>
            <h6 class="text-center">
              Исследования осуществляются при грантовой поддержке Фонда
              «Сколково»
            </h6>
          </v-col>
          <v-col cols="6" lg="3">
            <a
              href="http://fasie.ru/press/fund/volgogradskaya-kompaniya-stereotek-razrabotala-5d-printer-dlya-pechati-raskhodnykh-chastey-promoboru/"
              target="_blank"
            >
              <v-img
                height="64"
                contain
                src="https://online.fasie.ru/images/logo.png"
              />
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

export interface MenuItem {
  title: string,
  link?: string,
  icon?: string,
  description?: string,
  child?: MenuItem[]
}

@Component({
})
export default class Layout extends Vue {

  private get currentYear () {
    return new Date().getFullYear()
  }

  private mapMenuItems (items: MenuItem[]): MenuItem[] {
    return items.flatMap(x => x.child ? [x, ...x.child] : [x])
  }

  get mainMenu (): MenuItem[] {
    return [
      {
        title: this.$tc("Продукты"),
        icon: 'mdi-printer-3d',
        child: [
          {
            title: this.$tc('Серия 5хх'),
            link: '/printers',
            icon: '/printers/desktop/series3.jpg',
            child: [
              {
                title: this.$tc('Hybrid'),
                link: '/printers/hybrid',
                description: this.$tc('Инновационные 5D принтеры')
              },
              {
                title: this.$tc('Fiber'),
                link: '/printers/fiber',
                description: this.$tc('3D и 5D принтеры для особых задач')
              }
            ]
          },
          {
            title: this.$tc('Промышленные принтеры'),
            link: '/industrial',
            icon: 'printers/industrial/series8.jpg',
            child: [
              {
                title: this.$tc('Серия 6хх'),
                link: '/industrial/series6',
                description: this.$tc('Шестиосевое устройство на базе промышленного робота')
              },
              {
                title: this.$tc('Серия 8хх'),
                link: '/industrial/series8',
                description: this.$tc('Восьмиосевое устройство для специальных задач')
              }
            ]
          },
          {
            title: this.$tc('Материалы для печати'),
            link: '/materials',
            icon: '/materials/sealant.jpg',
            child: [
              {
                title: 'Sealant',
                link: '/materials/sealant',
                description: this.$tc('Серия эластичных материалов для изготовления уплотнений, прокладок и гибких элементов')
              },
              {
                title: 'Fiberpart',
                link: '/materials/fiberpart',
                description: this.$tc('Серия высокопрочных материалов, наполненных рубленым волокном')
              },
              {
                title: 'Enduse',
                link: '/materials/enduse',
                description: this.$tc('Серия материалов, применимых для деталей конечного использования')
              },
              {
                title: 'Proto',
                link: '/materials/proto',
                description: this.$tc('Серия материалов для функциональных моделей и макетов')
              },
              {
                title: 'Metalcast',
                link: '/materials/metalcast',
                description: this.$tc('')
              },
              {
                title: 'ContiFiber',
                link: '/materials/contifiber',
                description: this.$tc('Серия материалов, армированных непрерывным углеволокном')
              }
            ]
          },
          {
            title: this.$tc('Программное обеспечение'),
            link: '/software',
            icon: 'printers/software/steapp.webp',
            child: [
              {
                title: 'STE Slicer',
                link: '/software/steslicer',
                description: this.$tc('Подготовка к 3D и 5D печати')
              },
              {
                title: 'STE App',
                link: '/software/steapp',
                description: this.$tc('Управление процессом печати')
              },
            ]
          },
        ]
      },
      {
        title: this.$tc('Узнать больше'),
        icon: 'mdi-post-outline',
        child: [
          {
            title: this.$tc('Блог'),
            link: '/blog',
            child: [
              {
                title: this.$tc('Новости'),
                description: this.$tc('Последние новости о нашей компании'),
                link: '/blog/news'
              },
              {
                title: this.$tc('Научная деятельность'),
                description: '',
                link: '/blog/science'
              },
            ]
          }
        ]
      },
      {
        title: this.$tc('Поддержка'),
        icon: 'mdi-face-agent',
        link: 'https://support.stereotech.org',
      },
      {
        title: this.$tc('О нас'),
        icon: 'mdi-information',
        child: [
          {
            title: this.$tc('О Stereotech'),
            link: '/info',
            child: [
              {
                title: this.$tc('Команда'),
                link: '/info/team'
              },
              {
                title: this.$tc('Адреса'),
                link: '/info/address'
              },
              {
                title: this.$tc('СМИ о нас'),
                link: '/info/media'
              }
            ]
          },
          {
            title: this.$tc('Документы'),
            link: '/info/documents'
          }
        ]

      }
    ]
  }
  private miniVariant: boolean = this.$vuetify.breakpoint.smOnly
  private drawer: boolean = false

  get locales () {
    return [
      { text: 'Русский', locale: 'ru', path: process.env.DOMAIN + this.$route.path },
      { text: 'English', locale: 'en', path: 'https://stereotech.org' + this.$route.path },
      { text: 'Deutsche', locale: 'de', path: 'https://stereotech.org' + this.$route.path }
    ]
  }

  get currentLang () {
    const lang = this.locales.find(v => v.locale === this.$store.state.locale)
    if (lang) {
      return lang.locale
    }
    return 'ru'
  }
  set currentLang (newLang: string) {
    const lang = this.locales.find(v => v.locale == newLang)
    if (!lang) {
      return
    }
    if (process.env.NODE_ENV === 'development') {
      lang.path = lang.path.replace('https', 'http').replace('stereotech.org', window.location.host.split('.').slice(-1)[0])
    }
    window.location.href = lang.path
  }

  elementId = 'replain-script'

  get lang () {
    return this.$i18n.locale
  }

  mounted () {
    if (process.client) {
      //@ts-ignore
      window.replainSettings = {
        id: process.env.REPLAIN_CHAT_ID
      }
      let element = document.getElementById(this.elementId);
      if (element) {
        //@ts-ignore
        element.parentNode.removeChild(element);
      }
      let reScript = document.createElement('script')
      reScript.setAttribute('src', 'https://widget.replain.cc/dist/client.js')
      reScript.setAttribute('id', this.elementId)
      document.head.appendChild(reScript)
    }
  }


}
</script>

<style>
.nuxt-link-exact-active {
  color: #ffffff;
  text-decoration: none;
}

.nuxt-link-active {
  color: #ffffff;
  text-decoration: none;
}
</style>
