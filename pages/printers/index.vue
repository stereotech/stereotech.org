<template>
  <v-container fluid>
    <v-row justify="center" v-if="this.loadedPage == false">
      <v-col cols="12" lg="10">
        <v-skeleton-loader
          type="image@2"
          :tile=true
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
      <v-col cols="12" lg="6">
        <v-skeleton-loader
          type="text"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" lg="7">
        <v-skeleton-loader
          type="image@2, table-row"
          :tile=true
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="this.loadedPage == true">
      <v-col cols="12" lg="10">
        <ProductBanner
          :fullsize="contentBanner.fullsize"
          :image="contentBannerImage"
          :title="contentBanner.title"
          :description="contentBanner.description"
        />
      </v-col>
      <v-col
        cols="12"
        lg="10"
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
        <YoutubeChannel/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductCard from '~/components/ProductCard.vue'
import ProductBanner from '~/components/ProductBanner.vue'
import YoutubeChannel from '~/components/YoutubeChannel.vue'

@Component({
  components: {
    ProductCard,
    ProductBanner,
    YoutubeChannel
  },
  head: {
    title: 'Серия 5хх'
  }
})
export default class Printers extends Vue {

  contentBanner: any = {}
  contentBannerImage: string = ''
  contentCard: any[] = []
  titlePage: string = ''
  loadedPage: boolean = false
  video1: any = {}
  video2: any = {}

  private async getPrintersData () {
    let response = await fetch(`${process.env.API_STATAMIC}/collections/page/entries/e5159acc-3054-4c4f-8262-eea287fd7f41`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()
    data = data.data
  
    let getBanner = data.productbanner[0].api_url
    response = await fetch(getBanner, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getBanner = await response.json()
    this.contentBanner = getBanner.data
    this.contentBannerImage = getBanner.data.image.permalink

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
    this.titlePage = data.title
  }

  async mounted () {
    await this.getPrintersData()
    this.loadedPage = true
  }

}

</script>

<style>
</style>
