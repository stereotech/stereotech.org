<template>
    <v-container>
        <v-row>
            <!-- <v-col cols="12" lg="10" v-for="entry in page.entries">
                <component :is="entry.slug" v-bind:="entry" id="entry"></component>
            </v-col> -->
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
import Images from '~/components/elements/Images.vue'
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
        Images,
        BuyPrinter,
        FullSpecs,
        PrinterSelector,
        DownloadsForm
    }
})

export default class Page extends Vue {

    page: any = {}

    async mounted() {
        let response = await fetch(`${process.env.API_STATAMIC}/collections/Pages/entries`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
        let data = await response.json()
        console.log(data)
        //this.$route.fullPath = data1.data.buttons
    }

}
</script>

<style>
</style>