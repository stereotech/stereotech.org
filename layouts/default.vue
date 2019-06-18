<template>
  <v-app>
    <v-navigation-drawer app clipped temporary hide-overlay v-model="drawer">
      <v-list class="pa-1">
        <v-list-tile avatar nuxt to="/">
          <v-list-tile-avatar>
            <img src="/ste-logo.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Stereotech</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <template v-for="(menuItem, index) in mainMenu">
        <v-list-tile :key="menuItem.title" nuxt ripple :to="menuItem.link">
          <v-list-tile-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t(menuItem.title) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list :key="menuItem.title + index">
          <v-list-tile
            v-for="childItem in menuItem.child"
            :key="childItem.title"
            nuxt
            ripple
            :to="childItem.link"
          >
            <v-list-tile-action>
              <v-icon>{{ childItem.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ $t(childItem.title) }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </template>
      <v-list>
        <v-list-tile href="https://blog.ste3d.ru" target="_blank">
          <v-list-tile-action>
            <v-icon>mdi-blogger</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('blog') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile nuxt to="/contacts">
          <v-list-tile-action>
            <v-icon>mdi-contacts</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('contacts') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile href="https://ste3d.ru/stereotech" target="_blank">
          <v-list-tile-action>
            <v-icon>mdi-cart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('buy') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-container fluid grid-list-xl>
        <v-layout wrap align-center>
          <v-flex xs12 d-flex>
            <v-select
              v-model="$i18n.locale"
              :items="langs"
              item-value="value"
              item-text="key"
              :label="$t('language')"
              @change="setLocale"
            ></v-select>
          </v-flex>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
    <v-toolbar dark color="primary" flat app clipped-left>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-avatar size="36px">
        <img src="/ste-logo.png" alt="Logo">
      </v-avatar>
      <v-toolbar-title>
        <nuxt-link to="/">
          <span class="text-uppercase font-weight-light white--text">Stereotech</span>
          <span class="text-uppercase font-weight-medium white--text">{{ $t(currentPage) }}</span>
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="(menuItem, index) in mainMenu">
          <v-menu offset-y :key="index" v-if="menuItem.child" open-on-hover>
            <v-btn flat dark slot="activator">{{ $t(menuItem.title) }}</v-btn>
            <v-list>
              <v-list-tile
                v-for="(childItem, index) in menuItem.child"
                :key="index"
                nuxt
                :to="childItem.link"
              >
                <v-list-tile-title>{{ $t(childItem.title) }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </template>
        <v-btn flat href="https://blog.ste3d.ru" target="_blank">{{$t('blog')}}</v-btn>
        <v-btn flat nuxt to="/contacts">{{$t('contacts')}}</v-btn>
        <v-btn flat icon href="https://ste3d.ru/stereotech" target="_blank">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn flat icon v-on="on">
              <v-icon>mdi-web</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-tile v-for="(item, index) in langs" :key="index" @click="setLocale(item.value)">
              <v-list-tile-title>{{ item.key }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-md>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer height="auto" color="primary" dark>
      <v-layout row wrap justify-center>
        <v-flex xs6>
          &copy;2019 —
          <strong>Stereotech</strong>
        </v-flex>
        <v-flex xs6>
          <v-img
            height="64"
            contain
            src="http://fasie.ru/local/templates/.default/markup/img/head-logo.svg"
          />
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Layout extends Vue {

  private readonly mainPage: any = {
    title: '5d-additive',
    link: '/',
  }

  private readonly mainMenu: any[] = [
    {
      title: 'printers',
      icon: 'mdi-printer-3d',
      child: [
        {
          title: 'ste320',
          link: '/ste320',
        },
        {
          title: 'ste520',
          link: '/ste520'
        },
        {
          title: 'comparePrinters',
          link: '/printers'
        }
      ]
    },
  ]
  private miniVariant: boolean = this.$vuetify.breakpoint.smOnly
  private drawer: boolean = false

  get currentPage (): string {
    let name = this.mainPage.title
    this.mainMenu.forEach(element => {
      if (element.link !== this.$route.fullPath) {
        element.child.forEach(childEl => {
          if (childEl.link === this.$route.fullPath) {
            name = childEl.title
          }
        });
      } else {
        name = element.title
      }
    });

    return name
  }

  private langs = this.$store.state.locales

  private setLocale (locale: string) {
    this.$store.commit('setLang', locale)
    this.$i18n.locale = locale
  }

}

</script>
