<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-if="$route.params.slug">
        <v-card>
          <v-card-title>{{ currentDocument.title }}</v-card-title>
          <v-card-subtitle>
            <v-btn
              v-if="currentDocument.file"
              depressed
              outlined
              color="primary"
              target="_blank"
              :href="`https://api2.stereotech.org/${currentDocument.file}`"
              ><v-icon>mdi-download</v-icon>{{ $t("Загрузить") }}</v-btn
            >
          </v-card-subtitle>
          <v-card-text
            v-if="currentDocument.content"
            v-html="currentDocument.content"
          ></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" v-else>
        <v-card class="text-center">
          <v-card-title>Для просмотра выберите документ</v-card-title>
          <v-card-text>
            <v-icon color="primary" size="210"
              >mdi-text-box-multiple-outline</v-icon
            >
          </v-card-text></v-card
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Document } from '~/types/documents'

@Component
export default class DocumentPage extends Vue {
  documents: Document[] = []

  get currentDocument (): Document {
    return this.documents.find(d => d._id === this.$route.params.slug) || {
      _id: '',
      title: 'Документ не найден'
    }
  }

  async mounted () {
    let response = await fetch(`https://api2.stereotech.org/api/collections/get/documents?token=${process.env.COCKPIT_TOKEN}`)
    let data = await response.json()
    this.documents = data.entries
  }
}

</script>

<style>
</style>