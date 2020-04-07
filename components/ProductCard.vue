<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" :sm="fullsize ? 12 : 6">
          <v-img
            :src="image"
            class="white--text align-center text-center"
            :gradient="fullsize  && $vuetify.breakpoint.smAndUp ? 'to bottom, rgba(2,119,189,0), rgba(2, 119, 189, 0.8), rgba(2,119,189,0)' : ''"
          >
            <h4
              v-if="fullsize && $vuetify.breakpoint.smAndUp"
              class="display-1 font-weight-light"
            >{{ title }}</h4>

            <v-btn
              v-if="fullsize && $vuetify.breakpoint.smAndUp"
              color="accent"
              class="mt-2"
              depressed
              nuxt
              :to="localePath(link)"
            >
              Узнать больше
              <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
          </v-img>
        </v-col>
        <v-col cols="12" :sm="fullsize ? 12 : 6" :class="`text-center ${hidden}`">
          <h4 class="display-1 font-weight-light">{{ title }}</h4>
          <p
            class="subtitle-1 font-weight-light"
            v-html="description.replace(/(?:\r\n|\r|\n)/g, '<br />')"
          ></p>
          <v-btn color="primary" depressed nuxt :to="localePath(link)">
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
  @Prop({ type: Boolean, default: false }) fullsize!: boolean

  get hidden () {
    return this.fullsize ? 'hidden-sm-and-up' : ''
  }
}

</script>

<style>
</style>