<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1
          class="font-weight-light"
        >Серия 8хх - Восьмиосевой принтер для производства прочных композитных деталей</h1>
        <h2>Стоимость по запросу</h2>
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
    model: 'Серия 8хх',
    image: 'printers/industrial/series8.jpg',
    printerType: PrinterType.ThreeAxis,
    extruderType: ExtruderType.Dual,
    printVolumeType: PrintVolumeType.Standard,
    fiveAxisType: FiveAxisType.Normal
  }
}

</script>

<style>
</style>