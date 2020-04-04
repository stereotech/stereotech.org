<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <ProductBanner
          fullsize
          image="/printers/desktop/banner.jpg"
          title="Принтеры, открывающие новые возможности"
          description="Настольные 3D и 5D принтеры, повышающие эффективность производства и способные решить задачи, недоступные другим 3D принтерам"
        />
      </v-col>
      <v-col cols="12" lg="10" v-for="(printer, index) in printers" :key="index">
        <ProductCard
          :image="printer.image"
          :title="printer.title"
          :description="printer.description"
          :link="printer.link"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <LatestPosts />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductCard from '~/components/ProductCard.vue'
import ProductBanner from '~/components/ProductBanner.vue'
import LatestPosts from '~/components/LatestPosts.vue'

@Component({
  components: {
    ProductCard,
    LatestPosts,
    ProductBanner
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
        image: '/printers/desktop/series3.jpg',
        title: 'Серия 3xx',
        description: 'Серия продвинутых 3D принтеров, предназначенных для обучения, производства и разработки. Доступна печать двумя материалами, закрытая камера печати, управление по сети.',
        link: '/printers/series3'
      },
      {
        image: '/printers/desktop/series5.jpg',
        title: 'Серия 5xx',
        description: 'Серия инновационных 5D принтеров, для печати прочных изделий и открывающая новые возможности производства.',
        link: '/printers/series5'
      },
      {
        image: '/printers/desktop/special.jpg',
        title: 'Специальная серия',
        description: 'Серия 3D и 5D принтеров, обладающая возможностью печати непрерывным углеволокном для решения особых задач.',
        link: '/printers/special'
      }
    ]
}

</script>

<style>
</style>
