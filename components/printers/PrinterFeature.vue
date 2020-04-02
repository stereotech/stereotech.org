<template>
  <v-card>
    <v-container fluid grid-list-lg>
      <v-row align="center">
        <v-col v-if="!rightText" class="text-center" cols="12" sm="6">
          <h4 class="headline text-uppercase font-weight-regular pb-4">{{ title }}</h4>
          <p class="title text-uppercase font-weight-light">{{ description }}</p>
          <slot />
        </v-col>
        <v-col cols="12" sm="6">
          <v-img :src="image" max-height="500" contain />
        </v-col>
        <v-col v-if="rightText" class="text-center" cols="12" sm="6">
          <h4 class="headline text-uppercase font-weight-regular pb-4">{{ title }}</h4>
          <p class="title text-uppercase font-weight-light">{{ description }}</p>
          <slot />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PrinterFeature extends Vue {
  @Prop({ type: Boolean, required: false, default: false }) rightText!: boolean
  @Prop({ type: String, required: false, default: '' }) title!: string
  @Prop({ type: String, required: false, default: '' }) image!: string
  @Prop({ type: String, required: false, default: '' }) description!: boolean
}
</script>
