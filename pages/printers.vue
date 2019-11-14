<template>
  <v-row>
    <v-col class="align-center" cols="12">
      <h1
        class="display-3 text-uppercase font-weight-light text-center hidden-xs-only"
      >
        {{ $t('compareOurPrinters') }}
      </h1>
      <h1
        class="headline text-uppercase font-weight-light text-center hidden-sm-and-up"
      >
        {{ $t('compareOurPrinters') }}
      </h1>
    </v-col>
    <CompareBanner />

    <CompareSpecs />
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
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
