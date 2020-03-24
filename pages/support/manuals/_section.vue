<template>
  <v-row>
    <v-col cols="12" sm="3">
      <SideNav />
    </v-col>
    <v-col cols="12" sm="9">
      <nuxt-child />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SideNav from '@/components/docs/SideNav.vue'

@Component({
  components: {
    SideNav
  }
})
export default class ManualSection extends Vue {
  validate (context: any) {
    return context.store.state.menu[context.params.section] !== undefined
  }
}
</script>

<style>
</style>