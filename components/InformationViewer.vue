<template>
  <div v-html="information"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import gql from 'graphql-tag'

@Component
export default class InformationViewer extends Vue {
  @Prop({ type: String, default: '' }) id!: string

  text: string = ''
  information: any = {}

  private async getInformation () {
    let data
    let response = await fetch(`https://api2.stereotech.org/api/singletons/get/Media?token=${process.env.COCKPIT_TOKEN}`)
    data = await response.json()

    this.information = data.media
  }

  async mounted () {
    await this.getInformation()
  }
}

</script>

<style>
</style>