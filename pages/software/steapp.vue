<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <ProductBanner
          image="/software/steapp/banner.jpg"
          title="Управление 3D печатью - это просто"
          :description="'Управляйте процессом 3D печати откуда угодно: с компьютера, смартфона или напрямую с принтера. Создавайте очередь печати на несколько 3D и 5D принтеров, автоматизируйте обсуживание, снижайте расходы.'"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <DownloadForm title="Загрузить STE App" :links="downloadLinks" />
      </v-col>
      <v-col cols="12" lg="10">
        <KeyFeatures title="Основные приемущества использования STE App" :items="keyFeatures" />
      </v-col>
      <v-col cols="12" lg="10">
        <ProductCard
          image="/software/steapp/manual.jpg"
          title="Быстрый старт"
          description="Изучите руководство пользователя для получния навыков работы с STE App"
          link="/support/manuals/steapp"
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
                  <TestingForm buttonText="Запись в программу" />
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
    title: 'STE App'
  }
})
export default class SteApp extends Vue {
  keyFeatures: KeyFeature[] = [
    {
      name: 'Группировка принтеров',
      image: '/software/steapp/group.jpg',
      description: 'STE App упрощает работу с группой принтеров, позволяя управлять ими, используя общий интерфейс',
      keys: ['Возможность работы с любого устройства используя Wi-Fi/LAN',
        'Система распределения заданий между принтерами, позволяет создать задачи, распределяемые между принтерами автоматически',
        'Поддержка 3D и 5D принтеров']
    },
    {
      name: 'Уведомления',
      image: '/software/steapp/notification.jpg',
      description: 'Уведомления на смартфон и в браузере подскажут, когда печать будет завершена',
      keys: ['Система уведомлений STE Notice, получайте уведомления при завершении работы принтеров или о событиях требующих вашего внимания']
    },
    {
      name: 'Управление',
      image: '/software/steapp/group.jpg',
      description: '',
      keys: [
        'Панель независимого управления принтерами STE Cluster позволяет управлять каждым принтером индивидуально из одного приложения',
        'Режим обслуживания принтеров STE ServiceGuide поможет настроить принтер для печати вместе с пошаговыми руководствами',
        'Система распределенного хранения заданий STE FileNet позволит использовать подключенное USB хранилище для печати на любом из принтеров в кластере'
      ]
    }
  ]

  downloadLinks: DownloadLink[] = [
    {
      name: 'Загрузить обновление',
      icon: 'mdi-update',
      description: 'Используйте последнюю версию ПО принтера',
      version: 'Версия 1.1.0',
      download: 'http://software.stereotech.org/firmware/stable/ste-update.stu'
    },
    {
      name: 'Загрузить для Android',
      icon: 'mdi-android',
      description: 'Приложение для доступа и управления принтером со смартфона',
      version: 'Версия 1.1.0',
      download: 'https://play.google.com/store/apps/details?id=ru.stereotech.steapp'
    }
  ]
}

</script>

<style>
</style>