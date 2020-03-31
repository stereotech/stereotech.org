<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="6">
          <v-img :src="image"></v-img>
        </v-col>
        <v-col cols="12" sm="6" class="text-center">
          <h4 class="display-1 text-uppercase font-weight-light">{{ title }}</h4>
          <p
            class="subtitle-1 font-weight-light"
            v-html="description.replace(/(?:\r\n|\r|\n)/g, '<br />')"
          ></p>
          <v-btn color="primary" depressed nuxt :to="link">
            Узнать больше
            <v-icon right>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ProductCard extends Vue {
  @Prop({ type: String, default: '' }) title!: string
  @Prop({ type: String, default: '' }) image!: string
  @Prop({ type: String, default: '' }) description!: string
  @Prop({ type: String, default: '' }) link!: string
}

</script>

<style>
</style>