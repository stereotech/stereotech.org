<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" :sm="fullsize ? 12 : 6">
          <v-img
            :src="image"
            class="white--text align-end text-center"
            :gradient="fullsize ? 'to bottom, rgba(2,119,189,0.2), rgba(2, 119, 189, 0.75)' : ''"
          >
            <h4
              v-if="fullsize && $vuetify.breakpoint.smAndUp"
              class="display-1 font-weight-light"
            >{{ title }}</h4>
          </v-img>
        </v-col>
        <v-col cols="12" :sm="fullsize ? 12 : 6" class="text-center">
          <h4
            v-if="!fullsize || $vuetify.breakpoint.xsOnly"
            class="display-1 text-uppercase font-weight-light"
          >{{ title }}</h4>
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
  @Prop({ type: Boolean, default: false }) fullsize!: boolean
}

</script>

<style>
</style>