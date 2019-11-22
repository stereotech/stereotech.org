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
            <v-list-item-title class="font-weight-bold" nuxt :to="link.to">{{ link.name }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            v-for="content in link.contents"
            :key="content.to"
            nuxt
            :to="`/manuals${menuSection}${link.to}${content.to}`"
          >{{ content.name }}</v-list-item>
        </template>
        <!--<v-list-group value="true">
        <template v-slot:activator>
          
        </template>
        <v-list-item
          v-for="content in link.contents"
          :key="content.to"
          @click="goTo(`/manuals${menuSection}${link.to}${content.to}` ,content.to)"
        >{{ content.name }}</v-list-item>
        </v-list-group>-->
      </template>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { RootState } from '~/store'

@Component
export default class SideNav extends Vue {
  @State menu!: any

  current: number = 0
  setInter: any = null
  showNav: boolean = false
  item: any = {}

  get list (): any[] {
    return this.menu[this.$route.params.section] || []
  }

  get menuSection (): string {
    return '/' + this.$route.params.section
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
