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
              :href="documentFileLink"
              ><v-icon>mdi-download</v-icon>{{ titleDownload }}</v-btn
            >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-on="on" v-bind="attrs" @click="copyLink"
                  ><v-icon>mdi-content-copy</v-icon></v-btn
                >
                <input
                  type="hidden"
                  :id="`link-input-${$route.params.slug}`"
                  :value="documentFileLink"
                />
              </template>
              <span>{{ titleCopy }}</span>
            </v-tooltip>
          </v-card-subtitle>
          <v-card-text
            v-if="currentDocument.content"
            v-html="currentDocument.content"
          ></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" v-else>
        <v-card class="text-center">
          <v-card-title>{{ titleSlug }}</v-card-title>
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

  @Prop() documents!: Document[]

  titleSlug: string = ''
  titleDownload: string = ''
  titleCopy: string = ''

  private async getDocumentsData () {

    let response = await fetch(`${process.env.API_STATAMIC}/collections/page/entries/d71b7a3c-8005-44b5-9dbc-5e5fc5c328a9`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()
    this.titleSlug = data.data.title_slug
    this.titleDownload = data.data.title_download
    this.titleCopy = data.data.title_copy

  }

  get currentDocument (): Document {
    return this.documents.find(d => d.id === this.$route.params.slug) || {
      id: '',
      title: 'Документ не найден'
    }
  }

  get documentFileLink (): string {
    if (this.currentDocument.file) {
      return this.currentDocument.file[0].permalink
    }
    return ""
  }

  copyLink () {
    let input = document.getElementById(`link-input-${this.$route.params.slug}`)
    //@ts-ignore
    input.setAttribute('type', 'text')
    //@ts-ignore
    input.select()
    document.execCommand("copy")
    //@ts-ignore
    input.setAttribute('type', 'hidden')
  }

  async mounted () {
    await this.getDocumentsData()
  }

}

</script>

<style>
</style>