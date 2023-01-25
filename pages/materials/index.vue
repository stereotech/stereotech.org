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
      <v-col cols="12" lg="10" v-for="(entry, index) in page" :key="index">
        <component 
          :is="entry.collection.handle" 
          v-bind:title="entry.title"
          v-bind:items="entry.items"
          v-bind:image="entry?.image?.[0].permalink"
          v-bind:description="entry.description"
          v-bind:fullsize="entry.fullsize"
          v-bind:link="entry.link"
          v-bind:icon="entry.icon"
          v-bind:model="entry.title"
          v-bind:price="entry.price"
          v-bind:specXd="entry.specs"
          v-bind:buttons="entry.buttons"
          v-bind:specs="entry.specs"
        ></component>
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
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Button from "~/components/elements/Button.vue"
import Iframe from "~/components/elements/Iframe.vue"
import ProductCard from '~/components/ProductCard.vue'
import MaterialsTable from '~/components/MaterialsTable.vue'
import PrintingParameters from '~/components/PrintingParameters.vue'
import { MaterialSpec } from '~/types/materials'
import { namespace } from 'vuex-class'
import KeyFeatures from '~/components/KeyFeatures.vue'
import ProductBanner from '~/components/ProductBanner.vue'
import YoutubeChannel from '~/components/YoutubeChannel.vue'
import Header1 from '~/components/elements/Header1.vue'
import Header2 from '~/components/elements/Header2.vue'
import TrustCard from '~/components/TrustCard.vue'
import BuyPrinter from '~/components/printers/BuyPrinter.vue'
import FullSpecs from '~/components/printers/FullSpecs.vue'
import PrinterSelector from '~/components/printers/PrinterSelector.vue'
import DownloadsForm from '~/components/software/DownloadsForm.vue'

const materials = namespace('materials')
const printParameters = namespace('printParameters')

@Component({
  components: {
    Iframe,
    Button,
    ProductCard,
    MaterialsTable,
    PrintingParameters,
    KeyFeatures,
    ProductBanner,
    YoutubeChannel,
    Header1,
    Header2,
    TrustCard,
    BuyPrinter,
    FullSpecs,
    PrinterSelector,
    DownloadsForm
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

  page: any[] = []
  title: string = ''
  title_v_btn: string = ''
  title_v_card1: string = ''
  title_v_card2: string = ''
  title_v_table: string = ''
  contentCardImageHead: string = ''
  contentCardHead: any = {}
  contentCards: any = {}
  loadedPage: boolean = false

  private async getPageContent() {
    let response = await fetch(`${process.env.API_STATAMIC}/collections/Pages/entries`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    })
    let pages = await response.json()
    for (const page of pages.data) {
      if (this.$route.fullPath == page.link || this.$route.fullPath == (page.link + '/')) {
          for (const content of page.content) {
              let response = await fetch(`${content.api_url}`, {
                  method: 'get',
                  headers: { 'Content-Type': 'application/json' }
              })
              let data = await response.json()
              this.page.push(data.data)
          }
      }
    }
  }
  
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
    await this.getPageContent()
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