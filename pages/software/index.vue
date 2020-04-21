<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col lg="10" v-for="(soft, index) in software" :key="index">
        <ProductCard
          :image="soft.image"
          :title="soft.title"
          :description="soft.description"
          :link="soft.link"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductCard from '~/components/ProductCard.vue'

@Component({
  components: {
    ProductCard
  },
  head: {
    title: 'Программное обеспечение'
  }
})
export default class Software extends Vue {
  software: {
    image: string,
    title: string,
    description: string,
    link: string
  }[] = []

    async mounted(){
      this.software.push({
        image: '/printers/software/steapp.webp',
        title: 'STE App',
        description: this.$tc('Приложение для управления процессом печати\nПросто.\nГибко.\nЭффективно.'),
        link: '/software/steapp'
      },
      {
        image: '/software/steslicer/banner.jpg',
        title: 'STE Slicer',
        description: this.$tc('Первое в мире программное обеспечение для 5D принтеров\nПодготовка моделей для 3D и 5D печати\nПоддержка различных режимов 5D печати\nВстроенное STE App'),
        link: '/software/steslicer'
      })
    }
}

</script>

<style>
</style>
