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
      <v-col cols="12" lg="10">
        <MaterialsTable
          title="Сравнение материалов"
          :materials="ourBrandMaterials"
          :specs="specs"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductCard from '~/components/ProductCard.vue'
import ProductBanner from '~/components/ProductBanner.vue'
import MaterialsTable from '~/components/MaterialsTable.vue'
import { Material, MaterialSpec } from '~/types/materials'
import { namespace } from 'vuex-class'

const materials = namespace('materials')

@Component({
  components: {
    ProductCard,
    ProductBanner,
    MaterialsTable
  },
  head: {
    title: 'Материалы для печати'
  }
})
export default class materialsPage extends Vue {
  @materials.State filled!: boolean
  @materials.Action loadMaterialsData!: any
  @materials.Getter ourBrandMaterials!: any
  @materials.Getter specs!: MaterialSpec[]

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

  async mounted () {
    if (!this.filled) {
      await this.loadMaterialsData()
    }
  }
}

</script>

<style>
</style>