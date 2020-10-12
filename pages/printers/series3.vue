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
      <v-col cols="12" lg="10" v-if="product">
        <FullSpecs :attributes="product.attributes" />
      </v-col>
      <v-col cols="12" lg="10">
        <materialsSheet />
      </v-col>
      <v-col cols="12" lg="10" v-if="currentPrinter">
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
  get reasonsToUse (): KeyFeature[] {
    return [
      {
        name: this.$t('Удобный 5” сенсорный экран '),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/Screen 5 inch.jpg',
        description: this.$t('Большой и удобный 5 дюймовый цветной сенсорный экран. Мгновенно получайте информацию о текущей печати и управляйте принтером наиболее интуитивным способом - с помощью тапов и свайпов'),
        keys: []
      },
      {
        name: this.$t('Двойной экструдер для печати с растворимыми поддержками'),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/doubleExtruder.jpg',
        description: this.$t('Простой и надежный двойной экструдер способен поддерживать температуру до 320°С и обеспечивает высокое качество печати любой сложности – используйте печать с растворимыми поддержками или абразивные материалы с набором легкозаменяемых принтблоков.'),
        keys: []
      },
      {
        name: this.$t('Принтблоки для печати'),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/printblocks.jpg',
        description: this.$t('Принтеры Stereotech оснащены принтблоками для быстрого и безопасного обслуживания экструдера. В стандартный набор включены 4 принтблока – 2 для печати модельными пластиками, и 2 – для печати техническими, с цельнометаллическим термобарьером'),
        keys: []
      },
      {
        name: this.$tc('Производительная электроника'),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/STE Board.jpg',
        description: this.$tc('Встроенный компьютер с 64-битным четырёхъядерным процессором ARM Cortex-A53 и оперативной памятью 1ГБ для быстрой, бесшумной (до 50 Дба) и стабильной работы'),
        keys: []
      },
      {
        name: this.$t('Стильный современный дизайн'),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/stylish.jpg',
        description: this.$t('Лаконичный вид, корпус из 4 мм светопропускающего акрила высокого класса и белый цвет – принтер органично впишется в любой интерьер помещения.'),
        keys: []
      },
      {
        name: this.$t('Световая индикация и подсветка'),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/indication.jpg',
        description: this.$t('Шестицветная световая индикация и светодиодная RGBW подсветка рабочей зоны – для приятной и комфортной работы с принтером.'),
        keys: []
      },
      {
        name: this.$t('Закрытая камера и большая область печати'),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/child.jpg',
        description: this.$t('Закрытая камера с системой вентиляции обеспечивает безопасность пользователей, стабильную работу и результат печати. Область печати в модельном ряду принтеров Stereotech достигает 400х310х300 мм'),
        keys: []
      },
      {
        name: this.$t('Компактное расположение катушек с филаментом'),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/foto-11.jpg',
        description: this.$t('Удобное использование, сушка филамента и хранение больших катушкек до 1кг внутри корпуса'),
        keys: []
      },
      {
        name: this.$t('Печать с катушек от 2,5 кг и более'),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/withoutPhone.jpg',
        description: this.$t('Используйте катушки с филаментом от 2,5 кг для масштабной печати – просто разместите катушки снаружи принтера и подавайте нить через сервисное окно.'),
        keys: []
      },
      {
        name: this.$t('WiFi, Ethernet и USB'),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/WiFi.jpg',
        description: this.$t('Множество вариантов сетевого и автономного управления – по WiFi, Ethernet и USB'),
        keys: []
      },
      {
        name: this.$t('Надежные брендовые комплектующие'),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/raspberry.jpg',
        description: this.$t('Прочная рама принтера из алюминиевого сплава 6063, точные профильные направляющие Hiwin MGN9, блок питания Meanwell, мощные и надежные вентиляторы Sunon, компьютер Raspberry Pi 3 и другие компоненты принтера от известных брендов – все для надежной и продолжительной работы.'),
        keys: []
      },
      {
        name: this.$t('Удобная система управления STE App'),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/easyWork.jpg',
        description: this.$t('3D принтеры Stereotech оснащены системой STE App. С ее помощью управляйте 3D принтерами и процессом печати в единой сети через любое устройство: экран 3D принтера Stereotech, Android приложение для смартфона или планшета, или приложение на ПК. Встроенная система управления с менеджерами помощи в обслуживании – для легкой работы с принтером.'),
        keys: []
      },
      {
        name: this.$t('Высокая точность и разрешение печати'),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/permission.jpg',
        description: this.$t('Используйте возможности принтеров Stereotech –Толщина слоя от 10 мкм позволит создавать по-настоящему детализированные объекты!'),
        keys: []
      },
      {
        name: this.$t('Широкий выбор расходных материалов '),
        mediaType: MediaType.image,
        mediaSource: '/printers/10reasons/products.jpg',
        description: this.$t('Печатающая головка с температурой нагрева до 320°С и подогреваемый рабочий стол с температурой нагрева до 120°С обеспечит печать даже такими конструкционными полимерами, как PC. Принтблоки для модельных и инженерных пластиков позволяют печатать любыми филаментами – от классического PLA до стеклонаполненных и угленаполненных полиуретанов и поликарбонатов.'),
        keys: []
      }
    ]
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
  }
}

</script>

<style>
</style>
