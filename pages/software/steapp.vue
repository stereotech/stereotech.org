<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <ProductBanner
          image="/software/steapp/banner.jpg"
          :title="this.$tc('Управление 3D печатью - это просто')"
          :description="this.$tc('Управляйте процессом 3D печати откуда угодно: с компьютера, смартфона или напрямую с принтера. Создавайте очередь печати на несколько 3D и 5D принтеров, автоматизируйте обсуживание, снижайте расходы.')"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <DownloadForm :title="this.$tc('Загрузить STE App')" :links="downloadLinks" />
      </v-col>
      <v-col cols="12" lg="10">
        <KeyFeatures
          :title="this.$tc('Основные приемущества использования STE App')"
          :items="keyFeatures"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <ProductCard
          image="/software/steapp/manual.jpg"
          :title="this.$tc('Быстрый старт')"
          :description="this.$tc('Изучите руководство пользователя для получния навыков работы с STE App')"
          link="/support/manuals/steapp"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <v-card>
          <v-card-title>{{$t('Программа предварительного тестирования')}}</v-card-title>
          <v-card-text>
            <v-container fluid>
              <v-row justify="center">
                <v-col cols="12">
                  <p>{{$t('Хотите получать версии приложения, с новыми функциями раньше остальных? Вы можете записаться в программу предварительного тестирования, для получения тестовых сборок программного обеспечения')}}</p>
                </v-col>
                <v-col cols="12" lg="4">
                  <TestingForm
                    :buttonText="$tc('Запись в программу')"
                    :title="$tc('Предварительное тестирование')"
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
    title: 'STE App'
  }
})
export default class SteApp extends Vue {
  get downloadLinks(): DownloadLink[] {
    return [
      {
      name: this.$tc('Загрузить обновление'),
      icon: 'mdi-update',
      description: this.$tc('Используйте последнюю версию ПО принтера'),
      version: this.$tc('Версия ') + this.version,
      download: 'http://software.stereotech.org/firmware/stable/ste-update.stu'
    },
      {
        name: this.$tc('Загрузить для Android'),
        icon: 'mdi-android',
        description: this.$tc('Приложение для доступа и управления принтером со смартфона'),
        version: this.$tc('Версия ') + this.version,
        download: 'https://play.google.com/store/apps/details?id=ru.stereotech.steapp'
      }
    ]
  }
  get keyFeatures(): KeyFeature[] {
    return [
      {
      name: this.$tc('Группировка принтеров'),
      mediaType: MediaType.image,
      mediaSource: 'software/steapp/group.jpg',
      description: this.$tc('STE App упрощает работу с группой принтеров, позволяя управлять ими, используя общий интерфейс'),
      keys: [this.$tc('Возможность работы с любого устройства используя Wi-Fi/LAN'),
      this.$tc('Система распределения заданий между принтерами, позволяет создать задачи, распределяемые между принтерами автоматически'),
      this.$tc('Поддержка 3D и 5D принтеров')]
    },
      {
        name: this.$tc('Уведомления'),
        mediaType: MediaType.image,
        mediaSource: 'software/steapp/notification.jpg',
        description: this.$tc('Уведомления на смартфон и в браузере подскажут, когда печать будет завершена'),
        keys: [this.$tc('Система уведомлений STE Notice, получайте уведомления при завершении работы принтеров или о событиях требующих вашего внимания')]
      },
      {
        name: this.$tc('Управление'),
        mediaType: MediaType.image,
        mediaSource: 'software/steapp/group.jpg',
        description: '',
        keys: [
          this.$tc('Панель независимого управления принтерами STE Cluster позволяет управлять каждым принтером индивидуально из одного приложения'),
          this.$tc('Режим обслуживания принтеров STE ServiceGuide поможет настроить принтер для печати вместе с пошаговыми руководствами'),
          this.$tc('Система распределенного хранения заданий STE FileNet позволит использовать подключенное USB хранилище для печати на любом из принтеров в кластере')
        ]
      }
    ]
  }

  async mounted () {

    this.version = await this.$axios.$get('http://software.stereotech.org/firmware/stable/ste-update.stu.version')
    this.version = this.version.replace(/(\r\n|\n|\r)/gm, "")

  }

  version: string = ''
}

</script>

<style>
</style>