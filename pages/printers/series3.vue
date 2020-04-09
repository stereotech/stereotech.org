<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">{{$t('Серия 3хх - доступные принтеры для профессиональной 3D печати')}}</h1>
        <h2>{{$tc("от")}} {{ product.price }}</h2>
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterSelector v-model="currentPrinter" :items="printerItems" />
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterFeature
          :title="$tc('STE APP')"
          :description="$t('приложение для управления процессом печати')"
          image="/printers/common/cluster1.webp"
        >
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('управление несколькими 3D и 5D принтерами через единый интерфейс') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('планирование заданий печати') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('резервация принтеров') }}</p>
        </PrinterFeature>
      </v-col>
      <v-col cols="12" lg="10">
        <ColorModes model="ste320" />
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterFeature
          :title="$t('лаконичный дизайн')"
          :description="$t('простой, но функциональный')"
          image="/printers/ste320/design.webp"
        >
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('полностью закрытая камера') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('низкий уровень шума') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('легкий доступ к материалу печати') }}</p>
        </PrinterFeature>
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterFeature
          right-text
          :title="$t('жесткая алюминиевая рама')"
          :description="$t('минимум вибраций')"
          image="/printers/common/frame.webp"
        >
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('стабильный процесс печати') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('точные линейные направляющие') }}</p>
        </PrinterFeature>
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterFeature
          :title="$t('производительная электроника')"
          :description="$t('32-Х БИТНЫЙ МИКРОКОНТРОЛЛЕР')"
          image="/printers/common/motherboard.webp"
        >
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('4-Х ЯДЕРНЫЙ 1ГГЦ СОПРОЦЕССОР ДЛЯ СЕТЕВОГО СОЕДИНЕНИЯ И УПРАВЛЕНИЯ ПРОЦЕССОМ ПЕЧАТИ')}}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('ВНУТРЕННЕЕ ХРАНИЛИЩЕ 8ГБ') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('ДРАЙВЕРЫ ШАГОВЫХ ДВИГАТЕЛЕЙ С ДЕЛЕНИЕМ ШАГА 1/128') }}</p>
        </PrinterFeature>
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterFeature
          right-text
          :title="$t('ДВУХСОПЕЛЬНАЯ ПЕЧАТАЮЩАЯ ГОЛОВКА')"
          :description="$t('ЭКСТРУДЕР С ПРЯМОЙ ПОДАЧЕЙ ДЛЯ ПЕЧАТИ ЛЮБЫМИ МАТЕРИАЛАМИ')"
          image="/printers/common/printhead.webp"
        >
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('МАКСИМАЛЬНАЯ ТЕМПЕРАТУРА 320°C') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('СМЕННЫЕ ПЕЧАТНЫЕ БЛОКИ') }}</p>
        </PrinterFeature>
      </v-col>
      <v-col cols="12" lg="10">
        <SupportedSlicers />
      </v-col>
      <v-col cols="12" lg="10" v-if="product">
        <FullSpecs :attributes="product.attributes" />
      </v-col>
      <v-col cols="12" lg="10">
        <BuyPrinter :variant="currentPrinter" :price="String(currentPrice)" />
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
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType, PrinterType } from '~/types/printerVariant'
import gql from 'graphql-tag'

@Component({
  components: {
    ColorModes,
    PrinterFeature,
    BuyPrinter,
    FullSpecs,
    SupportedSlicers,
    PrinterSelector
  },
  head: {
    title: 'Серия 3хх'
  }
})
export default class Series3 extends Vue {


  printerItems: PrinterVariant[] = [
    {
      model: '320 Base',
      image: '/printers/desktop/series3.jpg',
      printerType: PrinterType.ThreeAxis,
      extruderType: ExtruderType.Single,
      printVolumeType: PrintVolumeType.Standard,
      fiveAxisType: FiveAxisType.Normal
    },
    {
      model: '320 Pro',
      image: '/printers/desktop/series3.jpg',
      printerType: PrinterType.ThreeAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Standard,
      fiveAxisType: FiveAxisType.Normal
    },
    {
      model: '320 Plus',
      image: '/printers/desktop/series3.jpg',
      printerType: PrinterType.ThreeAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.StandardLong,
      fiveAxisType: FiveAxisType.Normal
    },
    {
      model: '330 Pro',
      image: '/printers/desktop/series3.jpg',
      printerType: PrinterType.ThreeAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Extended,
      fiveAxisType: FiveAxisType.Normal
    },
    {
      model: '330 Plus',
      image: '/printers/desktop/series3.jpg',
      printerType: PrinterType.ThreeAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.ExtendedLong,
      fiveAxisType: FiveAxisType.Normal
    },
  ]

  currentPrinter: PrinterVariant = this.printerItems[0]

  product: any = {}

  get currentPrice (): number {
    const base = this.product.price || 129000
    const currentOption = this.product.options ? this.product.options[0].product_option_value.find((o: any) => o.name === this.currentPrinter.model).price : 0
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
  }
}

</script>

<style>
</style>
