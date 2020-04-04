<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <ProductBanner
          image="/software/steslicer/banner.jpg"
          title="Уникальное программное обеспечение для 5D печати"
          :description="'Подготавливайте 3D модели как для обычной, так и для инновационной 5D печати. Множество инструментов и настроек позволяют с точностью получить заданный результат.'"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <DownloadForm title="Загрузить STE Slicer" :links="downloadLinks" />
      </v-col>
      <v-col cols="12" lg="10">
        <KeyFeatures title="Особенности STE Slicer" :items="keyFeatures" />
      </v-col>
      <v-col cols="12" lg="10">
        <ProductCard
          image="/software/steslicer/manual.jpg"
          title="Быстрый старт"
          description="Изучите руководство пользователя, чтобы узнать обо всех функциях STE Slicer"
          link="/support/manuals/steslicer"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <v-card>
          <v-card-title>Программа предварительного тестирования</v-card-title>
          <v-card-text>
            <v-container fluid>
              <v-row justify="center">
                <v-col cols="12">
                  <p>Хотите получать версии приложения, с новыми функциями раньше остальных? Вы можете записаться в программу предварительного тестирования, для получения тестовых сборок программного обеспечения</p>
                </v-col>
                <v-col cols="12" lg="4">
                  <TestingForm
                    buttonText="Запись в программу"
                    title="Предварительное тестирование"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
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
import { KeyFeature } from '~/types/keyFeature'
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
  keyFeatures: KeyFeature[] = [
    {
      name: 'Режимы слайсинга',
      image: 'software/steslicer/printing_modes.jpg',
      description: 'STE Slicer поддерживает работу как с 3D, так и с 5D принтерами Stereotech',
      keys: ['Различные режимы слайсинга',
        'Настройки для режимов слайсинга',
      ]
    },
    {
      name: 'Режимы слайсинга',
      image: 'software/steslicer/printing_modes.jpg',
      description: 'STE Slicer поддерживает работу как с 3D, так и с 5D принтерами Stereotech',
      keys: ['Различные режимы слайсинга',
        'Настройки для режимов слайсинга',
      ]
    },
    {
      name: 'Режимы слайсинга',
      image: 'software/steslicer/printing_modes.jpg',
      description: 'STE Slicer поддерживает работу как с 3D, так и с 5D принтерами Stereotech',
      keys: ['Различные режимы слайсинга',
        'Настройки для режимов слайсинга',
      ]
    },
  ]


  downloadLinks: DownloadLink[] = [
    {
      name: 'Загрузить для Windows x64',
      icon: 'mdi-download',
      description: 'Доступно для Windows Vista и выше, 64-бит',
      version: 'Версия 0.1.0',
      download: 'http://software.stereotech.org/steslicer/stable/latest.version'
    }
  ]
}

</script>

<style>
</style>