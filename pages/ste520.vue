<template>
  <PrinterBanner model="ste520" :description="$t('printer.ste520.description')"/>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import PrinterBanner from '~/components/printers/PrinterBanner.vue'

@Component({
  components: {
    PrinterBanner
  }
})
export default class Ste520 extends Vue {

}

</script>

<style>
</style>
