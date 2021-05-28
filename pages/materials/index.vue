<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <ProductCard
          fullsize
          :image="require('~/static/materials/banner.jpg?webp')"
          :title="this.$tc('Доступные материалы для печати')"
        >
          <v-btn
           
            color="accent"
            class="mt-2"
            depressed
            @click="$vuetify.goTo('#materialsTable')"
          >
            {{$t('Сравнить материалы')}}
            <v-icon right>mdi-chevron-right</v-icon>
          </v-btn>
        </ProductCard>
      </v-col>
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
        <PrintingParameters
          :parameters="allPrintParameters"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <MaterialsTable
          id="materialsTable"
          title="Технические характеристики"
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
import PrintingParameters from '~/components/PrintingParameters.vue'
import { Material, MaterialSpec } from '~/types/materials'
import { namespace } from 'vuex-class'

const materials = namespace('materials')
const printParameters = namespace('printParameters')

@Component({
  components: {
    ProductCard,
    ProductBanner,
    MaterialsTable,
    PrintingParameters
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

  @printParameters.State loaded!: boolean
  @printParameters.Action loadPrintParameters!: any

  @printParameters.Getter printParametersBySku!: any
  @printParameters.Getter allPrintParameters!: any

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
    },
    {
      image: '',
      title: 'Metalcast',
      description: this.$tc('Серия металлических материалов'),
      link: '/materials/metalcast'
    },
    {
      image: '',
      title: 'ContiFiber',
      description: this.$tc('Серия материалов, армированных непрерывным углеволокном'),
      link: '/materials/contifiber'
    }]
  }

  async mounted () {
    if (!this.filled) {
      await this.loadMaterialsData()
    }
    if(!this.loaded){
      await this.loadPrintParameters()
    }
  }
}

</script>

<style>
</style>