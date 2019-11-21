<template>
  <v-row>
    <v-col cols="12">
      <h1
        class="display-3 text-uppercase font-weight-light text-center hidden-xs-only"
      >{{ $store.state.lang.slogan }}</h1>
      <h1
        class="headline text-uppercase font-weight-light text-center hidden-sm-and-up"
      >{{ $store.state.lang.slogan }}</h1>
    </v-col>
    <CompareBanner />
    <PrintersBanner />
    <SoftwareBanner />
    <MainParalax image="/main/bg1.webp" button-link="/about" />
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainParalax from '~/components/MainParalax.vue'
import PrintersBanner from '~/components/PrintersBanner.vue'
import CompareBanner from '~/components/printers/CompareBanner.vue'
import SoftwareBanner from '~/components/software/SoftwareBanner.vue'

@Component({
  components: {
    MainParalax,
    CompareBanner,
    PrintersBanner,
    SoftwareBanner
  }
})
export default class Index extends Vue {

}
</script>

<style>
</style>
