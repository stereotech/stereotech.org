<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1
          class="font-weight-light"
        >{{$tc('Серия Special - Серия 3D и 5D принтеров для композитной печати с непрерывным волокном')}}</h1>
        <h2>{{$tc('от 399000')}}</h2>
      </v-col>
      <v-col cols="12" lg="10">
        <BuyPrinter :variant="currentPrinter" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BuyPrinter from '~/components/printers/BuyPrinter.vue'
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType, PrinterType } from '~/types/printerVariant'
import gql from 'graphql-tag'

@Component({
  components: {
    BuyPrinter
  }
})
export default class Special extends Vue {
  currentPrinter: PrinterVariant = {
    model: 'Серия Special',
    image: '/printers/desktop/special.jpg',
    printerType: PrinterType.ThreeAxis,
    extruderType: ExtruderType.Dual,
    printVolumeType: PrintVolumeType.Standard,
    fiveAxisType: FiveAxisType.Normal,
    description: ''
  }
}

</script>

<style>
</style>