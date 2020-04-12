<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-text v-if="$apollo.loading">
          <v-progress-linear indeterminate></v-progress-linear>
        </v-card-text>
        <v-card-text>
          <div v-html="text" />
          <v-btn
            outlined
            color="primary"
            href="/downloads/Реквизиты ООО «Стереотек».pdf"
            target="_blank"
            block
          >
            <v-icon left>mdi-download</v-icon>{{$t('Загрузить карту партнера')}}
          </v-btn>
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
    title: 'Юридическая информация'
  },
  apollo: {
    information: {
      query: gql`{information(id: "10") {information_id, title, description}}`,
      prefetch: true
    }
  }
}
)
export default class Legal extends Vue {
  @Watch('information') onInformationChanged (oldVal: any, val: any) {
    this.text = this.$convertHtml(this.information.description)
  }

  text: string = ''
  information: any = {}
}

</script>

<style>
</style>