<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">{{$t('Серия 5хх - инновационные 5D принтеры')}}</h1>
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterSelector v-model="currentPrinter" :items="printerItems" :price="String(currentPrice)"/>
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

      <v-col cols="12" lg="10" v-if="product">
        <FullSpecs :attributes="product.attributes" />
      </v-col>
      <v-col cols="12" lg="10">
        <BuyPrinter :variant="currentPrinter" :price="String(currentPrice)" />
      </v-col>
      <v-col cols="12" lg="10">
        <ServiceBenefits/>
      </v-col>
      <v-col cols="12" lg="10">
        <KeyFeatures :title="this.$tc('8 преимуществ технологии 5D')"  :items="features"/>
      </v-col>
      <v-col cols="12" lg="10">
        <KeyFeatures :title="this.$tc('Причины выбрать принтеры Stereotech')" :items="reasonsToUse"/>
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
    ServiceBenefits,
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
      keys: ['До х4 раз прочнее, чем 3D', 'на 32% прочнее, чем литье*']
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

  reasonsToUse: KeyFeature[]=[
    {
      name: 'Удобный 5” сенсорный экран ',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/Screen 5 inch.jpg',
      description: 'Большой и удобный 5 дюймовый цветной сенсорный экран. Мгновенно получайте информацию о текущей печати и управляйте принтером наиболее интуитивным способом - с помощью тапов и свайпов',
      keys: []
    },
    {
      name: 'Двойной экструдер для печати с растворимыми поддержками',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/doubleExtruder.jpg',
      description: 'Простой и надежный двойной экструдер способен поддерживать температуру до 320°С и обеспечивает высокое качество печати любой сложности – используйте печать с растворимыми поддержками или абразивные материалы с набором легкозаменяемых принтблоков.',
      keys: []
    },
    {
      name: 'Принтблоки для печати',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/printblocks.jpg',
      description: 'Принтеры Stereotech оснащены принтблоками для быстрого и безопасного обслуживания экструдера. В стандартный набор включены 4 принтблока – 2 для печати модельными пластиками, и 2 – для печати техническими, с цельнометаллическим термобарьером',
      keys: []
    },
    {
      name: 'Производительная электроника',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/STE Board.jpg',
      description: 'Встроенный компьютер с 64-битным четырёхъядерным процессором ARM Cortex-A53 и оперативной памятью 1ГБ для быстрой, бесшумной (до 50 Дба) и стабильной работы',
      keys: []
    },
    {
      name: 'Стильный современный дизайн',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/stylish.jpg',
      description: 'Лаконичный вид, корпус из 4 мм светопропускающего акрила высокого класса и белый цвет – принтер органично впишется в любой интерьер помещения.',
      keys: []
    },
    {
      name: 'Световая индикация и подсветка',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/indication.jpg',
      description: 'Шестицветная световая индикация и светодиодная RGBW подсветка рабочей зоны – для приятной и комфортной работы с принтером.',
      keys: []
    },
    {
      name: 'Закрытая камера и большая область печати',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/child.jpg',
      description: 'Закрытая камера с системой вентиляции обеспечивает безопасность пользователей, стабильную работу и результат печати. Область печати в модельном ряду принтеров Stereotech достигает 400х310х300 мм',
      keys: []
    },
    {
      name: 'Компактное расположение катушек с филаментом',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/foto-11.jpg',
      description: 'Удобное использование, сушка филамента и хранение больших катушкек до 1кг внутри корпуса',
      keys: []
    },
    {
      name: 'Печать с катушек от 2,5 кг и более',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/withoutPhone',
      description: 'Используйте катушки с филаментом от 2,5 кг для масштабной печати – просто разместите катушки снаружи принтера и подавайте нить через сервисное окно.',
      keys: []
    },
    {
      name: 'WiFi, Ethernet и USB',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/WiFi.jpg',
      description: 'Множество вариантов сетевого и автономного управления – по WiFi, Ethernet и USB',
      keys: []
    },
    {
      name: 'Надежные брендовые комплектующие',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/raspberry.jpg',
      description: 'Прочная рама принтера из алюминиевого сплава 6063, точные профильные направляющие Hiwin MGN9, блок питания Meanwell, мощные и надежные вентиляторы Sunon, компьютер Raspberry Pi 3 и другие компоненты принтера от известных брендов – все для надежной и продолжительной работы.',
      keys: []
    },
    {
      name: 'Удобная система управления STE App',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/easyWork.jpg',
      description: '3D принтеры Stereotech оснащены системой STE App. С ее помощью управляйте 3D принтерами и процессом печати в единой сети через любое устройство: экран 3D принтера Stereotech, Android приложение для смартфона или планшета, или приложение на ПК. Встроенная система управления с менеджерами помощи в обслуживании – для легкой работы с принтером.',
      keys: []
    },
    {
      name: 'Высокая точность и разрешение печати',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/permission.jpg',
      description: 'Используйте возможности принтеров Stereotech –Толщина слоя от 10 мкм позволит создавать по-настоящему детализированные объекты!',
      keys: []
    },
    {
      name: 'Широкий выбор расходных материалов ',
      mediaType: MediaType.image,
      mediaSource: '/printers/10reasons/products.jpg',
      description: 'Печатающая головка с температурой нагрева до 320°С и подогреваемый рабочий стол с температурой нагрева до 120°С обеспечит печать даже такими конструкционными полимерами, как PC. Принтблоки для модельных и инженерных пластиков позволяют печатать любыми филаментами – от классического PLA до стеклонаполненных и угленаполненных полиуретанов и поликарбонатов.',
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
