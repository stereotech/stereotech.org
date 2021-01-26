<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1
          class="font-weight-light"
        >{{$t('Серия Special - Серия 3D и 5D принтеров для композитной печати с непрерывным волокном')}}</h1>
        <h2>{{$tc('от 399000')}}</h2>
      </v-col>
      <v-col cols="12" lg="10">
        <materialsSheet />
      </v-col>      
      <v-col cols="12" lg="10">
        <BuyPrinter id='buyPrinterForm' :variant="currentPrinter" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BuyPrinter from '~/components/printers/BuyPrinter.vue'
import materialsSheet from '~/components/materialsSheet.vue'
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType, PrinterType } from '~/types/printerVariant'
import gql from 'graphql-tag'

@Component({
  components: {
    BuyPrinter,
    materialsSheet
  }
})
export default class Special extends Vue {
  get currentPrinter(): PrinterVariant {
    return {
      model: this.$tc('Серия Special'),
      image: '/printers/desktop/special.jpg',
      printerType: PrinterType.ThreeAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Standard,
      fiveAxisType: FiveAxisType.Normal,
      description: ''
    }

  }

}

</script>

<style>
</style>