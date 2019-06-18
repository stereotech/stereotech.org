<template>
  <v-flex xs12 sm4>
    <v-sheet>
      <v-img :src="image"></v-img>
      <h4 class="text-xs-center display-1 font-weight-light">{{ $t(title) }}</h4>
      <p class="text-xs-center headline">{{ $t(description) }}</p>
    </v-sheet>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
})
export default class BenefitsCard extends Vue {
  @Prop({ type: String, required: true, default: '' }) title!: string
  @Prop({ type: String, required: true, default: '' }) image!: string
  @Prop({ type: String, required: true, default: '' }) description!: string
}
</script>

<style>
</style>
