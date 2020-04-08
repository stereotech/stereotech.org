<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">{{$t('Серия 5хх - инновационные 5D принтеры')}}</h1>
        <h2>от {{ product.price }}</h2>
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterSelector v-model="currentPrinter" :items="printerItems" />
      </v-col>
      <v-col cols="12" lg="10">
        <BenefitsPanel />
      </v-col>
      <v-col cols="12" lg="10">
        <ApplicationsPanel />
      </v-col>
      <v-col cols="12" lg="10">
        <ProductCard
          image="/printers/software/steslicer.webp"
          title="STE Slicer"
          description="'Первое в мире программное обеспечение для 5D принтеров\nПодготовка моделей для 3D и 5D печати\nПоддержка различных режимов 5D печати\nВстроенное STE App'"
          link="/software/steslicer"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterFeature
          :title="this.$tc('STE APP')"
          :description="this.$tc('приложение для управления процессом печати')"
          image="/printers/common/cluster1.webp"
        >
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('управление несколькими 3D и 5D принтерами через единый интерфейс') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('планирование заданий печати') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('резервация принтеров') }}</p>
        </PrinterFeature>
      </v-col>
      <v-col cols="12" lg="10">
        <ColorModes />
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterFeature
          :title="this.$tc('лаконичный дизайн')"
          :description="this.$tc('простой, но функциональный')"
          image="/printers/ste520/design.webp"
        >
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('полностью закрытая камера') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('низкий уровень шума') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('легкий доступ к материалу печати') }}</p>
        </PrinterFeature>
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterFeature
          right-text
          :title="this.$tc('жесткая алюминиевая рама')"
          :description="this.$tc('минимум вибраций')"
          image="/printers/common/frame.webp"
        >
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('стабильный процесс печати') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('точные линейные направляющие')}}</p>
        </PrinterFeature>
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterFeature
          :title="this.$tc('производительная электроника')"
          :description="this.$tc('32-Х БИТНЫЙ МИКРОКОНТРОЛЛЕР')"
          image="/printers/common/motherboard.webp"
        >
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('4-Х ЯДЕРНЫЙ 1ГГЦ СОПРОЦЕССОР ДЛЯ СЕТЕВОГО СОЕДИНЕНИЯ И УПРАВЛЕНИЯ ПРОЦЕССОМ ПЕЧАТИ') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('ВНУТРЕННЕЕ ХРАНИЛИЩЕ 8ГБ') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('ДРАЙВЕРЫ ШАГОВЫХ ДВИГАТЕЛЕЙ С ДЕЛЕНИЕМ ШАГА 1/128') }}</p>
        </PrinterFeature>
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterFeature
          right-text
          :title="this.$tc('ДВУХСОПЕЛЬНАЯ ПЕЧАТАЮЩАЯ ГОЛОВКА')"
          :description="this.$tc('ЭКСТРУДЕР С ПРЯМОЙ ПОДАЧЕЙ ДЛЯ ПЕЧАТИ ЛЮБЫМИ МАТЕРИАЛАМИ')"
          image="/printers/common/printhead.webp"
        >
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('МАКСИМАЛЬНАЯ ТЕМПЕРАТУРА 320°C') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('СМЕННЫЕ ПЕЧАТНЫЕ БЛОКИ') }}</p>
        </PrinterFeature>
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
import MainParalax from '~/components/MainParalax.vue'
import ColorModes from '~/components/printers/ColorModes.vue'
import PrinterFeature from '~/components/printers/PrinterFeature.vue'
import ProductCard from '~/components/ProductCard.vue'
import BuyPrinter from '~/components/printers/BuyPrinter.vue'
import FullSpecs from '~/components/printers/FullSpecs.vue'
import PrinterSelector from '~/components/printers/PrinterSelector.vue'
import BenefitsPanel from '~/components/benefits/BenefitsPanel.vue'
import ApplicationsPanel from '~/components/applications/ApplicationsPanel.vue'
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType, PrinterType } from '~/types/printerVariant'
import gql from 'graphql-tag'

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
    ApplicationsPanel
  },
  head: {
    title: 'Серия 5xx'
  }
})
export default class Series5 extends Vue {
  printerItems: PrinterVariant[] = [
    {
      model: '520 Pro',
      image: '/printers/desktop/series5.jpg',
      printerType: PrinterType.FiveAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Standard,
      fiveAxisType: FiveAxisType.Normal
    },
    {
      model: '520 Hybrid',
      image: '/printers/desktop/series5.jpg',
      printerType: PrinterType.FiveAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Standard,
      fiveAxisType: FiveAxisType.Hybrid
    },
    {
      model: '530 Pro',
      image: '/printers/desktop/series5.jpg',
      printerType: PrinterType.FiveAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Extended,
      fiveAxisType: FiveAxisType.Normal
    },
    {
      model: '530 Hybrid',
      image: '/printers/desktop/series5.jpg',
      printerType: PrinterType.FiveAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Extended,
      fiveAxisType: FiveAxisType.Hybrid
    }
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
         product(id: "676") {
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
