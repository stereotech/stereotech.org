<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <iframe
      width="100%"
      height="480"
      :src="link"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class PressPage extends Vue {

  title: string = ''
  link: string = ''

  private async getDocumentsData () {

    let response = await fetch(`${process.env.API_STATAMIC}/collections/page/entries/53feee36-a6b0-4957-948d-1e30fce28d6c`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()
    data = data.data

    this.title = data.video_title
    this.link = data.video_link

  }

  async mounted () {
    await this.getDocumentsData()
  }

}

</script>

<style>
</style>