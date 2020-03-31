<template>
  <v-card :loading="$apollo.loading">
    <v-card-text>
      <v-progress-linear indeterminate v-if="$apollo.loading"></v-progress-linear>
      <div v-else v-html="text" />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import gql from 'graphql-tag'

@Component
export default class InformationViewer extends Vue {
  @Prop({ type: String, default: '' }) id!: string

  @Watch('information') onInformationChanged (oldVal: any, val: any) {
    this.text = this.$convertHtml(this.information.description)
  }

  text: string = ''
  information: any = {}

  async mounted () {
    const result = await this.$apollo.query({
      query: gql`
      query($id: ID!) {
          information(id: $id) {
              information_id, title, description
          }
      }
      `,
      variables: {
        id: this.id
      }
    })

    this.information = result.data.information
  }
}

</script>

<style>
</style>