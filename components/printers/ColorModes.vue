<template>
  <v-flex xs12>
    <v-card>
      <v-container fluid grid-list-sm>
        <v-layout row wrap align-center>
          <v-flex xs12 sm6>
            <v-carousel hide-controls interval="3000" height="auto" delimiter-icon="mdi-minus">
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item"></v-carousel-item>
            </v-carousel>
          </v-flex>
          <v-flex xs12 sm6 text-xs-center>
            <h4
              class="display-3 text-uppercase font-weight-light"
            >{{ $t('printer.common.light.title') }}</h4>
            <p
              class="headline text-uppercase font-weight-light"
            >{{$t('printer.common.light.description')}}</p>
            <slot></slot>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class ColorModes extends Vue {
  @Prop({ type: String, required: false, default: 'ste520' }) model!: string

  private items: string[] = [
    `/printers/${this.model}/color/color-1.png`,
    `/printers/${this.model}/color/color-2.png`,
    `/printers/${this.model}/color/color-3.png`,
    `/printers/${this.model}/color/color-4.png`,
    `/printers/${this.model}/color/color-5.png`,
    `/printers/${this.model}/color/color-6.png`,
  ]
}

</script>

<style>
</style>