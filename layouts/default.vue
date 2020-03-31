<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped temporary hide-overlay width="300">
      <v-list nav>
        <template v-for="(menuItem, index) in mainMenu">
          <v-list-group value="true" :key="index" :prepend-icon="menuItem.icon">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <template v-for="(subItem, subIndex) in mapMenuItems(menuItem.child)">
              <v-list-item :key="subIndex" nuxt :to="subItem.link" exact>
                <v-list-item-content>
                  <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
        </template>
        <v-list-item nuxt to="/resellers">
          <v-list-item-icon>
            <v-icon>mdi-map-marker-question-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Где купить</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="secondary" text app clipped-left>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-avatar size="36px" class="mr-2">
        <img src="/ste-logo.png" alt="Logo" />
      </v-avatar>
      <v-toolbar-title>
        <nuxt-link to="/">
          <span class="font-weight-medium accent--text">Stereo</span>
          <span class="font-weight-medium ml-n1">tech</span>
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
                    <v-col cols="4" :key="childIndex">
                      <v-list dense nav class="primary--text">
                        <v-list-item nuxt exact :to="childItem.link">
                          <v-list-item-avatar tile v-if="childItem.icon">
                            <v-icon
                              color="primary"
                              v-if="childItem.icon.startsWith('mdi-')"
                            >{{ childItem.icon }}</v-icon>
                            <v-img contain v-else :src="childItem.icon"></v-img>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>{{ childItem.title }}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider v-if="childItem.child" />
                        <v-list-item
                          v-for="(sublink, sublinkIndex) in childItem.child"
                          :key="sublinkIndex"
                          nuxt
                          exact
                          :to="sublink.link"
                        >
                          <v-list-item-content>
                            <v-list-item-title class="caption">{{ sublink.title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ sublink.description }}</v-list-item-subtitle>
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
            :to="menuItem.link"
          >{{ menuItem.title }}</v-btn>
          <v-btn v-else :key="index" text :href="menuItem.link" target="_blank">{{ menuItem.title }}</v-btn>
        </template>
      </v-toolbar-items>
      <v-spacer />
      <v-btn text color="primary" nuxt to="/resellers" exact class="hidden-sm-and-down">
        Где купить
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
            v-for="locale in locales"
            :key="locale.locale"
            @click="currentLang = locale.locale"
          >
            <v-list-item-title>{{ locale.text }}</v-list-item-title>
          </v-list-item>
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
                    <v-list-item href="mailto:info@ste3d.ru" target="_blank">
                      <v-list-item-title>info@ste3d.ru</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-btn text icon href="https://vk.com/ste3d_ru" target="_blank">
                        <v-icon>mdi-vk</v-icon>
                      </v-btn>
                      <v-btn text icon href="https://instagram.com/ste3d_ru/" target="_blank">
                        <v-icon>mdi-instagram</v-icon>
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
                <v-col cols="12" sm="6" lg="3" v-for="(menu, index) in mainMenu" :key="index">
                  <v-list flat light dense dark color="primary">
                    <v-list-item>
                      <v-list-item-title class="text-uppercase font-weight-bold">{{ menu.title }}</v-list-item-title>
                    </v-list-item>
                    <v-divider />
                    <v-list-item
                      nuxt
                      :to="child.link"
                      v-for="(child, childIndex) in menu.child"
                      :key="childIndex"
                    >
                      <v-list-item-title>{{ child.title}}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6" lg="3">
            <a href="http://sk.ru/" target="_blank">
              <v-img
                height="64"
                contain
                :src="`http://sk.ru/themes/generic/images/sklogo_${$store.state.locale}.png`"
              />
            </a>
          </v-col>
          <v-col cols="6" lg="3">
            <a href="http://fasie.ru/" target="_blank">
              <v-img
                height="64"
                contain
                src="http://fasie.ru/local/templates/.default/markup/img/footer_logo_fasie.png"
              />
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

export interface MenuItem {
  title: string,
  link?: string,
  icon?: string,
  description?: string,
  child?: MenuItem[]
}

@Component
export default class Layout extends Vue {

  private get currentYear () {
    return new Date().getFullYear()
  }



  private readonly mainPage: MenuItem = {
    title: this.$store.state.lang.fived_additive,
    link: '/'
  }

  private mapMenuItems (items: MenuItem[]): MenuItem[] {
    return items.flatMap(x => x.child ? [x, ...x.child] : [x])
  }

