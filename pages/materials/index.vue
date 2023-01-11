<template>
  <v-container fluid>
    <v-row justify="center" v-if="this.loadedPage == false">
      <v-col cols="12" lg="10">
        <v-skeleton-loader
          type="image@2"
          :tile=true
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" lg="10">
        <v-skeleton-loader
          type="image"
          :tile=true
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" lg="10">
        <v-skeleton-loader
          type="list-item"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" lg="9">
        <v-row>
          <v-col 
            cols="12"
            lg="4"
            md="4"
            sm="4"
            v-for="n in 3"
            :key="n"
          >
            <v-skeleton-loader
              type="image@2"
              :tile=true
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="10">
        <v-skeleton-loader
          type="table"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" lg="10">
        <v-skeleton-loader
          type="image@2"
          :tile=true
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="this.loadedPage == true">
      <v-col cols="12" lg="10">
        <ProductCard
          :image="contentCardImageHead"
          :title="contentCardHead.title"
          :fullsize="contentCardHead.fullsize"
        >
          <v-btn
            color="accent"
            class="mt-2"
            depressed
            @click="$vuetify.goTo('#materialsTable')"
          >
            {{ title_v_btn }}
            <v-icon right>mdi-chevron-right</v-icon>
          </v-btn>
        </ProductCard>
      </v-col>

      <v-col
        cols="12"
        lg="10"
        v-for="(contentCard, index) in contentCards"
        :key="index"
      >
        <ProductCard
          :image="contentCard.image[0].permalink"
          :title="contentCard.title"
          :description="contentCard.description"
          :link="contentCard.link"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <v-card>
          <v-btn
            large
            depressed
            color="primary"
            block
            href="https://drive.google.com/drive/folders/1AIMZhAqIwwiQwO4HExZw3kOIoBO1GaNR?usp=sharing"
            target="_blank"
            >
            <v-icon left>mdi-google-drive</v-icon>
            {{ title_v_card1 }}
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" lg="10">
        <PrintingParameters :parameters="allPrintParameters" />
      </v-col>
      <v-col cols="12" lg="10">
        <MaterialsTable
          id="materialsTable"
          :title="title_v_table"
          :materials="ourBrandMaterials"
          :specs="specs"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <v-card>
          <v-card-title>{{ title_v_card2 }}</v-card-title>
          <iframe
            src="https://drive.google.com/file/d/1AGuLPv2NiyIoa84Bj0cW8GtGc1YOFUE5/preview"
            width="100%"
            height="640"
            frameborder="0"
            allow="autoplay"
          ></iframe>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductCard from '~/components/ProductCard.vue'
import MaterialsTable from '~/components/MaterialsTable.vue'
import PrintingParameters from '~/components/PrintingParameters.vue'
import { MaterialSpec } from '~/types/materials'
import { namespace } from 'vuex-class'

const materials = namespace('materials')
const printParameters = namespace('printParameters')

@Component({
  components: {
    ProductCard,
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
  @printParameters.Getter allPrintParameters!: any

  title: string = ''
  title_v_btn: string = ''
  title_v_card1: string = ''
  title_v_card2: string = ''
  title_v_table: string = ''
  contentCardImageHead: string = ''
  contentCardHead: any = {}
  contentCards: any = {}
  loadedPage: boolean = false

  private async getMaterialsPageData() {

    let response = await fetch(`${process.env.API_STATAMIC}/collections/page/entries/c33a351e-19e7-4f60-b16a-9d98523b2e6f`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()
    data = data.data

    this.title = data.title
    this.title_v_btn = data.v_btn
    this.title_v_card1 = data.v_card1
    this.title_v_card2 = data.v_card2
    this.title_v_table = data.v_table

    let getCardHead = data.productcard[0].api_url
    response = await fetch(getCardHead, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getCardHead = await response.json()
    this.contentCardHead = getCardHead.data
    this.contentCardImageHead = getCardHead.data.image[0].permalink

    let getCards = data.productcard
    let contentCard = []
    for (let i = 1; i < getCards.length; i++) {

      let getCard = data.productcard[i].api_url
      response = await fetch(getCard, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }  
      })
      getCard = await response.json()
      contentCard = contentCard.concat(getCard.data)

    }
    this.contentCards = contentCard

  }

  async mounted () {
    await this.getMaterialsPageData()

    if (!this.filled) {
      await this.loadMaterialsData()
    }
    if (!this.loaded) {
      await this.loadPrintParameters()
    }
    this.loadedPage = true
  }
}

</script>

<style>
</style>