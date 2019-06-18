<template>
  <v-flex xs12>
    <v-card>
      <v-container fluid grid-list-sm>
        <v-layout row wrap align-center>
          <v-flex xs12 sm6 v-if="!rightText" text-xs-center>
            <h4 class="display-4 text-uppercase font-weight-light">{{ model}}</h4>
            <p class="display-1 text-uppercase font-weight-light">{{description}}</p>
            <v-btn large color="primary" nuxt :to="`/${model}`">Know more</v-btn>
          </v-flex>
          <v-flex xs12 sm6>
            <v-img :src="`/printers/${model}/black-front.png`"></v-img>
          </v-flex>
          <v-flex xs12 sm6 v-if="rightText" text-xs-center>
            <h4 class="display-4 text-uppercase font-weight-light">{{ model}}</h4>
            <p class="display-1 text-uppercase font-weight-light">{{description}}</p>
            <v-btn large color="primary" nuxt :to="`/${model}`">Know more</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class PrintersBanner extends Vue {
  @Prop({ type: Boolean, required: false, default: false }) rightText!: boolean
  @Prop({ type: String, required: false, default: 'ste520' }) model!: boolean
  @Prop({ type: String, required: false, default: '' }) description!: boolean
}
</script>
