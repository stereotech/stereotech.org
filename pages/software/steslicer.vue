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
          type="image@2"
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
      <v-col cols="12" lg="10">
        <KeyFeatures
          :title="titleFeatures"
          :items="contentFeatures"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <ProductCard
          :image="contentCardImage"
          :title="contentCard.title"
          :description="contentCard.description"
          :link="contentCard.link"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductBanner from '~/components/ProductBanner.vue'
import ProductCard from '~/components/ProductCard.vue'
import KeyFeatures from '~/components/KeyFeatures.vue'

@Component({
  components: {
    ProductBanner,
    KeyFeatures,
    ProductCard,
  },
  head: {
    title: 'STE Slicer'
  }
})

export default class SteSlicer extends Vue {

  title: string = ''
  contentBanner: any = {}
  contentBannerImage: string = ''
  titleFeatures: string = ''
  contentFeatures: any[] = []
  contentCard: any = {}
  contentCardImage: string = ''
  loadedPage: boolean = false

  private async getSteSlicerData () {
    
    let response = await fetch(`${process.env.API_STATAMIC}/collections/page/entries/d23fcec4-4b3a-47a7-b564-7819c5568044`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()
    data = data.data

    this.title = data.title

    let getBanner = data.productbanner[0].api_url
    response = await fetch(getBanner, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getBanner = await response.json()
    this.contentBanner = getBanner.data
    this.contentBannerImage = getBanner.data.image.permalink

    this.titleFeatures = data.keyfeatures[0].title
    let getFeatures = data.keyfeatures[0].handle
    response = await fetch(`${process.env.API_STATAMIC}/collections/${getFeatures}/entries`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getFeatures = await response.json()
    this.contentFeatures = getFeatures.data

    let getCard = data.productcard[0].api_url
    response = await fetch(getCard, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getCard = await response.json()
    this.contentCard = getCard.data
    this.contentCardImage = getCard.data.image[0].permalink

  }

  async mounted () {
    await this.getSteSlicerData()
    this.loadedPage = true
  }

}

</script>

<style>
</style>