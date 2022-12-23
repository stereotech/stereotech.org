<template>
  <v-card>
    <v-row justify="space-around">
        <v-col cols="12" class="text-center">
            <h4 class="display-1 font-weight-light">{{ title }}</h4>
        </v-col>
        <v-col cols="6" sm="2" v-for="(logo, index) in logos" :key="index">
            <v-img :src="logo.permalink"></v-img>
        </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class TrustCard extends Vue{

    title: string = ''
    logos: any[] = []

    private async getHomeData () {

        let response = await fetch(`https://api.stereotech.org/api/collections/page/entries/a2701ab7-b60d-461f-bc13-3bb0422393d3`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
        })
        let data = await response.json()
        data = data.data
        this.title = data.titletrustcard
        this.logos = data.logostrustcard

    }

    async mounted () {
        await this.getHomeData()
    }

}
</script>

<style>

</style>