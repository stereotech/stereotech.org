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
      <v-col 
        cols="12" 
        lg="10"
        v-for="n in 2"
        :key="n"
      >
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
        <DownloadForm
          :title="titleDownload"
          :links="contentDownload"
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
import DownloadForm from '~/components/software/DownloadForm.vue'

@Component({
  components: {
    ProductBanner,
    KeyFeatures,
    ProductCard,
    DownloadForm
  },
  head: {
    title: 'STE App'
  }
})
export default class SteApp extends Vue {

  title: string = ''
  contentBanner: any = {}
  contentBannerImage: string = ''
  titleDownload: string = ''
  contentDownload: any[] = []
  titleFeatures: string = ''
  contentFeatures: any[] = []
  contentCard: any = {}
  contentCardImage: string = ''
  loadedPage: boolean = false

  private async getSteAppData () {
    
    let response = await fetch(`https://api.stereotech.org/api/collections/page/entries/9447bc54-394d-4c87-97e1-0403e0150f96`, {
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

    this.titleDownload = data.downloadform[0].title
    let getDownload = data.downloadform[0].handle
    response = await fetch(`https://api.stereotech.org/api/collections/${getDownload}/entries`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getDownload = await response.json()
    this.contentDownload = getDownload.data

    this.titleFeatures = data.keyfeatures[0].title
    let getFeatures = data.keyfeatures[0].handle
    response = await fetch(`https://api.stereotech.org/api/collections/${getFeatures}/entries`, {
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
    await this.getSteAppData()
    this.loadedPage = true
  }

}

</script>

<style>
</style>