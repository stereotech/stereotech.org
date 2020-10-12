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
        <BuyPrinter :variant="currentPrinter" />
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
<<<<<<< HEAD
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
  get features (): KeyFeature[] {
=======
  get currentPrinter(): PrinterVariant {
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
  get features(): KeyFeature[] {
>>>>>>> develop
    return [
      {
        name: this.$tc('Прочность изделий'),
        mediaType: MediaType.image,
        mediaSource: '/printers/strengthDiagram.jpg',
        description: this.$tc('Благодаря свойству ориентации полимеров, технология 5Dtech повышает прочность на изгиб и сжатие. Получайте детали:'),
        keys: [this.$tc('До х4 раз прочнее, чем 3D'), this.$tc('на 32% прочнее, чем литье*')]
      },
      {
        name: this.$tc('Армированная структура'),
        mediaType: MediaType.image,
        mediaSource: '/printers/3dStructure.jpg',
        description: this.$tc('Благодаря объемной, а не послойной укладке нитей, технология 5Dtech армирует структуру изделия. Используйте это преимущество при печати непрерывными волокнами и создавайте беспрецедентно прочные квазиизотропные изделия.'),
        keys: []
      },
      {
        name: this.$tc('Печать без поддержек'),
        mediaType: MediaType.image,
        mediaSource: '/printers/dd.jpg',
        description: this.$tc('Благодаря многоосевой кинематике, технология 5Dtech  позволяет либо полностью обойтись, либо существенно сократить поддержки под нависающими элементами изделия, что повышает скорость производства, сокращает время на постобработку и обеспечивает экономию материала до 70%.'),
        keys: []
      },
      {
        name: this.$tc('Высокая скорость'),
        mediaType: MediaType.image,
        mediaSource: '/printers/speed.jpg',
        description: this.$tc('За счет оптимизации путей перемещения (более длинных участков заполнения, на которых принтер успевает набрать заданную скорость) скорость 5D печати выше до 2 раз, по сравнению с 3D печатью.'),
        keys: []
      },
      {
        name: this.$tc('Печать по любой поверхности'),
        mediaType: MediaType.image,
        mediaSource: '/printers/printingOnRig.jpg',
        description: this.$tc('В отличие от классической 3D печати, технология 5Dtech может печатать на любой поверхности. Используйте специальную оснастку для серийного производства изделий или заготовку, которая станет частью будущего изделия – теперь Вы можете создавать композитные детали с металлическим армированием.'),
        keys: []
      },
      {
        name: this.$tc('Простота использования'),
        mediaType: MediaType.video,
        mediaSource: '/printers/Stereotech STE Slicer 2020-04-13 12-28-09.mp4',
        description: this.$tc('Алгоритмы технологии 5Dtech обеспечивают автоматическую подготовку деталей к многоосевой печати, в отличие от промышленных решений, где требуется сложная ручная CAM подготовка управляющей программы. Печатать также просто, как на обычном 3D принтере.'),
        keys: []
      },
      {
        name: this.$tc('Без ограничений'),
        mediaType: MediaType.image,
        mediaSource: '/printers/CAD mesh model.jpg',
        description: this.$tc('Используйте привычные программы для CAD моделирования. Программное обеспечение STE Slicer работает с общим форматом для 3D печати – STL, в отличие от промышленных решений, которые работают только с проприетарными форматами CAD моделей при подготовке к многоосевой печати.'),
        keys: []
      },
      {
        name: this.$tc('Широкий набор возможностей'),
        mediaType: MediaType.image,
        mediaSource: '/printers/printingModes 5D tech.jpg',
        description: this.$tc('5D принтер и программное обеспечение STE Slicer позволяют работать с несколькими режимами печати и комбинировать их. Используйте режимы Классический / Навивка /С изменением направления /По поверхности для решения любого спектра задач.'),
        keys: []
      }
    ]
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
  }
}

</script>

<style>
</style>