<template>
  <v-col class="text-center" cols="12" offset-sm="3" sm="6" offset-md="4" md="4">
    <v-card color="accent" dark>
      <v-card elevation-24 color="primary" class="ma-12 v-sheet--offset">
        <v-img :src="`/printers/${model}/clusterItem.png`" />
      </v-card>
      <h4 class="display-3 text-uppercase font-weight-light">{{ title }}</h4>
      <p class="display-1 text-uppercase font-weight-light">{{ price }}</p>
      <p class="headline text-uppercase font-weight-light">
        <span>{{ $store.state.lang.sale_starts }}</span>
        {{ date }}
      </p>
      <v-btn large color="success" :href="`https://ste3d.ru/${model}`" target="_blank">{{ state }}</v-btn>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class BuyPrinter extends Vue {
  @Prop({ type: String, required: true, default: 'ste320' }) model!: string
  @Prop({ type: String, required: true, default: 'STE 320' }) title!: string
  @Prop({ type: String, required: true, default: '' }) price!: string
  @Prop({ type: String, required: true, default: '' }) date!: string

  get state (): string {
    if (this.model === 'ste320') {
      return this.$store.state.lang.printer.ste320.state
    } else if (this.model === 'ste520') {
      return this.$store.state.lang.printer.ste520.state
    }
    return ''
  }
}

</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
