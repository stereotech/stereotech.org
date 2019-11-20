<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <SideNav />
      </v-col>
    </v-row>
  </v-container>
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
  validate ({ store, params }) {
    return store.state.menu[params.section] !== undefined
  }
}
</script>

<style>
</style>