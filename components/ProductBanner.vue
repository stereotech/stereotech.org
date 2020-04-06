<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          :sm="fullsize ? 12 : 6"
          class="text-center"
          v-if="!fullsize || $vuetify.breakpoint.xsOnly"
        >
          <h4 class="display-1 text-uppercase font-weight-light">{{ title }}</h4>
          <p
            class="title font-weight-light"
            v-html="description.replace(/(?:\r\n|\r|\n)/g, '<br />')"
          ></p>
        </v-col>
        <v-col cols="12" :sm="fullsize ? 12 : 6">
          <v-img
            :src="image"
            class="white--text align-center text-center"
            :gradient="fullsize  && $vuetify.breakpoint.smAndUp ? 'to bottom, rgba(2,119,189,0), rgba(2, 119, 189, 0.8), rgba(2,119,189,0)' : ''"
          >
            <template v-if="fullsize && $vuetify.breakpoint.smAndUp">
              <h4 class="display-1 text-uppercase font-weight-light">{{ title }}</h4>
              <p
                class="title font-weight-light"
                v-html="description.replace(/(?:\r\n|\r|\n)/g, '<br />')"
              ></p>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ProductBanner extends Vue {
  @Prop({ type: String, default: '' }) title!: string
  @Prop({ type: String, default: '' }) image!: string
  @Prop({ type: String, default: '' }) description!: string
  @Prop({ type: Boolean, default: false }) fullsize!: boolean
}

</script>

<style>
</style>