<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-text v-if="$apollo.loading">
          <v-progress-linear indeterminate></v-progress-linear>
        </v-card-text>
        <v-card-text>
          <div v-html="text" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import gql from 'graphql-tag'

@Component({
  head: {
    title: 'Научная деятельность'
  },
  apollo: {
    information: {
      query: gql`{information(id: "11") {information_id, title, description}}`
    }
  }
})
export default class Science extends Vue {
  @Watch('information') onInformationChanged (oldVal: any, val: any) {
    this.text = this.$convertHtml(this.information.description)
  }

  text: string = ''
  information: any = {}
}

</script>

<style>
</style>