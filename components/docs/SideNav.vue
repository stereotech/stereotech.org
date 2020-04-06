<template>
  <v-card>
    <v-list nav v-model="item">
      <template v-for="(group, index) in list">
        <v-list-item :key="`title-${index}`">
          <v-list-item-title class="title">{{ group.title }}</v-list-item-title>
        </v-list-item>
        <v-divider :key="`divider-${index}`"></v-divider>
        <template v-for="link in group.links">
          <v-list-item :key="link.to">
            <v-list-item-title
              class="font-weight-bold"
              nuxt
              :to="localePath(link.to)"
            >{{ link.name }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            v-for="content in link.contents"
            :key="content.to"
            nuxt
            :to="localePath(`/support/${folder}${menuSection}${link.to}${content.to}`)"
          >{{ content.name }}</v-list-item>
        </template>
      </template>
      <v-divider v-if="downloadLink"></v-divider>
      <v-list-item v-if="downloadLink" :href="downloadLink" target="_blank">
        <v-list-item-icon>
          <v-icon>mdi-download</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ $store.state.lang.manuals.download }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { RootState } from '~/store'

@Component
export default class SideNav extends Vue {
  @Prop({ type: String, default: '' }) prefix!: string
  @Prop({ type: String, default: 'manuals' }) folder!: string
  @State menu!: any

  current: number = 0
  setInter: any = null
  showNav: boolean = false
  item: any = {}

  get list (): any[] {
    return this.menu[this.prefix + this.$route.params.section] || []
  }

  get menuSection (): string {
    return '/' + this.$route.params.section
  }

  get downloadLink (): string | undefined {
    return this.menu[this.prefix + this.$route.params.section][0].download
  }

  goTo (to: string, content: string) {
    this.$router.push(to, () => {
      this.$vuetify.goTo(content)
    })
  }
}
</script>

<style>
</style>
