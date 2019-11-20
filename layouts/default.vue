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
          :key="index"
          nuxt
          ripple
          :to="menuItem.link"
        >
          <v-list-item-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else :key="index" nuxt ripple :href="menuItem.link" target="_blank">
          <v-list-item-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list v-if="menuItem.child !== undefined" :key="menuItem.title + index">
          <template v-for="(childItem, index) in menuItem.child">
            <v-list-item
              v-if="childItem.link.startsWith('/')"
              :key="index"
              nuxt
              ripple
              :to="childItem.link"
            >
              <v-list-item-action>
                <v-icon>{{ childItem.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ childItem.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-else :key="index" target="_blank" ripple :href="childItem.link">
              <v-list-item-action>
                <v-icon>{{ childItem.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ childItem.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </template>
      <v-divider />
    </v-navigation-drawer>
    <v-app-bar dark color="primary" text app clipped-left>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-avatar size="36px" class="mr-2">
        <img src="/ste-logo.png" alt="Logo" />
      </v-avatar>
      <v-toolbar-title>
        <nuxt-link to="/">
          <span class="text-uppercase font-weight-light white--text">Stereotech</span>
          <span class="text-uppercase font-weight-medium white--text">{{ currentPage }}</span>
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="(menuItem, index) in mainMenu">
          <v-menu
            v-if="menuItem.child !== undefined"
            :key="index"
            offset-y
            open-on-hover
            close-on-click
          >
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" text dark>{{ menuItem.title }}</v-btn>
            </template>
            <v-list>
              <template v-for="(childItem, index) in menuItem.child">
                <v-list-item
                  v-if="childItem.link.startsWith('/')"
                  :key="index"
                  nuxt
                  :to="childItem.link"
                >
                  <v-list-item-title>{{ childItem.title }}</v-list-item-title>
                </v-list-item>
                <v-list-item v-else :key="index" :href="childItem.link" target="_blank">
                  <v-list-item-title>{{ childItem.title }}</v-list-item-title>
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
          >{{ menuItem.title }}</v-btn>
          <v-btn v-else :key="index" text :href="menuItem.link" target="_blank">{{ menuItem.title }}</v-btn>
        </template>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer height="auto" color="primary" dark>
      <v-container fluid grid-list-xs>
        <v-row>
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
                :src="`http://sk.ru/themes/generic/images/sklogo_${$store.state.locale}.png`"
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

export interface MenuItem {
  title: string,
  link?: string,
  icon?: string,
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

  private readonly mainMenu: MenuItem[] = [
    {
      title: this.$store.state.lang.products,
      icon: 'mdi-printer-3d',
      child: [
        {
          title: this.$store.state.lang.ste320,
          link: '/ste320'
        },
        {
          title: this.$store.state.lang.ste520,
          link: '/ste520'
        },
        {
          title: this.$store.state.lang.comparePrinters,
          link: '/printers'
        },
        {
          title: this.$store.state.lang.software.title,
          link: '/software'
        },
        {
          title: this.$store.state.lang.materials,
          link: 'https://ste3d.ru/filaments'
        }
      ]
    },
    {
      title: this.$store.state.lang.cases,
      icon: 'mdi-flag',
      child: [
        {
          title: this.$store.state.lang.photogallery,
          link: 'https://ste3d.ru/3d-printing'
        }
      ]
    },
    {
      title: this.$store.state.lang.buy,
      icon: 'mdi-cart',
      link: 'https://ste3d.ru/stereotech'
    },
    {
      title: this.$store.state.lang.support,
      icon: 'mdi-face-agent',
      child: [
        {
          title: this.$store.state.lang.docs,
          link: '/manuals'
        }
      ]
    },
    {
      title: this.$store.state.lang.contacts,
      icon: 'mdi-contacts',
      link: '/contacts'
    },
    {
      title: this.$store.state.lang.about,
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

}

</script>
