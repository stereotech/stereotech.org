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
          :id="entry.collection.handle"
          v-bind="entry"
          :image="entry.image?.[0]?.permalink"
          :specXd="entry.specs"
          :model="entry.title"
        ></component>
      </v-col>
      <v-col cols="12" lg="10">
        <PrintingParameters :parameters="printParameters" />
      </v-col>
      <v-col cols="12" lg="10">
        <MaterialsTable
          id="MaterialsTable"
          title="Характеристики материалов"
          :materials="materials"
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
    title: 'Материалы для печати.'
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
  loadedPage: boolean = false

  get printParameters () {
    let printParam = this.allPrintParameters
    let locale = this.$i18n.locale == "en" ? "second" : this.$i18n.locale == "de" ? "third" : "default"
    let printParamUnlocale = printParam.filter(mLoc => mLoc.locale === locale)
    printParamUnlocale.forEach(param => {
      delete param.locale
    });
    return printParamUnlocale
  }

  get materials () {
    let material = this.ourBrandMaterials
    let locale = this.$i18n.locale == "en" ? "second" : this.$i18n.locale == "de" ? "third" : "default"
    material = material.filter(mLoc => mLoc.locale === locale)
    return material
  }

  private async getPageContent() {
    let response = await fetch(`${process.env.API_STATAMIC}/collections/Pages/entries?fields=content,link,title&filter[link:is]=${this.$route.fullPath.slice(-1) == "/" ? this.$route.fullPath.slice(0, -1) : this.$route.fullPath}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    })
    let page = await response.json()
    let promises = page.data[0].content.map(async (content, index) => {
        let response = await fetch(`${content.api_url}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
        let data = await response.json()
        data.data.id = index
        this.page.push(data.data)
    });
    await Promise.all(promises)
    this.page.sort((a, b) => a.id - b.id)
  }

  async mounted () {
    await this.getPageContent()

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