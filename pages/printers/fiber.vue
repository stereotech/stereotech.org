<template>
  <v-container fluid>
    <v-row justify="center" v-if="this.loadedPage == false">
      <v-col class="v-s-text" cols="12" lg="10">
        <v-skeleton-loader
          type="text"
        ></v-skeleton-loader>
      </v-col>
      <v-col 
        cols="12" 
        lg="10"
        v-for="n in 2"
        :key="n"
      >
        <v-skeleton-loader
          type="image"
          :tile=true
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" lg="10">
        <v-skeleton-loader
          type="table-heading, table-thead, table-tbody"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" lg="10">
        <v-row>
          <v-col cols="12" lg="6" md="6">
            <v-skeleton-loader
              type="article, button"
            ></v-skeleton-loader>
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <v-skeleton-loader
              type="image@2"
              :tile=true
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="this.loadedPage == true">
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">
          {{ titleHeader }}
        </h1>
      </v-col>
      <v-col cols="12" lg="10">
        <PrinterSelector
          :model="contentPrinter.title"
          :image="imagePrinter"
          :description="contentPrinter.description"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <KeyFeatures
          :title="titleFeatures1"
          :items="contentFeatures1"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <KeyFeatures
          :title="titleFeatures2"
          :items="contentFeatures2"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <ServiceBenefits />
      </v-col>
      <v-col
        cols="12" lg="10"
        v-for="(content, index) in contentCard"
        :key="index"
      >
        <ProductCard
          :image="content.image[0].permalink"
          :title="content.title"
          :description="content.description"
          :link="content.link"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <FullSpecs :specXd="contentFullSpecs" />
      </v-col>
      <v-col cols="12" lg="10">
        <BuyPrinter
          id="buyPrinterForm"
          :model="contentPrinter.title"
          :image="buyImagePrinter"
          :price="contentPrinter.price"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BuyPrinter from '~/components/printers/BuyPrinter.vue'
import PrinterSelector from '~/components/printers/PrinterSelector.vue'
import FullSpecs from '~/components/printers/FullSpecs.vue'
import ServiceBenefits from '~/components/printers/ServiceBenefits.vue'
import KeyFeatures from '~/components/KeyFeatures.vue'
import ProductCard from '~/components/ProductCard.vue'

@Component({
  components: {
    BuyPrinter,
    PrinterSelector,
    FullSpecs,
    ServiceBenefits,
    KeyFeatures,
    ProductCard
  }, 
  head: {
    title: 'Fiber'
  }
})
export default class Fiber extends Vue {

  titleHeader: string = ''
  contentPrinter: any = {}
  imagePrinter: string = ''
  buyImagePrinter: string = ''
  titleFeatures1: string = ''
  contentFeatures1: any[] = []
  titleFeatures2: string = ''
  contentFeatures2: any[] = []
  contentCard: any[] = []
  contentFullSpecs: any[] = []
  loadedPage: boolean = false

  private async getFiberData () {

    let response = await fetch(`${process.env.API_STATAMIC}/collections/page/entries/2d515764-7156-4d92-a934-192486b74a67`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()
    data = data.data

    this.titleHeader = data.title_header

    let getPrinter = data.buyprinter[0].api_url
    response = await fetch(getPrinter, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getPrinter = await response.json()
    this.contentPrinter = getPrinter.data
    this.imagePrinter = getPrinter.data.image[0].permalink
    this.buyImagePrinter = getPrinter.data.buyimage[0].permalink

    this.titleFeatures1 = data.keyfeatures1[0].title
    let getFeatures1 = data.keyfeatures1[0].handle
    response = await fetch(`${process.env.API_STATAMIC}/collections/${getFeatures1}/entries`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getFeatures1 = await response.json()
    this.contentFeatures1 = getFeatures1.data

    this.titleFeatures2 = data.keyfeatures2[0].title
    let getFeatures2 = data.keyfeatures2[0].handle
    response = await fetch(`${process.env.API_STATAMIC}/collections/${getFeatures2}/entries`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getFeatures2 = await response.json()
    this.contentFeatures2 = getFeatures2.data

    let getCard1 = data.productcard1[0].api_url
    response = await fetch(getCard1, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getCard1 = await response.json()
    let contentCard1 = [getCard1.data]

    let getCard2 = data.productcard2[0].api_url
    response = await fetch(getCard2, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getCard2 = await response.json()
    let contentCard2 = [getCard2.data]
    this.contentCard = contentCard1.concat(contentCard2)

    let getFullSpecs = data.fullspecs[0].api_url
    response = await fetch(getFullSpecs, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getFullSpecs = await response.json()
    this.contentFullSpecs = [getFullSpecs.data]

  }

  async mounted () {
    await this.getFiberData()
    this.loadedPage = true
  }

}

</script>

<style>
  .v-s-text {
    margin-top: 40px;
    margin-bottom: 20px;
  }
</style>