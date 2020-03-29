<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>Общее описание</v-card-title>
          <v-card-text>Приемущества наших принтеров. Фото с Гришей</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>Карточки с кратким описанием принтера и слоганом</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>Таблица сравнения функций</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>Блог</v-card-title>
          <v-card-text>Три последних поста</v-card-text>
        </v-card>
      </v-col>
      <v-col class="align-center" cols="12">
        <h1
          class="display-3 text-uppercase font-weight-light text-center hidden-xs-only"
        >{{ $store.state.lang.compareOurPrinters }}</h1>
        <h1
          class="headline text-uppercase font-weight-light text-center hidden-sm-and-up"
        >{{ $store.state.lang.compareOurPrinters }}</h1>
      </v-col>
      <CompareBanner />

      <CompareSpecs />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CompareSpecs from '~/components/printers/CompareSpecs.vue'
import CompareBanner from '~/components/printers/CompareBanner.vue'

@Component({
  components: {
    CompareBanner,
    CompareSpecs
  },
  head: {
    title: 'Оборудование'
  }
})
export default class Printers extends Vue {

}

</script>

<style>
</style>
