<template>
  <v-layout row wrap>
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




