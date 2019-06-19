<template>
  <PrinterBanner model="ste320" :description="$t('printer.ste320.description')"/>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import PrinterBanner from '~/components/printers/PrinterBanner.vue'

@Component({
  components: {
    PrinterBanner
  }
})
export default class Ste320 extends Vue {

}

</script>

<style>
</style>
