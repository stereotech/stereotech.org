<template>
  <v-flex xs12 offset-sm3 sm6 offset-md4 md4 text-xs-center>
    <v-card color="accent" dark>
      <v-card elevation-24 color="primary" class="ma-5 v-sheet--offset">
        <v-img :src="`/printers/${model}/clusterItem.png`"></v-img>
      </v-card>
      <h4 class="display-3 text-uppercase font-weight-light">{{ title }}</h4>
      <p class="display-1 text-uppercase font-weight-light">{{ price }}</p>
      <p class="headline text-uppercase font-weight-light">
        <span>{{$t('sale-starts')}}</span>
        {{ date }}
      </p>
      <v-btn large color="success" :href="`https://ste3d.ru/${model}`" target="_blank">Preorder</v-btn>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class BuyPrinter extends Vue {
  @Prop({ type: String, required: true, default: 'ste320' }) model!: string
  @Prop({ type: String, required: true, default: 'STE 320' }) title!: string
  @Prop({ type: String, required: true, default: '' }) price!: string
  @Prop({ type: String, required: true, default: '' }) date!: string
}

</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>