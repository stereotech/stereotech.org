<template>
  <v-card>
    <v-container fluid grid-list-sm>
      <v-row align="center">
        <v-col cols="12" sm="6">
          <v-carousel
            :show-arrows="false"
            interval="3000"
            height="auto"
            max-height="500"
            delimiter-icon="mdi-minus"
          >
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item" />
          </v-carousel>
        </v-col>
        <v-col class="text-center" cols="12" sm="6">
          <h4
            class="headline text-uppercase font-weight-regular pb-4"
          >{{ $t('интеллектуальная световая индикация')}}</h4>
          <p
            class="title text-uppercase font-weight-light"
          >{{ $t('помогает определить завершенную печать, паузу, ошибки, а также найти определенный принтер')}}</p>
          <slot />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class ColorModes extends Vue {
  @Prop({ type: String, required: false, default: 'ste520' }) model!: string

  private items: string[] = [
    `/printers/${this.model}/color/color-1.webp`,
    `/printers/${this.model}/color/color-2.webp`,
    `/printers/${this.model}/color/color-3.webp`,
    `/printers/${this.model}/color/color-4.webp`,
    `/printers/${this.model}/color/color-5.webp`,
    `/printers/${this.model}/color/color-6.webp`
  ]
}

</script>

<style>
</style>
