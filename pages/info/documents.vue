<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h1">{{ $t("Документы") }}</h1>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <v-list>
            <v-list-item
              v-for="document in documents"
              :key="document._id"
              nuxt
              :to="`/info/documents/${document._id}`"
            >
              <v-list-item-icon>
                <v-icon>mdi-file-document-edit-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                {{ document.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
        <nuxt-child></nuxt-child>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Document } from '~/types/documents'

@Component
export default class DocumentsPage extends Vue {
  documents: Document[] = []

  async mounted () {
    let data
    let response = await fetch(`https://api2.stereotech.org/api/collections/get/documents?token=${process.env.COCKPIT_TOKEN}`)
    data = await response.json()
    this.documents = data.entries
  }
}

</script>

<style>
</style>