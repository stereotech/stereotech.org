<template>
    <v-container fluid>
        <v-row justify="center" v-if="this.loadedPage == false">
            <v-col class="v-s-text" cols="12" lg="10">
                <v-skeleton-loader
                    type="text"
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
            <v-col cols="12" lg="10" v-for="(entry, index) in page" :key="index">
                <component 
                    :is="entry.collection.handle" 
                    v-bind:title="entry.title"
                    v-bind:items="entry.items"
                    v-bind:image="entry.image?.[0]?.permalink"
                    v-bind:description="entry.description"
                    v-bind:fullsize="entry.fullsize"
                    v-bind:link="entry.link"
                    v-bind:icon="entry.icon"
                    v-bind:model="entry.title"
                    v-bind:price="entry.price"
                    v-bind:specXd="entry.specs"
                    v-bind:buttons="entry.buttons"
                    v-bind:specs="entry.specs"
                    v-bind:images="entry.images"
                ></component>
            </v-col>
        </v-row>
    </v-container>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import KeyFeatures from '~/components/KeyFeatures.vue'
import ProductBanner from '~/components/ProductBanner.vue'
import ProductCard from '~/components/ProductCard.vue'
import YoutubeChannel from '~/components/YoutubeChannel.vue'
import Button from '~/components/elements/Button.vue'
import Header1 from '~/components/elements/Header1.vue'
import Header2 from '~/components/elements/Header2.vue'
import Iframe from '~/components/elements/Iframe.vue'
import TrustCard from '~/components/TrustCard.vue'
import BuyPrinter from '~/components/printers/BuyPrinter.vue'
import FullSpecs from '~/components/printers/FullSpecs.vue'
import PrinterSelector from '~/components/printers/PrinterSelector.vue'
import DownloadsForm from '~/components/software/DownloadsForm.vue'

@Component({
    components: {
        KeyFeatures,
        ProductBanner,
        ProductCard,
        YoutubeChannel,
        Button,
        Header1,
        Header2,
        Iframe,
        TrustCard,
        BuyPrinter,
        FullSpecs,
        PrinterSelector,
        DownloadsForm
    }
})

export default class Page extends Vue {

    page: any[] = []
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

    async mounted() {        
        await this.getPageContent()
        this.loadedPage = true
    }
}
</script>

<style>
</style>