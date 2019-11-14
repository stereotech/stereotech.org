<template>
  <v-col cols="12" sm="4">
    <v-sheet>
      <v-img :src="image" />
      <h4 class="text-center display-1 font-weight-light">
        {{ $t(title) }}
      </h4>
      <p class="text-center headline">
        {{ $t(description) }}
      </p>
    </v-sheet>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

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
