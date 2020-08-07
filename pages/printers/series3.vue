<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1
          class="font-weight-light"
        >{{$t('Серия 3хх - доступные принтеры для профессиональной 3D печати')}}</h1>
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterSelector
          v-model="currentPrinter"
          :items="printerItems"
          :price="String(currentPrice)"
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
      <v-col cols="12" lg="10" v-if="product">
        <FullSpecs :attributes="product.attributes" />
      </v-col>
      <v-col cols="12" lg="10">
        <BuyPrinter :variant="currentPrinter" :price="String(currentPrice)" />
      </v-col>
      <v-col cols="12" lg="10">
        <materialsSheet />
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


  printerItems: PrinterVariant[] = [
    {
      model: '320 Base',
      image: '/printers/desktop/series3.jpg',
      buyImage: '/printers/desktop/series3_buy.jpg',
      printerType: PrinterType.ThreeAxis,
      extruderType: ExtruderType.Single,
      printVolumeType: PrintVolumeType.Standard,
      fiveAxisType: FiveAxisType.Normal,
      description: 'Стартовый принтер для обучения, производства и разработки с одним экструдером и закрытой камерой'
    },
    {
      model: '320 Pro',
      image: '/printers/desktop/series3.jpg',
      buyImage: '/printers/desktop/series3_buy.jpg',
      printerType: PrinterType.ThreeAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Standard,
      fiveAxisType: FiveAxisType.Normal,
      description: 'Продвинутый принтер для обучения, производства и разработки с двумя экструдерами и закрытой камерой'
    },
    {
      model: '320 Plus',
      image: '/printers/desktop/series3.jpg',
      buyImage: '/printers/desktop/series3_buy.jpg',
      printerType: PrinterType.ThreeAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.StandardLong,
      fiveAxisType: FiveAxisType.Normal,
      description: 'Продвинутый принтер с двумя экструдерами и зоной печати 200x210x300 мм'
    },
    {
      model: '330 Pro',
      image: '/printers/desktop/series3.jpg',
      buyImage: '/printers/desktop/series3_buy.jpg',
      printerType: PrinterType.ThreeAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.Extended,
      fiveAxisType: FiveAxisType.Normal,
      description: 'Продвинутый принтер с двумя экструдерами и зоной печати 300x310x300 мм'
    },
    {
      model: '330 Plus',
      image: '/printers/desktop/series3.jpg',
      buyImage: '/printers/desktop/series3_buy.jpg',
      printerType: PrinterType.ThreeAxis,
      extruderType: ExtruderType.Dual,
      printVolumeType: PrintVolumeType.ExtendedLong,
      fiveAxisType: FiveAxisType.Normal,
      description: 'Продвинутый принтер с двумя экструдерами и зоной печати 300x310x400 мм'
    },
  ]
  reasonsToUse: KeyFeature[] = [
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
      mediaSource: '/printers/10reasons/withoutPhone.jpg',
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

    this.printerItems[0].description = this.$tc('Стартовый принтер для обучения, производства и разработки с одним экструдером и закрытой камерой')
    this.printerItems[1].description = this.$tc('Продвинутый принтер для обучения, производства и разработки с двумя экструдерами и закрытой камерой')
    this.printerItems[2].description = this.$tc('Продвинутый принтер с двумя экструдерами и зоной печати 200x210x300 мм')
    this.printerItems[3].description = this.$tc('Продвинутый принтер с двумя экструдерами и зоной печати 300x310x300 мм')
    this.printerItems[4].description = this.$tc('Продвинутый принтер с двумя экструдерами и зоной печати 300x310x400 мм')

    this.reasonsToUse[0].name = this.$tc('Удобный 5” сенсорный экран')
    this.reasonsToUse[0].description = this.$tc('Большой и удобный 5 дюймовый цветной сенсорный экран. Мгновенно получайте информацию о текущей печати и управляйте принтером наиболее интуитивным способом - с помощью тапов и свайпов')
    this.reasonsToUse[1].name = this.$tc('Двойной экструдер для печати с растворимыми поддержками')
    this.reasonsToUse[1].description = this.$tc('Простой и надежный двойной экструдер способен поддерживать температуру до 320°С и обеспечивает высокое качество печати любой сложности – используйте печать с растворимыми поддержками или абразивные материалы с набором легкозаменяемых принтблоков.')
    this.reasonsToUse[2].name = this.$tc('Принтблоки для печати')
    this.reasonsToUse[2].description = this.$tc('Принтеры Stereotech оснащены принтблоками для быстрого и безопасного обслуживания экструдера. В стандартный набор включены 4 принтблока – 2 для печати модельными пластиками, и 2 – для печати техническими, с цельнометаллическим термобарьером')
    this.reasonsToUse[3].name = this.$tc('Производительная электроника')
    this.reasonsToUse[3].description = this.$tc('Встроенный компьютер с 64-битным четырёхъядерным процессором ARM Cortex-A53 и оперативной памятью 1ГБ для быстрой, бесшумной (до 50 Дба) и стабильной работы')
    this.reasonsToUse[4].name = this.$tc('Стильный современный дизайн')
    this.reasonsToUse[4].description = this.$tc('Лаконичный вид, корпус из 4 мм светопропускающего акрила высокого класса и белый цвет – принтер органично впишется в любой интерьер помещения.')
    this.reasonsToUse[5].name = this.$tc('Световая индикация и подсветка')
    this.reasonsToUse[5].description = this.$tc('Шестицветная световая индикация и светодиодная RGBW подсветка рабочей зоны – для приятной и комфортной работы с принтером.')
    this.reasonsToUse[6].name = this.$tc('Закрытая камера и большая область печати')
    this.reasonsToUse[6].description = this.$tc('Закрытая камера с системой вентиляции обеспечивает безопасность пользователей, стабильную работу и результат печати. Область печати в модельном ряду принтеров Stereotech достигает 400х310х300 мм')
    this.reasonsToUse[7].name = this.$tc('Компактное расположение катушек с филаментом')
    this.reasonsToUse[7].description = this.$tc('Удобное использование, сушка филамента и хранение больших катушкек до 1кг внутри корпуса')
    this.reasonsToUse[8].name = this.$tc('Печать с катушек от 2,5 кг и более')
    this.reasonsToUse[8].description = this.$tc('Используйте катушки с филаментом от 2,5 кг для масштабной печати – просто разместите катушки снаружи принтера и подавайте нить через сервисное окно.')
    this.reasonsToUse[9].name = this.$tc('WiFi, Ethernet и USB')
    this.reasonsToUse[9].description = this.$tc('Множество вариантов сетевого и автономного управления – по WiFi, Ethernet и USB')
    this.reasonsToUse[10].name = this.$tc('Надежные брендовые комплектующие')
    this.reasonsToUse[10].description = this.$tc('Прочная рама принтера из алюминиевого сплава 6063, точные профильные направляющие Hiwin MGN9, блок питания Meanwell, мощные и надежные вентиляторы Sunon, компьютер Raspberry Pi 3 и другие компоненты принтера от известных брендов – все для надежной и продолжительной работы.')
    this.reasonsToUse[11].name = this.$tc('Удобная система управления STE App')
    this.reasonsToUse[11].description = this.$tc('3D принтеры Stereotech оснащены системой STE App. С ее помощью управляйте 3D принтерами и процессом печати в единой сети через любое устройство: экран 3D принтера Stereotech, Android приложение для смартфона или планшета, или приложение на ПК. Встроенная система управления с менеджерами помощи в обслуживании – для легкой работы с принтером.')
    this.reasonsToUse[12].name = this.$tc('Высокая точность и разрешение печати')
    this.reasonsToUse[12].description = this.$tc('Используйте возможности принтеров Stereotech –Толщина слоя от 10 мкм позволит создавать по-настоящему детализированные объекты!')
    this.reasonsToUse[13].name = this.$tc('Широкий выбор расходных материалов ')
    this.reasonsToUse[13].description = this.$tc('Печатающая головка с температурой нагрева до 320°С и подогреваемый рабочий стол с температурой нагрева до 120°С обеспечит печать даже такими конструкционными полимерами, как PC. Принтблоки для модельных и инженерных пластиков позволяют печатать любыми филаментами – от классического PLA до стеклонаполненных и угленаполненных полиуретанов и поликарбонатов.')
  }
}

</script>

<style>
</style>
