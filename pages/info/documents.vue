<template>
  <v-container>
    <v-row justify="center" v-if="this.loadedPage == false">
      <v-col class="v-s-text" cols="12">
        <v-skeleton-loader
          type="heading"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" md="3">
        <v-skeleton-loader
          type="list-item-avatar@10"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" md="9">
        <v-skeleton-loader
          type="image@2"
          :tile=true
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row  v-if="this.loadedPage == true">
      <v-col cols="12">
        <h1 class="text-h1">{{ title }}</h1>
      </v-col>
      <v-col cols="12" md="3">
        <v-card>
          <v-list>
            <v-list-item
              v-for="document in documents"
              :key="document.id"
              nuxt
              :to="`/info/documents/${document.id}`"
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
        <nuxt-child :documents="documents"></nuxt-child>
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
  title: string = ''
  loadedPage: boolean = false

  private async getDocumentsData () {

    let response = await fetch(`${process.env.API_STATAMIC}/collections/page/entries/d71b7a3c-8005-44b5-9dbc-5e5fc5c328a9`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()
    let getEntriesDocuments = data.data.collections_documents[0].handle
    this.title = data.data.title

    response = await fetch(`${process.env.API_STATAMIC}/collections/${getEntriesDocuments}/entries`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    data = await response.json()
    this.documents = data.data
    
  }

  async mounted () {
    await this.getDocumentsData()
    this.loadedPage = true
  }

}

</script>

<style>
  .v-s-text {
    margin-top: 40px;
    margin-bottom: 20px;
  }
</style>