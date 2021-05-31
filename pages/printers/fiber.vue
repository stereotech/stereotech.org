<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1
          class="font-weight-light"
        >{{$t('Серия Fiber - Серия 3D и 5D принтеров для композитной печати с непрерывным волокном')}}</h1>
        <h2>{{$tc('от 399000')}}</h2>
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterSelector
          v-model="currentPrinter"
          :items="printerItems"
          :price="String(currentPrice)"
        />
      </v-col> 
      <v-col cols="12" lg="10">
        <FullSpecs :specXd="spec5d" />
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
import PrinterSelector from '~/components/printers/PrinterSelector.vue'
import FullSpecs from '~/components/printers/FullSpecs.vue'
import MaterialsTable from '~/components/MaterialsTable.vue'
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType, PrinterType } from '~/types/printerVariant'
import gql from 'graphql-tag'
import { Material, MaterialSpec } from '~/types/materials'
import { namespace } from 'vuex-class'

const materials = namespace('materials')

@Component({
  components: {
    BuyPrinter,
    MaterialsTable,
    PrinterSelector,
    FullSpecs
  }
})
export default class Fiber extends Vue {
  @materials.State filled!: boolean
  @materials.Action loadMaterialsData!: any
  @materials.Getter ourBrandMaterials!: any
  @materials.Getter specs!: MaterialSpec[]

  currentPrinter: any = {}
  private printerItems: any[] = []
  private spec5d: any[] = []

  private async getFulSpec5 () {
    let data
    let response = await fetch(`https://api2.stereotech.org/api/collections/get/printers?token=${process.env.COCKPIT_TOKEN}`)
    data = await response.json()
    //console.log(data)
    this.spec5d = data.entries.filter(v => /^5\d0 fiber/i.test(v.model))
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
    this.printerItems = printData.entries.filter(v => /fiber/i.test(v.model))
    this.currentPrinter = this.printerItems.filter(v => /^520 fiber/i.test(v.model))[0]
    //console.log(this.printerItems)
  }

  get currentPrice (): number {
    // const base = this.product ? this.product.price : 129000
    // const currentOption = this.product && this.currentPrinter ? this.product.options[0].product_option_value.find((o: any) => o.name === (this.currentPrinter ? this.currentPrinter.model : '')).price : 0
    // return base + currentOption
    return this.currentPrinter.price
  }
  async mounted(){
    await this.getPrinterItems()
    await this.getFulSpec5()
    if (!this.filled) {
      await this.loadMaterialsData()
    }
  }

}

</script>

<style>
</style>