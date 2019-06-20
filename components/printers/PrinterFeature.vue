<template>
  <v-flex xs12>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap align-center>
          <v-flex xs12 sm6 v-if="!rightText" text-xs-center>
            <h4 class="headline text-uppercase font-weight-regular pb-3">{{ title }}</h4>
            <p class="title text-uppercase font-weight-light">{{description}}</p>
            <slot></slot>
          </v-flex>
          <v-flex xs12 sm6>
            <v-img :src="image" max-height="500" contain></v-img>
          </v-flex>
          <v-flex xs12 sm6 v-if="rightText" text-xs-center>
            <h4 class="headline text-uppercase font-weight-regular pb-3">{{ title}}</h4>
            <p class="title text-uppercase font-weight-light">{{description}}</p>
            <slot></slot>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class PrinterFeature extends Vue {
  @Prop({ type: Boolean, required: false, default: false }) rightText!: boolean
  @Prop({ type: String, required: false, default: '' }) title!: string
  @Prop({ type: String, required: false, default: '' }) image!: string
  @Prop({ type: String, required: false, default: '' }) description!: boolean
}
</script>
