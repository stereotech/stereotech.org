<template>
  <v-container fluid>
    <v-row justify="center" v-if="this.loadedPage == false">
      <v-col class="v-s-text" cols="12" lg="8">
        <v-skeleton-loader
          type="text@2"
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
        <h2>{{ subtitleHeader }}</h2>
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

@Component({
  components: {
    BuyPrinter
  }
})
export default class Series6 extends Vue {

  titleHeader: string = ''
  subtitleHeader: string = ''
  contentPrinter: any = {}
  buyImagePrinter: string = ''
  loadedPage: boolean = false

  private async getSeries6Data () {

    let response = await fetch(`https://api.stereotech.org/api/collections/page/entries/47ccbc58-8c9c-4d1b-9584-0736160a8ea2`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()
    data = data.data

    this.titleHeader = data.title_header
    this.subtitleHeader = data.subtitle_header

    let getPrinter = data.buyprinter[0].api_url
    response = await fetch(getPrinter, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getPrinter = await response.json()

    if (getPrinter.data.price === null) {
      getPrinter.data.price = ''
    }

    this.contentPrinter = getPrinter.data
    this.buyImagePrinter = getPrinter.data.buyimage[0].permalink

  }

  async mounted () {
    await this.getSeries6Data()
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