<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center">
        <v-col class="text-center">
          <h3 class="title font-weight-light">{{ title }}</h3>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" lg="4" v-for="(link, index) in links" :key="index">
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-list-item>{{ link.description }}</v-list-item>
              </v-col>
              <v-col cols="12">
                <v-btn
                  large
                  block
                  depressed
                  :outlined="index > 0"
                  color="primary"
                  :href="link.download"
                  target="_blank"
                >
                  <v-icon left>{{link.icon}}</v-icon>
                  {{ link.title }}
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class DownloadForm extends Vue {
  
  @Prop({ type: String, default: 'Загрузить' }) title!: string
  @Prop({ type: Array, default: () => { return [] } }) links!: any[]

}

</script>

<style>
</style>