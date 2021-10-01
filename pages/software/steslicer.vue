<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <ProductBanner
          image="/software/steslicer/banner.jpg"
          :title="$t('Уникальное программное обеспечение для 5D печати')"
          :description="
            $tc(
              'Подготавливайте 3D модели как для обычной, так и для инновационной 5D печати. Множество инструментов и настроек позволяют с точностью получить заданный результат.'
            )
          "
        />
      </v-col>

      <v-col cols="12" lg="10">
        <KeyFeatures
          :title="$tc('Особенности STE Slicer')"
          :items="keyFeatures"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <ProductCard
          image="/software/steslicer/manual.jpg"
          :title="$tc('Быстрый старт')"
          :description="
            $tc(
              'Изучите руководство пользователя, чтобы узнать обо всех функциях STE Slicer'
            )
          "
          link="https://support.stereotech.org/software/steslicer"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductBanner from '~/components/ProductBanner.vue'
import ProductCard from '~/components/ProductCard.vue'
import KeyFeatures from '~/components/KeyFeatures.vue'
import TestingForm from '~/components/software/TestingForm.vue'
import DownloadForm from '~/components/software/DownloadForm.vue'
import { KeyFeature, MediaType } from '~/types/keyFeature'
import { DownloadLink } from '~/types/download'

@Component({
  components: {
    ProductBanner,
    KeyFeatures,
    TestingForm,
    ProductCard,
    DownloadForm
  },
  head: {
    title: 'STE Slicer'
  }
})
export default class SteSlicer extends Vue {

  keyFeatures: any[] = []

  public async getSlicerFeatures () {
    let data
    let response = await fetch(`https://api2.stereotech.org/api/collections/get/slicerFeatures?token=${process.env.COCKPIT_TOKEN}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lang: this.$i18n.locale
      })
    })
    data = await response.json()
    this.keyFeatures = data.entries
  }



  async mounted () {

    await this.getSlicerFeatures()
  }

  version: string = ''

}

</script>

<style>
</style>