  private readonly mainMenu: MenuItem[] = [
    {
      title: "Продукты",
      icon: 'mdi-printer-3d',
      child: [
        {
          title: 'Настольные принтеры',
          link: '/printers',
          icon: 'https://via.placeholder.com/150?text=/printers/desktop/series3.jpg',
          child: [
            {
              title: 'Ceрия 3xx',
              link: '/printers/series3',
              description: 'Профессиональные 3D принтеры'
            },
            {
              title: 'Ceрия 5xx',
              link: '/printers/series5',
              description: 'Инновационные 5D принтеры'
            },
            {
              title: 'Серия Special',
              link: '/printers/special',
              description: '3D и 5D принтеры для особых задач'
            }
          ]
        },
        {
          title: 'Промышленные принтеры',
          link: '/industrial',
          icon: '/printers/industrial/series8.jpg',
          child: [
            {
              title: 'Ceрия 6xx',
              link: '/industrial/series6',
              description: 'Шестиосевое устройство на базе промышленного робота'
            },
            {
              title: 'Ceрия 8xx',
              link: '/industrial/series8',
              description: 'Восьмиосевое устройство для специальных задач'
            }
          ]
        },
        {
          title: 'Программное обеспечение',
          link: '/software',
          icon: '/printers/software/steapp.webp',
          child: [
            {
              title: 'STE Slicer',
              link: '/software/ste-slicer',
              description: 'Подготовка к 3D и 5D печати'
            },
            {
              title: 'STE App',
              link: '/software/ste-app',
              description: 'Управление процессом печати'
            },
          ]
        },
      ]
    },
    {
      title: 'Узнать больше',
      icon: 'mdi-post-outline',
      child: [
        {
          title: 'Решения',
          link: '/solutions',
          child: [
            {
              title: 'Обучение',
              description: 'Изучение основ 3D печати',
              link: '/solutions/education'
            },
            {
              title: 'Производство',
              description: 'Изделия для конечного использования',
              link: '/solutions/production'
            },
            {
              title: 'Сервис 3D печати',
              description: 'Услуги 3D печати и прототипирования',
              link: '/solutions/services'
            },
            {
              title: 'Прототипирование',
              description: 'Разработка устройств',
              link: '/solutions/prototyping'
            },
          ]
        },
        {
          title: 'Блог',
          link: '/blog',
          child: [
            {
              title: 'Анонсы',
              description: 'Все важные мероприятия с нашим участием',
              link: '/blog/events'
            },
            {
              title: 'Новости',
              description: 'Последние новости о нашей компании',
              link: '/blog/news'
            },
            {
              title: 'Примеры использования',
              description: 'Истории успеха наших партнеров',
              link: '/blog/applications'
            },
            {
              title: 'Статьи',
              description: 'Подробные исследования и руководства',
              link: '/blog/whitepapers'
            },
            {
              title: 'Научная деятельность',
              description: '',
              link: '/blog/sciense'
            },
          ]
        }
      ]
    },
    {
      title: this.$store.state.lang.support,
      icon: 'mdi-face-agent',
      child: [

        {
          title: 'Руководства пользователя',
          link: '/support/manuals',
          child: [
            {
              title: 'Принтеры 3хх серии',
              link: '/support/manuals/ste320'
            },
            {
              title: 'Принтеры 5хх серии',
              link: '/support/manuals/ste520'
            },
            {
              title: 'Слайсер STE Slicer',
              link: '/support/manuals/steslicer'
            },
            {
              title: 'Система управления STE App',
              link: '/support/manuals/steapp'
            }
          ]
        },
        {
          title: 'Советы по использованию',
          link: '/support/tips',
          child: [
            {
              title: 'Принтеры',
              link: '/support/tips/printers'
            },
            {
              title: 'Программное обеспечение',
              link: '/support/tips/software'
            },
            {
              title: 'Материалы',
              link: '/support/tips/materials'
            },
            {
              title: 'Печать',
              link: '/support/tips/printing'
            }
          ]
        },
        {
          title: 'Связаться с нами',
          link: '/support'
        },
      ]
    },
    {
      title: this.$store.state.lang.about,
      icon: 'mdi-information',
      child: [
        {
          title: 'О Stereotech',
          link: '/info',
          child: [
            {
              title: 'Команда',
              link: '/info/team'
            },
            {
              title: 'Награды',
              link: '/info/awards'
            },
            {
              title: 'Адреса',
              link: '/info/address'
            },
            {
              title: 'СМИ о нас',
              link: '/info/media'
            }
          ]
        }
      ]

    }

  ]
  private miniVariant: boolean = this.$vuetify.breakpoint.smOnly
  private drawer: boolean = false

  get currentPage (): string {
    let name = this.mainPage.title
    this.mainMenu.forEach((element) => {
      if (element.link !== this.$route.fullPath) {
        if (element.child) {
          element.child.forEach((childEl) => {
            if (childEl.link === this.$route.fullPath) {
              name = childEl.title
            }
          })
        }
      } else {
        name = element.title
      }
    })
    return name
  }


  get locales () {
    return [
      { text: 'Русский', locale: 'ru', path: process.env.DOMAIN + this.$route.path },
      { text: 'English', locale: 'en', path: 'https://en.stereotech.org' + this.$route.path }
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
}
</script>
