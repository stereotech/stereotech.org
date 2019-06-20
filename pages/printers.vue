<template>
  <v-layout row wrap>
    <v-flex xs12 align-center>
      <h1
        class="display-3 text-uppercase font-weight-light text-xs-center hidden-xs-only"
      >{{ $t('compareOurPrinters') }}</h1>
      <h1
        class="headline text-uppercase font-weight-light text-xs-center hidden-sm-and-up"
      >{{ $t('compareOurPrinters') }}</h1>
    </v-flex>
    <CompareBanner/>

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