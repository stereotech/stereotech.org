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
        <ProductCard
          :fullsize="contentHeaderCard.fullsize"
          :image="contentHeaderCardImage"
          :title="contentHeaderCard.title"
          :link="contentHeaderCard.link"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <Images
          :title="images.title"
          :images="images.images"
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
        <YoutubeChannel :title="titleYoutube" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductCard from '~/components/ProductCard.vue'
import YoutubeChannel from '~/components/YoutubeChannel.vue'
import Images from '~/components/elements/Images.vue'

@Component({
  components: {
    ProductCard,
    YoutubeChannel,
    Images
  }
})
export default class Index extends Vue {

  contentHeaderCard: any = {}
  contentHeaderCardImage: string = ''
  contentCard: any[] = []
  titleYoutube: string = ''
  loadedPage: boolean = false
  images: any = {}

  private async getHomeData () {
    let response = await fetch(`${process.env.API_STATAMIC}/collections/page/entries/a2701ab7-b60d-461f-bc13-3bb0422393d3`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()
    data = data.data
    this.titleYoutube = data.title_youtube
  
    let getContentHeaderCard = data.productcard[0].api_url
    response = await fetch(getContentHeaderCard, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getContentHeaderCard = await response.json()
    this.contentHeaderCard = getContentHeaderCard.data
    this.contentHeaderCardImage = getContentHeaderCard.data.image[0].permalink

    let getContentCard = []
    for (let i = 1; i < data.productcard.length; i++) {
      let getCard = data.productcard[i].api_url
      response = await fetch(getCard, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }  
      })
      getCard = await response.json()
      getCard = [getCard.data]

      getContentCard = getContentCard.concat(getCard)
    }
    this.contentCard = getContentCard

    response = await fetch(`${process.env.API_STATAMIC}/collections/TrustCard/entries/e1115e0d-45e3-4f8a-b8c0-d26a639c0aca`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    data = await response.json()
    this.images = data.data
  }

  async mounted () {
    await this.getHomeData()
    this.loadedPage = true
  }

}
</script>

<style>
</style>
