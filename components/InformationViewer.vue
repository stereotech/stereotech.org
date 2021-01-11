<template>
  <!-- <v-card :loading="$apollo.loading"> -->
    <!-- <v-card-text>
      <v-progress-linear indeterminate v-if="$apollo.loading"></v-progress-linear>
      <div v-else v-html="text" />
    </v-card-text>
  </v-card> -->
  <div v-html="information">

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import gql from 'graphql-tag'

@Component
export default class InformationViewer extends Vue {
  @Prop({ type: String, default: '' }) id!: string

  // @Watch('information') onInformationChanged (oldVal: any, val: any) {
  //   this.text = this.$convertHtml(this.information.description)
  // }

  text: string = ''
  information: any = {}

  private async getInformation() {
    let data
    let response = await fetch(`https://api2.stereotech.org/api/singletons/get/Media?token=${process.env.COCKPIT_TOKEN}`)
    data = await response.json()

    this.information = data.media
  }

  async mounted () {
    await this.getInformation()
    // const result = await this.$apollo.query({
    //   query: gql`
    //   query($id: ID!) {
    //       information(id: $id) {
    //           information_id, title, description
    //       }
    //   }
    //   `,
    //   variables: {
    //     id: this.id
    //   }
    // })

    // this.information = result.data.information
  }
}

</script>

<style>
</style>