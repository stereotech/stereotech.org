<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">
          {{ $t("Серия 5хх - инновационные 5D принтеры") }}
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
          :title="$tc('Преимущества технологии 5Dtech')"
          :items="features"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <KeyFeatures
          :title="this.$tc('Причины выбрать принтеры Stereotech')"
          :items="reasonsToUse"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <ServiceBenefits />
      </v-col>
      <v-col cols="12" lg="10">
        <ProductCard
          image="/printers/software/steslicer.webp"
          title="STE Slicer"
          :description="
            $t(
              'Первое в мире программное обеспечение для 5D принтеров\nПодготовка моделей для 3D и 5D печати\nПоддержка различных режимов 5D печати\nВстроенное STE App'
            )
          "
          link="/software/steslicer"
        />
      </v-col>

      <v-col cols="12" lg="10" v-if="product">
        <FullSpecs :specXd="spec5d" />
      </v-col>
      <v-col cols="12" lg="10">
        <MaterialsTable
          title="Сравнение материалов"
          :materials="ourBrandMaterials"
          :specs="specs"
        />
      </v-col>
      <v-col cols="12" lg="10" v-if="currentPrinter">
        <BuyPrinter
          id="buyPrinterForm"
          :variant="currentPrinter"
          :price="String(currentPrice)"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <ProductCard
          image="/materials/sealant.jpg"
          :title="this.$tc('Материалы для печати')"
          link="/materials"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainParalax from '~/components/MainParalax.vue'
import ColorModes from '~/components/printers/ColorModes.vue'
import PrinterFeature from '~/components/printers/PrinterFeature.vue'
import ProductCard from '~/components/ProductCard.vue'
import BuyPrinter from '~/components/printers/BuyPrinter.vue'
import FullSpecs from '~/components/printers/FullSpecs.vue'
import PrinterSelector from '~/components/printers/PrinterSelector.vue'
import BenefitsPanel from '~/components/benefits/BenefitsPanel.vue'
import ApplicationsPanel from '~/components/applications/ApplicationsPanel.vue'
import ServiceBenefits from '~/components/printers/ServiceBenefits.vue'
import KeyFeatures from '~/components/KeyFeatures.vue'
import { KeyFeature, MediaType } from '~/types/keyFeature'
import MaterialsTable from '~/components/MaterialsTable.vue'
//import materialsSheet from '~/components/materialsSheet.vue'
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType, PrinterType } from '~/types/printerVariant'
import gql from 'graphql-tag'
import { Material, MaterialSpec } from '~/types/materials'
import { namespace } from 'vuex-class'

const materials = namespace('materials')

@Component({
  components: {
    ColorModes,
    MainParalax,
    PrinterFeature,
    ProductCard,
    BuyPrinter,
    FullSpecs,
    PrinterSelector,
    BenefitsPanel,
    ApplicationsPanel,
    ServiceBenefits,
    KeyFeatures,
    MaterialsTable
    //materialsSheet
  },
  head: {
    title: 'Серия 5xx'
  }
})
export default class Series5 extends Vue {

  @materials.State filled!: boolean
  @materials.Action loadMaterialsData!: any
  @materials.Getter ourBrandMaterials!: any
  @materials.Getter specs!: MaterialSpec[]
  currentPrinter: any = {}
  product: any = {}
  private spec5d: any[] = []
  private features: any[] = []
  private reasonsToUse: any[] = []
  private printerItems: any[] = []
  private async getFulSpec5 () {
    let data
    let response = await fetch(`https://api2.stereotech.org/api/collections/get/printers?token=${process.env.COCKPIT_TOKEN}`)
    data = await response.json()
    //console.log(data)
    this.spec5d = data.entries.filter(v => /^5\d0 hybrid/i.test(v.model))
  }

  private async getFeatures () {
    let data1
    let response1 = await fetch(`https://api2.stereotech.org/api/collections/get/features?token=${process.env.COCKPIT_TOKEN}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lang: this.$i18n.locale
      })
    })
    data1 = await response1.json()
    this.features = data1.entries
  }

  private async getReasonsToUse () {
    let data2
    let response2 = await fetch(`https://api2.stereotech.org/api/collections/get/reasonsToChose?token=${process.env.COCKPIT_TOKEN}`,{
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lang: this.$i18n.locale
      })
    })
    data2 = await response2.json()
    this.reasonsToUse = data2.entries
  }

  private async getPrinterItems () {
    let printData
    let response3 = await fetch(`https://api2.stereotech.org/api/collections/get/printersForSelling?token=${process.env.COCKPIT_TOKEN}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lang: this.$i18n.locale
      })
    })
    printData = await response3.json()
    this.printerItems = printData.entries
    this.currentPrinter = this.printerItems.filter(v => /^520 hybrid/i.test(v.model))[0]
    //console.log(this.currentPrinter)
  }

  get currentPrice (): number {
    // const base = this.product ? this.product.price : 129000
    // const currentOption = this.product && this.currentPrinter ? this.product.options[0].product_option_value.find((o: any) => o.name === (this.currentPrinter ? this.currentPrinter.model : '')).price : 0
    // return base + currentOption
    return this.currentPrinter.price
  }

  async mounted () {
    // const result = await this.$apollo.query({
    //   query: gql`query {
    //      product(id: "676") {
    //         product_id,
    //         name,
    //         price,
    //         options {
    //           product_option_id,
    //           name,
    //           product_option_value {
    //             product_option_value_id,
    //             name,
    //             price
    //           }
    //         }
    //         attributes {
    //           attribute_group_id,
    //           name,
    //           attribute {
    //             name,
    //             attribute_id,
    //             text
    //           }
    //         }
    //      }
    //   }
    //   `
    // })
    // this.product = result.data.product
    // this.product.price = Number(this.product.price)
    // this.currentPrinter = this.printerItems[0]
    await this.getPrinterItems()
    await this.getFulSpec5()
    await this.getFeatures()
    await this.getReasonsToUse()
    if (!this.filled) {
      await this.loadMaterialsData()
    }
  }

}

</script>

<style>
</style>
