<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <ProductCard
          fullsize
          image="/printers/desktop/series5.jpg"
          :title="this.$tc('Новые возможности аддитивного производства с серией 5D принтеров 5хх')"
          link="/printers/series5"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <ProductCard
          image="/main/bg1.webp"
          :title="this.$tc('Закажите тестовую деталь')"
          :description="this.$tc('Чтобы наилучшим образом решить вашу проблему предлагаем вам заказать тестовую деталь')"
          link="/resellers"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <ProductCard
          image="/printers/desktop/banner1.jpg"
          :title="this.$tc('Настольные принтеры')"
          :description="this.$tc('Устройства способные с легкостью изменить и оптимизировать процесс производства')"
          link="/printers"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <ProductCard
          image="/software/steapp/banner.jpg"
          :title="this.$tc('Наше программное обеспечение')"
          :description="this.$tc('Подготовка к 3D и 5D печати\nУправление процессом печати')"
          link="/software"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <LatestPosts />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainParalax from '~/components/MainParalax.vue'
import SoftwareBanner from '~/components/software/SoftwareBanner.vue'
import ProductCard from '~/components/ProductCard.vue'
import ProductBanner from '~/components/ProductBanner.vue'
import LatestPosts from '~/components/LatestPosts.vue'

@Component({
  components: {
    MainParalax,
    SoftwareBanner,
    LatestPosts,
    ProductBanner,
    ProductCard
  }
})
export default class Index extends Vue {

}
</script>

<style>
</style>
