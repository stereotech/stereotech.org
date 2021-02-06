<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">
          {{
            $t(
              "Серия 8хх - Восьмиосевой принтер для производства прочных композитных деталей"
            )
          }}
        </h1>
        <h2>{{ $t("Стоимость по запросу") }}</h2>
      </v-col>
      <v-col cols="12" lg="10">
        <KeyFeatures
          :title="this.$tc('Преимущества технологии 5Dtech')"
          :items="features"
        />
      </v-col>
      <v-col cols="12" lg="10" v-if="product">
        <FullSpecs :attributes="product.attributes" />
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
import FullSpecs from '~/components/printers/FullSpecs.vue'
import KeyFeatures from '~/components/KeyFeatures.vue'
import { KeyFeature, MediaType } from '~/types/keyFeature'
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType, PrinterType } from '~/types/printerVariant'
import gql from 'graphql-tag'

@Component({
  components: {
    BuyPrinter,
    FullSpecs,
    KeyFeatures
  }
})
export default class Series8 extends Vue {
  private features: any[] = []
  get currentPrinter (): PrinterVariant {
    return {
      model: this.$tc('Серия 8хх'),
      image: '/printers/industrial/series8.jpg',
      printerType: PrinterType.ThreeAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Standard,
      fiveAxisType: FiveAxisType.Normal,
      description: this.$tc('Восьмиосевая машина АП на базе промышленного манипулятора для производства прочных полимерных деталей')
    }
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

  product: any = {}
  async mounted () {
    const result = await this.$apollo.query({
      query: gql`query{
         product(id: "683") {
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
      }`
    })
    this.product = result.data.product
    await this.getFeatures()
  }
}

</script>

<style>
</style>