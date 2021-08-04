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
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-on="on" v-bind="attrs" @click="copyLink"
                  ><v-icon>mdi-content-copy</v-icon></v-btn
                >
                <input
                  type="hidden"
                  :id="`link-input-${$route.params.slug}`"
                  :value="`https://api2.stereotech.org/${currentDocument.file}`"
                />
              </template>
              <span>{{ $t("Скопировать ссылку") }}</span>
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
  @Prop() documents!: Document[]

  get currentDocument (): Document {
    return this.documents.find(d => d._id === this.$route.params.slug) || {
      _id: '',
      title: 'Документ не найден'
    }
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
}

</script>

<style>
</style>