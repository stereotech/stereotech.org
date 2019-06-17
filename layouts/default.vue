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
      <v-list>
        <v-list-tile
          v-for="menuItem in mainMenu"
          :key="menuItem.title"
          nuxt
          ripple
          :to="menuItem.link"
        >
          <v-list-tile-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ $t(menuItem.title) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-select
        v-model="$i18n.locale"
        :items="langs"
        item-value="value"
        item-text="key"
        label="Language"
        @change="setLocale"
      ></v-select>
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
        <v-btn
          flat
          v-for="menuItem in mainMenu"
          :key="menuItem.title"
          nuxt
          :to="menuItem.link"
        >{{ menuItem.title }}</v-btn>
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
      <v-container fluid grid-list-xs>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Layout extends Vue {

  private readonly mainPage: MenuItem = {
    icon: 'mdi-view-dashboard',
    title: '5D Additive Manufacturing',
    link: '/'
  }

  private readonly mainMenu: MenuItem[] = [
    {
      icon: 'mdi-printer-3d',
      title: 'printers',
      link: '/printers'
    }
  ]
  private miniVariant: boolean = this.$vuetify.breakpoint.smOnly
  private drawer: boolean = false

  get currentPage (): string | undefined {
    const name = this.mainMenu.find(obj => {
      return obj.link === this.$route.fullPath ? obj : null
    })
    return name ? name.title : this.mainPage.title
  }

  private langs = this.$store.state.locales

  private setLocale (locale: string) {
    this.$store.commit('setLang', locale)
  }

}

class MenuItem {
  icon: string
  title: string
  link: string
  constructor (icon: string, title: string, link: string) {
    this.icon = icon
    this.title = title
    this.link = link
  }
}
</script>
