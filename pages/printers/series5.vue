<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">{{$t('Серия 5хх - инновационные 5D принтеры')}}</h1>
        <h2>{{$t('от')}} {{ product.price }}</h2>
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
          :description="$t('Первое в мире программное обеспечение для 5D принтеров\nПодготовка моделей для 3D и 5D печати\nПоддержка различных режимов 5D печати\nВстроенное STE App')"
          link="/software/steslicer"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterFeature
          :title="$tc('STE APP')"
          :description="$t('приложение для управления процессом печати')"
          image="/printers/common/cluster1.webp"
        >
          <p
            class="title text-uppercase font-weight-light"
          >{{$t('управление несколькими 3D и 5D принтерами через единый интерфейс')}}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{$t('планирование заданий печати')}}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{$t('резервация принтеров')}}</p>
        </PrinterFeature>
      </v-col>
      <v-col cols="12" lg="10">
        <ColorModes />
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterFeature
          :title="$t('лаконичный дизайн')"
          :description="$t('простой, но функциональный')"
          image="/printers/ste520/design.webp"
        >
          <p
            class="title text-uppercase font-weight-light"
          >{{$t('полностью закрытая камера')}}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{$t('низкий уровень шума')}}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{$t('легкий доступ к материалу печати')}}</p>
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
          >{{$t('стабильный процесс печати') }}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{$t('точные линейные направляющие')}}</p>
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
          >{{$t('4-Х ЯДЕРНЫЙ 1ГГЦ СОПРОЦЕССОР ДЛЯ СЕТЕВОГО СОЕДИНЕНИЯ И УПРАВЛЕНИЯ ПРОЦЕССОМ ПЕЧАТИ')}}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{$t('ВНУТРЕННЕЕ ХРАНИЛИЩЕ 8ГБ')}}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{$t('ДРАЙВЕРЫ ШАГОВЫХ ДВИГАТЕЛЕЙ С ДЕЛЕНИЕМ ШАГА 1/128')}}</p>
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
          >{{$t('МАКСИМАЛЬНАЯ ТЕМПЕРАТУРА 320°C')}}</p>
          <p
            class="title text-uppercase font-weight-light"
          >{{$t('СМЕННЫЕ ПЕЧАТНЫЕ БЛОКИ')}}</p>
        </PrinterFeature>
      </v-col>
      <v-col cols="12" lg="10" v-if="product">
        <FullSpecs :attributes="product.attributes" />
      </v-col>
      <v-col cols="12" lg="10">
        <BuyPrinter :variant="currentPrinter" :price="String(currentPrice)" />
      </v-col>
      <v-col cols="12" lg="10">
        <KeyFeatures :title="this.$tc('8 преимуществ технологии 5D')"  :items="features"/>
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
import KeyFeatures from '~/components/KeyFeatures.vue'
import {KeyFeature, MediaType} from '~/types/keyFeature'
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType, PrinterType} from '~/types/printerVariant'
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
    ApplicationsPanel,
    KeyFeatures
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
      fiveAxisType: FiveAxisType.Normal,
      description: 'Пятиосевой принтер для печати прочных деталей'
    },
    {
      model: '520 Hybrid',
      image: '/printers/desktop/series5.jpg',
      printerType: PrinterType.FiveAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Standard,
      fiveAxisType: FiveAxisType.Hybrid,
      description: 'Универсальный принтер для решения уникальных задач'
    },
    {
      model: '530 Pro',
      image: '/printers/desktop/series5.jpg',
      printerType: PrinterType.FiveAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Extended,
      fiveAxisType: FiveAxisType.Normal,
      description: 'Пятиосевой принтер для печати прочных деталей с зоной печати 330x330x250 мм'
    },
    {
      model: '530 Hybrid',
      image: '/printers/desktop/series5.jpg',
      printerType: PrinterType.FiveAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Extended,
      fiveAxisType: FiveAxisType.Hybrid,
      description: 'Универсальный принтер для решения уникальных задач с зоной печати в режиме 3D 300x310x300 мм'
    }
  ]

  features: KeyFeature[] = [
    {
      name: 'Прочность изделий',
      mediaType: MediaType.image,
      mediaSource: '/printers/strengthDiagram.jpg',
      description: 'Благодаря свойству ориентации полимеров, технология 5Dtech повышает прочность на изгиб и сжатие. Получайте детали:',
      keys: ['До х4 раз прочнее, чем 3D', 'на 32% прочнее, чем литье']
    },
    {
      name: 'Армированная структура',
      mediaType: MediaType.image,
      mediaSource: '/printers/3dStructure.jpg',
      description: 'Благодаря объемной, а не послойной укладке нитей, технология 5Dtech армирует структуру изделия. Используйте это преимущество при печати непрерывными волокнами и создавайте беспрецедентно прочные квазиизотропные изделия.',
      keys: []
    },
    {
      name: 'Печать без поддержек',
      mediaType: MediaType.image,
      mediaSource: '/printers/dd.jpg',
      description: 'Благодаря многоосевой кинематике, технология 5Dtech  позволяет либо полностью обойтись, либо существенно сократить поддержки под нависающими элементами изделия, что повышает скорость производства, сокращает время на постобработку и обеспечивает экономию материала до 70%.',
      keys: []
    },
    {
      name: 'Высокая скорость',
      mediaType: MediaType.image,
      mediaSource: '/printers/speed.jpg',
      description: 'За счет оптимизации путей перемещения (более длинных участков заполнения, на которых принтер успевает набрать заданную скорость) скорость 5D печати выше до 2 раз, по сравнению с 3D печатью.',
      keys: []
    },
    {
      name: 'Печать по любой поверхности',
      mediaType: MediaType.image,
      mediaSource: '/printers/printingOnRig.jpg',
      description: 'В отличие от классической 3D печати, технология 5Dtech может печатать на любой поверхности. Используйте специальную оснастку для серийного производства изделий или заготовку, которая станет частью будущего изделия – теперь Вы можете создавать композитные детали с металлическим армированием.',
      keys: []
    },
    {
      name: 'Простота использования',
      mediaType: MediaType.video,
      mediaSource: '/printers/Stereotech STE Slicer 2020-04-13 12-28-09.mp4',
      description: 'Алгоритмы технологии 5Dtech обеспечивают автоматическую подготовку деталей к многоосевой печати, в отличие от промышленных решений, где требуется сложная ручная CAM подготовка управляющей программы. Печатать также просто, как на обычном 3D принтере.',
      keys: []
    },
    {
      name: 'Без ограничений',
      mediaType: MediaType.image,
      mediaSource: '/printers/CAD mesh model.jpg',
      description: 'Используйте привычные программы для CAD моделирования. Программное обеспечение STE Slicer работает с общим форматом для 3D печати – STL, в отличие от промышленных решений, которые работают только с проприетарными форматами CAD моделей при подготовке к многоосевой печати.',
      keys: []
    },
    {
      name: 'Широкий набор возможностей',
      mediaType: MediaType.image,
      mediaSource: '/printers/printingModes 5D tech.jpg',
      description: '5D принтер и программное обеспечение STE Slicer позволяют работать с несколькими режимами печати и комбинировать их. Используйте режимы Классический / Навивка /С изменением направления /По поверхности для решения любого спектра задач.',
      keys: []
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

    this.printerItems[0].description = this.$tc('Пятиосевой принтер для печати прочных деталей')
    this.printerItems[1].description = this.$tc('Универсальный принтер для решения уникальных задач')
    this.printerItems[2].description = this.$tc('Пятиосевой принтер для печати прочных деталей с зоной печати 330x330x250 мм')
    this.printerItems[3].description = this.$tc('Универсальный принтер для решения уникальных задач с зоной печати в режиме 3D 300x310x300 мм')
  }
}

</script>

<style>
</style>
