<template>
  <v-layout row wrap>
    <CompareBanner>
      <v-layout align-center column justify-end class="fill-height">
        <h4
          class="display-1 text-uppercase font-weight-light text-xs-center pb-3"
          v-if="$vuetify.breakpoint.smAndUp"
        >Compare our printers</h4>
        <h4
          class="title text-uppercase font-weight-light text-xs-center"
          v-else
        >Compare our printers</h4>
      </v-layout>
    </CompareBanner>
    <CompareSpecs/>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import CompareSpecs from '~/components/printers/CompareSpecs.vue'
import CompareBanner from '~/components/printers/CompareBanner.vue'

@Component({
  components: {
    CompareBanner,
    CompareSpecs
  }
})
export default class Printers extends Vue {

}

</script>

<style>
</style>