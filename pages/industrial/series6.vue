<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">
          {{
            $t(
              "Серия 6хх - Шестиосевая установка аддитивного производства на базе промышленного манипулятора для производства полимерных деталей"
            )
          }}
        </h1>
        <h2>{{ $t("Стоимость по запросу") }}</h2>
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
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType, PrinterType } from '~/types/printerVariant'
import gql from 'graphql-tag'

@Component({
  components: {
    BuyPrinter
  }
})
export default class Series6 extends Vue {
  get currentPrinter (): PrinterVariant[] {
    return [
      {
        model: this.$tc('Серия 6хх'),
        image: '/printers/industrial/series6.jpg',
        printerType: PrinterType.ThreeAxis,
        extruderType: ExtruderType.Dual,
        printVolumeType: PrintVolumeType.Standard,
        fiveAxisType: FiveAxisType.Normal,
        description: this.$tc('Шестиосевая машина АП на базе промышленного манипулятора для производства полимерных деталей')
      }
    ]

  }


}

</script>

<style>
</style>