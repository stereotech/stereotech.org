<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>Общее описание</v-card-title>
          <v-card-text>Приемущества наших принтеров. Фото с Гришей</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="10" v-for="(printer, index) in printers" :key="index">
        <ProductCard
          :image="printer.image"
          :title="printer.title"
          :description="printer.description"
          :link="printer.link"
        />
      </v-col>
      <v-col cols="12">
        <CompareSpecs />
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>Блог</v-card-title>
          <v-card-text>Три последних поста</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CompareSpecs from '~/components/printers/CompareSpecs.vue'
import ProductCard from '~/components/ProductCard.vue'

@Component({
  components: {
    ProductCard,
    CompareSpecs
  },
  head: {
    title: 'Настольные принтеры'
  }
})
export default class Printers extends Vue {
  printers: {
    image: string,
    title: string,
    description: string,
    link: string
  }[] = [
      {
        image: 'desktop/series3.jpg',
        title: 'Серия 3xx',
        description: 'Серия продвинутых 3D принтеров, предназначенных для обучения, производства и разработки. Доступна печать двумя материалами, закрытая камера печати, управление по сети.',
        link: '/printers/series3'
      },
      {
        image: 'desktop/series5.jpg',
        title: 'Серия 5xx',
        description: 'Серия инновационных 5D принтеров, для печати прочных изделий и открывающая новые возможности производства.',
        link: '/printers/series5'
      },
      {
        image: 'desktop/special.jpg',
        title: 'Специальная серия',
        description: 'Серия 3D и 5D принтеров, обладающая возможностью печати непрерывным углеволокном для решения особых задач.',
        link: '/printers/special'
      }
    ]
}

</script>

<style>
</style>
