<template>
  <v-layout row wrap>
    <v-flex xs12 align-center>
      <h1
        class="display-3 text-uppercase font-weight-light text-xs-center hidden-xs-only"
      >{{ $t('slogan') }}</h1>
      <h1
        class="headline text-uppercase font-weight-light text-xs-center hidden-sm-and-up"
      >{{ $t('slogan') }}</h1>
    </v-flex>
    <CompareBanner v-if="$vuetify.breakpoint.smAndUp"/>
    <PrintersBanner/>
    <SoftwareBanner/>
    <MainParalax image="/main/bg1.png" buttonLink="/about"/>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
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




