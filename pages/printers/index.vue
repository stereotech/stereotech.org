<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <ProductBanner
          fullsize
          :image="require('~/static/printers/desktop/banner.jpg?webp')"
          :title="$tc('Принтеры, открывающие новые возможности')"
          :description="
            $tc(
              'Настольные 3D и 5D принтеры, повышающие эффективность производства и способные решить задачи, недоступные другим 3D принтерам'
            )
          "
        />
      </v-col>
      <v-col
        cols="12"
        lg="10"
        v-for="(printer, index) in printers"
        :key="index"
      >
        <ProductCard
          :image="printer.image"
          :title="printer.title"
          :description="printer.description"
          :link="printer.link"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <YoutubeChannel />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductCard from '~/components/ProductCard.vue'
import ProductBanner from '~/components/ProductBanner.vue'
import LatestPosts from '~/components/LatestPosts.vue'
import YoutubeChannel from '~/components/YoutubeChannel.vue'

@Component({
  components: {
    ProductCard,
    LatestPosts,
    ProductBanner,
    YoutubeChannel
  },
  head: {
    title: 'Настольные принтеры'
  }
})
export default class Printers extends Vue {
  get printers (): {
    image: string,
    title: string,
    description: string,
    link: string
  }[] {
    return [
      // {
      //   image: '/printers/desktop/series3.jpg', title: this.$tc('Серия 3хх'),
      //   description: this.$tc('Серия продвинутых 3D принтеров, предназначенных для обучения, производства и разработки. Доступна печать двумя материалами, закрытая камера печати, управление по сети.'),
      //   link: '/printers/series3'
      // },
      {
        image: '/printers/desktop/hybrid.jpg',
        title: this.$tc('Hybrid'),
        description: this.$tc('Серия инновационных 5D принтеров, для печати прочных изделий и открывающая новые возможности производства.'),
        link: '/printers/hybrid'
      },
      {
        image: '/printers/desktop/fiber.jpg',
        title: this.$tc('Fiber'),
        description: this.$tc('Серия 3D и 5D принтеров, обладающая возможностью печати непрерывным углеволокном для решения особых задач.'),
        link: '/printers/fiber'
      }
    ]
  }

}

</script>

<style>
</style>
