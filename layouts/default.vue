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
                v-if="subItem.link !== undefined"
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
        <v-list-item nuxt :to="localePath(resellers.link)">
          <v-list-item-icon>
            <v-icon>{{ resellers.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ resellers.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="secondary" app clipped-left v-if="this.loadedPage == false">
      <v-app-bar-nav-icon class="hidden-md-and-up">
        <v-skeleton-loader
          type="image"
          width="25"
          height="20"
        ></v-skeleton-loader>
      </v-app-bar-nav-icon>
      <v-avatar size="36px" class="mx-1">
        <v-skeleton-loader
          type="avatar"
        ></v-skeleton-loader>
      </v-avatar>
      <v-row justify="start">
        <v-col cols="3">
          <v-skeleton-loader
            style="margin-top: 6px"
            type="text"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="3" v-for="n in 3" :key="n" class="hidden-sm-and-down">
          <v-skeleton-loader
            style="margin-top: 6px"
            type="text"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-spacer/>
      <v-row justify="end" class="hidden-sm-and-down">
        <v-col cols="4" style="margin-right: 20px">
          <v-skeleton-loader
            style="margin-top: 6px"
            type="text"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-avatar size="22px">
        <v-skeleton-loader
          type="avatar"
        ></v-skeleton-loader>
      </v-avatar>
    </v-app-bar>

    <v-app-bar color="secondary" app clipped-left v-if="this.loadedPage == true">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-avatar size="36px" class="mx-1">
        <img :src="home.logo" alt="Logo" />
      </v-avatar>
      <v-toolbar-title>
        <nuxt-link no-prefetch :to="localePath(home.link)">
          <span
            :class="`font-weight-medium ${
              $vuetify.theme.dark ? 'white--text' : 'accent--text'
            }`"
            >{{ home.name1 }}</span
          >
          <span
            :class="`font-weight-medium ml-n1 ${
              $vuetify.theme.dark ? 'grey--text' : 'primary--text'
            }`"
            >{{ home.name2 }}</span
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
                    <v-col cols="6">
                      <v-list dense nav class="primary--text" :key="childIndex">
                        <v-list-item
                          v-if="childItem.link !== undefined"
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
                        <template v-for="(sublink, sublinkIndex) in childItem.child">
                          <v-list-item
                            v-if="sublink.link !== undefined"
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
                        </template>
                      </v-list>
                    </v-col>
                  </template>
                </v-row>
              </v-container>
            </v-card>
          </v-menu>
          <v-btn
            v-else
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
        :to="localePath(resellers.link)"
        exact
        class="hidden-sm-and-down"
      >
        {{ resellers.title }}
        <v-icon right dark>{{ resellers.icon }}</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" color="primary">
            <v-icon>{{ dataLayout.icon_locale }}</v-icon>
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
    <v-main>
      <nuxt />
    </v-main>
    <v-footer height="auto" color="primary" dark>
      <v-container>
        <v-row>
          <v-col cols="12" sm="3">
            <v-container>
              <v-row>
                <v-col cols="12">

                  <v-list flat light dense dark color="primary" v-if="this.loadedPage == false">
                    <v-list-item v-for="n in 3" :key="n">
                      <v-list-item-title>
                        <v-skeleton-loader
                          type="text"
                        ></v-skeleton-loader>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-avatar size="30px" class="mx-1" v-for="n in 3" :key="n">
                        <v-skeleton-loader
                          type="avatar"
                        ></v-skeleton-loader>
                      </v-avatar>
                    </v-list-item>
                  </v-list>

                  <v-list flat light dense dark color="primary" v-if="this.loadedPage == true">
                    <v-list-item>
                      <v-list-item-title>
                        &copy;{{ currentYear }} —
                        <strong>{{ dataLayout.sitename }}</strong>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item :href="dataLayout.contact_tel_link">
                      <v-list-item-title>{{ dataLayout.contact_tel }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item :href="dataLayout.contact_mail_link" target="_blank">
                      <v-list-item-title>{{ dataLayout.contact_mail }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-btn
                        text
                        icon
                        :href="dataLayout.link_vk"
                        target="_blank"
                      >
                        <v-icon>{{ dataLayout.icon_vk }}</v-icon>
                      </v-btn>
                      <v-btn
                        text
                        icon
                        :href="dataLayout.link_inst"
                        target="_blank"
                      >
                        <v-icon>{{ dataLayout.icon_inst }}</v-icon>
                      </v-btn>
                      <v-btn
                        text
                        icon
                        :href="dataLayout.link_youtube"
                        target="_blank"
                      >
                        <v-icon>{{ dataLayout.icon_youtube }}</v-icon>
                      </v-btn>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="12" sm="9">
            <v-container>
              <v-row v-if="this.loadedPage == false">
                <v-col cols="12" lg="3" sm="6" v-for="n in 2" :key="n">
                  <v-col lg="8" align="left">
                    <v-skeleton-loader
                      type="heading"
                    ></v-skeleton-loader>
                  </v-col>
                  <v-list flat light dense dark color="primary">
                    <v-list-item v-for="n in 4" :key="n">
                      <v-col lg="6" align="left" style="padding-left: 0">
                        <v-skeleton-loader
                          type="text"
                        ></v-skeleton-loader>
                      </v-col>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>

              <v-row v-if="this.loadedPage == true">
                <template v-for="(menu, index) in mainMenu">
                  <v-col
                    v-if="menu.child !== undefined"
                    cols="12"
                    sm="6"
                    lg="3"
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
                      <template v-for="(child, childIndex) in menu.child">
                        <v-list-item
                          v-if="child.link !== undefined"
                          nuxt
                          :to="localePath(child.link)"
                          :key="childIndex"
                        >
                          <v-list-item-title>{{ child.title }}</v-list-item-title>
                        </v-list-item>
                      </template>
                    </v-list>
                  </v-col>
                </template>
              </v-row>
            </v-container>
          </v-col>
        </v-row>

        <v-row justify="center" v-if="this.loadedPage == false">
          <v-col cols="6" lg="3" align="center" v-for="n in 2" :key="n" style="align-items: center;">
            <v-skeleton-loader
              height="64"
              width="100"
              type="image"
              tile
            ></v-skeleton-loader>
          </v-col>
        </v-row>

        <v-row justify="center" v-if="this.loadedPage == true">
          <v-col cols="6" lg="3">
            <a :href="dataLayout.link_skolkovo" target="_blank">
              <v-img
                height="64"
                contain
                :src="dataLayout.logo_skolkovo"
              />
            </a>
            <h6 class="text-center">
              {{ dataLayout.text_skolkovo }}
            </h6>
          </v-col>
          <v-col cols="6" lg="3">
            <a
              :href="dataLayout.link_fund"
              target="_blank"
            >
              <v-img
                height="64"
                contain
                :src="dataLayout.logo_fund"
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

  home: any = {}
  nav: any[] = []
  resellers: any = {}
  dataLayout: any = {}
  loadedPage: boolean = false

  get currentYear () {
    return new Date().getFullYear()
  }

  mapMenuItems (items: MenuItem[]): MenuItem[] {
    return items.flatMap(x => x.child ? [x, ...x.child] : [x])
  }

  get mainMenu (): MenuItem[] {
    return this.nav
  }

  private miniVariant: boolean = this.$vuetify.breakpoint.smOnly
  drawer: boolean = false

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

  private async getLayoutData() {

    let response = await fetch(`https://api.stereotech.org/api/collections/page/entries/78f5a59a-e1d5-4f36-9c92-270401431a64`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()
    this.dataLayout = data.data

  }

  private async getNavData() {

    function navFilter(item:any) {
      if (item.children.length != 0) {
        let childF = item.children.map((child:any) => {
          return navFilter(child)
        })

        return{title: item.page.title, icon: item.page.icon, link: item.page.link, 
          description: item.page.description, child: childF}
      }

      return {title: item.page.title, icon: item.page.icon, link: item.page.link, 
        description: item.page.description}
    }

    function navDelUndef(item:any) {
      for (const key in item) {
        if (item[key] === undefined){
          delete (item[key])
        }
      }

      if (typeof(item?.icon) !== 'string' && item.icon) {
        item.icon = item.icon[0].permalink
      }

      if (item.child) {
        item.child.map((child:any) => {
          return navDelUndef(child)
        })
      }

      return item
    }
    
    let response = await fetch(`https://api.stereotech.org/api/navs/main_nav/tree`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()

    let nav = data.data.map((item:any) => {
      return navFilter(item)
    })

    nav = nav.map((item:any) => {
      return navDelUndef(item)
    })

    response = await fetch(`https://api.stereotech.org/api/collections/page/entries/a2701ab7-b60d-461f-bc13-3bb0422393d3`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    data = await response.json()
    data = [data.data]

    let home = data.map((item:any) => {return {title: item.title, logo: item.logo[0].permalink, link: item.link, name1: item.name1, name2: item.name2}})

    this.home = home[0]
    this.resellers = nav[nav.length - 1]
    nav.pop()
    this.nav = nav

  }

  async mounted () {
    await this.getLayoutData()
    await this.getNavData()
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
    this.loadedPage = true
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
