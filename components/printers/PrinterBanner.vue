<template>
  <v-col cols="12">
    <v-card dark>
      <v-img :src="`/printers/${model}/banner.webp`" height="500">
        <v-row align="center" justify="center" class="fill-height bottom-gradient text-center">
          <v-col cols="auto">
            <h1 class="display-3 font-weight-thin text-uppercase">{{ model }}</h1>
            <h4 class="display-1">{{ description }}</h4>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PrinterBanner extends Vue {
  @Prop({ type: String, required: true, default: '' }) model!: string
  @Prop({ type: String, required: false, default: '' }) description!: string
}
</script>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(2, 119, 189, 0.33),
    rgba(2, 119, 189, 0.9)
  );
}
</style>
