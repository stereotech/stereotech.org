<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col lg="8">
        <v-card>
          <v-card-title>Баннер с фотографией</v-card-title>
          <v-card-text>Новые возможности аддитивного пр-ва</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col lg="4">
        <v-card>
          <v-card-title>Закажи тестовую деталь</v-card-title>
          <v-card-text>Ссылка на раздел 3D печать</v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4">
        <v-card>
          <v-card-title>Кратко по разделам продуктов</v-card-title>
          <v-card-text>Принтеры, софт. По нопкам переход на страницу 3D принтеры, ПО</v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4">
        <v-card>
          <v-card-title>Блог</v-card-title>
          <v-card-text>Три последних поста</v-card-text>
        </v-card>
      </v-col>
      <MainParalax image="/main/bg1.webp" button-link="/info/about" />
      <v-col cols="12">
        <h1
          class="display-3 text-uppercase font-weight-light text-center hidden-xs-only"
        >{{ $store.state.lang.slogan }}</h1>
        <h1
          class="headline text-uppercase font-weight-light text-center hidden-sm-and-up"
        >{{ $store.state.lang.slogan }}</h1>
      </v-col>
      <PrintersBanner />
      <SoftwareBanner />
      <MainParalax image="/main/bg1.webp" button-link="/info/about" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainParalax from '~/components/MainParalax.vue'
import PrintersBanner from '~/components/PrintersBanner.vue'
import SoftwareBanner from '~/components/software/SoftwareBanner.vue'

@Component({
  components: {
    MainParalax,
    PrintersBanner,
    SoftwareBanner
  }
})
export default class Index extends Vue {

}
</script>

<style>
</style>
