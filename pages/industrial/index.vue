<template>
  <v-container fluid>
    <v-row justify="center" v-if="this.loadedPage == false">
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
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductCard from '~/components/ProductCard.vue'

@Component({
  components: {
    ProductCard
  },
  head: {
    title: 'Промышленные принтеры'
  }
})

export default class Industrial extends Vue {

  contentCard: any[] = []
  titlePage: string = ''
  loadedPage: boolean = false

  private async getIndustrialData () {

    let response = await fetch(`https://api.stereotech.org/api/collections/page/entries/602f8332-39f8-4e02-a705-2edea64744ad`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()
    data = data.data

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
    await this.getIndustrialData()
    this.loadedPage = true
  }

}

</script>

<style>
</style>