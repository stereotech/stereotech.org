<template>
  <v-card>
    <v-container fluid grid-list-sm>
      <v-row class="text-center">
        <v-col cols="12">
          <h4
            class="headline text-uppercase font-weight-light text-center"
          >{{ this.$tc('поддерживаемое программное обеспечение') }}</h4>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img src="/printers/software/steslicer.webp" />
          <h4
            class="headline text-uppercase font-weight-regular"
          >{{ $store.state.lang.software.steslicer.title }}</h4>
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('ПОДГОТОВКА МОДЕЛЕЙ ДЛЯ 3D И 5D ПЕЧАТИ') }}</p>
          <v-btn
            color="primary"
            nuxt
            :to="localePath('/software')"
            depressed
          >{{ this.$tc('подробнее') }}</v-btn>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img src="/printers/software/cura.webp" />
          <h4
            class="headline text-uppercase font-weight-regular"
          >{{ $store.state.lang.software.cura.title }}</h4>
          <p
            class="title text-uppercase font-weight-light"
          >{{ this.$tc('ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ С БОЛЕЕ ЧЕМ 300 НАСТРОЕК ПЕЧАТИ') }}</p>
          <v-btn
            color="primary"
            href="https://ultimaker.com/en/products/ultimaker-cura-software"
            target="_blank"
            depressed
          >{{ this.$tc('подробнее') }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class SupportedSlicers extends Vue {

}

</script>

<style>
</style>
