<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        cols="12"
        lg="10"
        v-for="(series, index) in materialsSeries"
        :key="index"
      >
        <ProductCard
          :image="series.image"
          :title="series.title"
          :description="series.description"
          :link="series.link"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductCard from '~/components/ProductCard.vue'
import ProductBanner from '~/components/ProductBanner.vue'

@Component({
  components: {
    ProductCard,
    ProductBanner
  },
  head: {
    title: 'Материалы для печати'
  }
})
export default class materialsPage extends Vue {
  get materialsSeries (): {
    image: string,
    title: string,
    description: string,
    link: string
  }[] {
    return [{
      image: '/materials/sealant.jpg',
      title: 'Sealant',
      description: this.$tc('Серия эластичных материалов для изготовления уплотнений, прокладок и гибких элементов'),
      link: '/materials/sealant'
    },
    {
      image: '/materials/fiberpart.jpg',
      title: 'Fiberpart',
      description: this.$tc('Серия высокопрочных материалов, наполненных рубленым волокном'),
      link: '/materials/fiberpart'
    },
    {
      image: '/materials/enduse.jpg',
      title: 'Enduse',
      description: this.$tc('Серия материалов, применимых для деталей конечного использования'),
      link: '/materials/enduse'
    },
    {
      image: '/materials/proto.jpg',
      title: 'Proto',
      description: this.$tc('Серия материалов для функциональных моделей и макетов'),
      link: '/materials/proto'
    }]
  }
}

</script>

<style>
</style>