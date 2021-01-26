<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">
          {{
            $t("Серия 3хх - доступные принтеры для профессиональной 3D печати")
          }}
        </h1>
      </v-col>
      <v-col cols="12" lg="10" v-if="currentPrinter">
        <PrinterSelector
          v-model="currentPrinter"
          :items="printerItems"
          :price="String(currentPrice)"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <KeyFeatures
          :title="$t('Причины выбрать принтеры Stereotech')"
          :items="reasonsToUse"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <ServiceBenefits />
      </v-col>
      <v-col cols="12" lg="10" v-if="spec3d">
        <FullSpecs :specXd="spec3d" />
      </v-col>
      <v-col cols="12" lg="10">
        <materialsSheet />
      </v-col>
      <v-col cols="12" lg="10" v-if="currentPrinter">
        <BuyPrinter id='buyPrinterForm' :variant="currentPrinter" :price="String(currentPrice)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ColorModes from '~/components/printers/ColorModes.vue'
import PrinterFeature from '~/components/printers/PrinterFeature.vue'
import BuyPrinter from '~/components/printers/BuyPrinter.vue'
import FullSpecs from '~/components/printers/FullSpecs.vue'
import SupportedSlicers from '~/components/printers/SupportedSlicers.vue'
import PrinterSelector from '~/components/printers/PrinterSelector.vue'
import ServiceBenefits from '~/components/printers/ServiceBenefits.vue'
import KeyFeatures from '~/components/KeyFeatures.vue'
import { KeyFeature, MediaType } from '~/types/keyFeature'
import materialsSheet from '~/components/materialsSheet.vue'
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType, PrinterType } from '~/types/printerVariant'
import gql from 'graphql-tag'

@Component({
  components: {
    ColorModes,
    PrinterFeature,
    BuyPrinter,
    FullSpecs,
    SupportedSlicers,
    PrinterSelector,
    ServiceBenefits,
    KeyFeatures,
    materialsSheet
  },
  head: {
    title: 'Серия 3хх'
  }
})
export default class Series3 extends Vue {

  private spec3d: any[] = []
  private reasonsToUse: any[] = []
  private async getFulSpec3() {
    let data
    let response = await fetch(`https://api2.stereotech.org/api/collections/get/printers?token=${process.env.COCKPIT_TOKEN}`)
    data = await response.json()
    //console.log(data)
    this.spec3d = data.entries.filter(v => /^3/.test(v.model))
  }
  get printerItems (): PrinterVariant[] {
    return [
      {
        model: '320 Base',
        image: '/printers/desktop/series3.jpg',
        buyImage: '/printers/desktop/series3_buy.jpg',
        printerType: PrinterType.ThreeAxis,
        extruderType: ExtruderType.Single,
        printVolumeType: PrintVolumeType.Standard,
        fiveAxisType: FiveAxisType.Normal,
        description: this.$t('Стартовый принтер для обучения, производства и разработки с одним экструдером и закрытой камерой')
      },
      {
        model: '320 Pro',
        image: '/printers/desktop/series3.jpg',
        buyImage: '/printers/desktop/series3_buy.jpg',
        printerType: PrinterType.ThreeAxis,
        extruderType: ExtruderType.Dual,
        printVolumeType: PrintVolumeType.Standard,
        fiveAxisType: FiveAxisType.Normal,
        description: this.$t('Продвинутый принтер для обучения, производства и разработки с двумя экструдерами и закрытой камерой')
      },
      {
        model: '320 Plus',
        image: '/printers/desktop/series3.jpg',
        buyImage: '/printers/desktop/series3_buy.jpg',
        printerType: PrinterType.ThreeAxis,
        extruderType: ExtruderType.Dual,
        printVolumeType: PrintVolumeType.StandardLong,
        fiveAxisType: FiveAxisType.Normal,
        description: this.$t('Продвинутый принтер с двумя экструдерами и зоной печати 200x210x300 мм')
      },
      {
        model: '330 Pro',
        image: '/printers/desktop/series3.jpg',
        buyImage: '/printers/desktop/series3_buy.jpg',
        printerType: PrinterType.ThreeAxis,
        extruderType: ExtruderType.Dual,
        printVolumeType: PrintVolumeType.Extended,
        fiveAxisType: FiveAxisType.Normal,
        description: this.$t('Продвинутый принтер с двумя экструдерами и зоной печати 300x310x300 мм')
      },
      {
        model: '330 Plus',
        image: '/printers/desktop/series3.jpg',
        buyImage: '/printers/desktop/series3_buy.jpg',
        printerType: PrinterType.ThreeAxis,
        extruderType: ExtruderType.Dual,
        printVolumeType: PrintVolumeType.ExtendedLong,
        fiveAxisType: FiveAxisType.Normal,
        description: this.$t('Продвинутый принтер с двумя экструдерами и зоной печати 300x310x400 мм')
      },
    ]
  }

  private async getReasonsToUse(){
    let data2
    let response2 = await fetch(`https://api2.stereotech.org/api/collections/get/reasonsToChose?token=${process.env.COCKPIT_TOKEN}`)
    data2 = await response2.json()
    this.reasonsToUse = data2.entries
  }
  currentPrinter: PrinterVariant | null = null

  product: any = null

  get currentPrice (): number {
    const base = this.product ? this.product.price : 129000
    const currentOption = this.product && this.currentPrinter ? this.product.options[0].product_option_value.find((o: any) => o.name === (this.currentPrinter ? this.currentPrinter.model : '')).price : 0
    return base + currentOption
  }

  async mounted () {
    
    const result = await this.$apollo.query({
      query: gql`query {
         product(id: "677") {
            product_id,
            name,
            price,
            options {
              product_option_id,
              name,
              product_option_value {
                product_option_value_id,
                name,
                price
              }
            }
            attributes {
              attribute_group_id,
              name,
              attribute {
                name,
                attribute_id,
                text
              }
            }
         }
      }
      `
    })
    this.product = result.data.product
    this.product.price = Number(this.product.price)
    this.currentPrinter = this.printerItems[0]

    await this.getFulSpec3()
    await this.getReasonsToUse()

  }
}

</script>

<style>
</style>
