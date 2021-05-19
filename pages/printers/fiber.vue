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
        <BuyPrinter id='buyPrinterForm' :variant="currentPrinter" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BuyPrinter from '~/components/printers/BuyPrinter.vue'
import MaterialsTable from '~/components/MaterialsTable.vue'
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType, PrinterType } from '~/types/printerVariant'
import gql from 'graphql-tag'
import { Material, MaterialSpec } from '~/types/materials'
import { namespace } from 'vuex-class'

const materials = namespace('materials')

@Component({
  components: {
    BuyPrinter,
    MaterialsTable
  }
})
export default class Fiber extends Vue {
  @materials.State filled!: boolean
  @materials.Action loadMaterialsData!: any
  @materials.Getter ourBrandMaterials!: any
  @materials.Getter specs!: MaterialSpec[]
  get currentPrinter(): PrinterVariant {
    return {
      model: this.$tc('Серия Fiber'),
      image: '/printers/desktop/fiber.jpg',
      printerType: PrinterType.ThreeAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Standard,
      fiveAxisType: FiveAxisType.Normal,
      description: ''
    }

  }

  async mounted(){
    if (!this.filled) {
      await this.loadMaterialsData()
    }
  }

}

</script>

<style>
</style>