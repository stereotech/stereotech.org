<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped temporary hide-overlay>
      <v-list class="pa-1">
        <v-list-item nuxt to="/">
          <v-list-item-avatar>
            <img src="/ste-logo.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Stereotech</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <template v-for="(menuItem, index) in mainMenu">
        <v-list-item
          v-if="menuItem.link && menuItem.link.startsWith('/')"
          :key="menuItem.title"
          nuxt
          ripple
          :to="menuItem.link"
        >
          <v-list-item-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t(menuItem.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else :key="menuItem.title" nuxt ripple :href="menuItem.link" target="_blank">
          <v-list-item-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t(menuItem.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list v-if="menuItem.child !== undefined" :key="menuItem.title + index">
          <template v-for="childItem in menuItem.child">
            <v-list-item
              v-if="childItem.link.startsWith('/')"
              :key="childItem.title"
              nuxt
              ripple
              :to="childItem.link"
            >
              <v-list-item-action>
                <v-icon>{{ childItem.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ $t(childItem.title) }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-else
              :key="childItem.title"
              target="_blank"
              ripple
              :href="childItem.link"
            >
              <v-list-item-action>
                <v-icon>{{ childItem.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ $t(childItem.title) }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </template>
      <v-divider />
      <v-container fluid grid-list-xl>
        <v-row align="center">
          <v-col class="d-flex" cols="12">
            <v-select
              v-model="$i18n.locale"
              :items="langs"
              item-value="value"
              item-text="key"
              :label="$t('language')"
              @change="setLocale"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar dark color="primary" text app clipped-left>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-avatar size="36px" class="mr-2">
        <img src="/ste-logo.png" alt="Logo" />
      </v-avatar>
      <v-toolbar-title>
        <nuxt-link to="/">
          <span class="text-uppercase font-weight-light white--text">Stereotech</span>
          <span class="text-uppercase font-weight-medium white--text">{{ $t(currentPage) }}</span>
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="(menuItem, index) in mainMenu">
          <v-menu v-if="menuItem.child !== undefined" :key="index" offset-y open-on-hover>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" text dark>{{ $t(menuItem.title) }}</v-btn>
            </template>
            <v-list>
              <template v-for="(childItem, index) in menuItem.child">
                <v-list-item
                  v-if="childItem.link.startsWith('/')"
                  :key="index"
                  nuxt
                  :to="childItem.link"
                >
                  <v-list-item-title>{{ $t(childItem.title) }}</v-list-item-title>
                </v-list-item>
                <v-list-item v-else :key="index" :href="childItem.link" target="_blank">
                  <v-list-item-title>{{ $t(childItem.title) }}</v-list-item-title>
                </v-list-item>
              </template>
            </v-list>
          </v-menu>
          <v-btn
            v-else-if="menuItem.link.startsWith('/')"
            :key="index"
            text
            nuxt
            :to="menuItem.link"
          >{{ $t(menuItem.title) }}</v-btn>
          <v-btn
            v-else
            :key="index"
            text
            :href="menuItem.link"
            target="_blank"
          >{{ $t(menuItem.title) }}</v-btn>
        </template>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text icon v-on="on">
              <v-icon>mdi-web</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in langs" :key="index" @click="setLocale(item.value)">
              <v-list-item-title>{{ item.key }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container fluid grid-list-md>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer height="auto" color="primary" dark>
      <v-container fluid grid-list-xs>
        <v-row justify="center" align="center">
          <v-col cols="6" sm="3">
            <v-container grid-list-xs>
              <v-row>
                <v-col cols="12">
                  &copy;{{ currentYear }} —
                  <strong>Stereotech</strong>
                </v-col>
                <v-col cols="12">
                  <v-btn text icon href="https://vk.com/stereo_tech" target="_blank">
                    <v-icon>mdi-vk</v-icon>
                  </v-btn>
                  <v-btn text icon href="https://instagram.com/stereo_tech/" target="_blank">
                    <v-icon>mdi-instagram</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="6" sm="3">
            <v-container grid-list-xs>
              <v-row>
                <v-col cols="12">
                  <v-btn text large block href="tel:+79023648404">+79023648404</v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn text large block href="mailto:info@ste3d.ru" target="_blank">info@ste3d.ru</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="6" sm="3">
            <a href="http://fasie.ru/" target="_blank">
              <v-img
                height="64"
                contain
                src="http://fasie.ru/local/templates/.default/markup/img/footer_logo.svg"
              />
            </a>
          </v-col>
          <v-col cols="6" sm="3">
            <a href="http://sk.ru/" target="_blank">
              <v-img
                height="64"
                contain
                :src="`http://sk.ru/themes/generic/images/sklogo_${$i18n.locale}.png`"
              />
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {
  private get currentYear () {
    return new Date().getFullYear()
  }

  private readonly mainPage: any = {
    title: '5d-additive',
    link: '/'
  }

  private readonly mainMenu: any[] = [
    {
      title: 'products',
      icon: 'mdi-printer-3d',
      child: [
        {
          title: 'ste320',
          link: '/ste320'
        },
        {
          title: 'ste520',
          link: '/ste520'
        },
        {
          title: 'comparePrinters',
          link: '/printers'
        },
        {
          title: 'software.title',
          link: '/software'
        },
        {
          title: 'materials',
          link: 'https://ste3d.ru/filaments'
        }
      ]
    },
    {
      title: 'cases',
      icon: 'mdi-flag',
      child: [
        {
          title: 'photogallery',
          link: 'https://ste3d.ru/3d-printing'
        }
      ]
    },
    {
      title: 'buy',
      icon: 'mdi-cart',
      link: 'https://ste3d.ru/stereotech'
    },
    {
      title: 'support',
      icon: 'mdi-face-agent',
      link: '/contacts'
    },
    {
      title: 'contacts',
      icon: 'mdi-contacts',
      link: '/contacts'
    },
    {
      title: 'about',
      icon: 'mdi-information',
      link: '/about'
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

  private langs = this.$store.state.locales

  private setLocale (locale: string) {
    this.$store.commit('setLang', locale)
    this.$i18n.locale = locale
  }
}

</script>
