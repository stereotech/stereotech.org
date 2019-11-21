<template>
  <v-row>
    <v-col cols="12" sm="4">
      <p class="title">{{ $store.state.lang.address }}</p>
    </v-col>
    <v-col cols="12" sm="4" offset-sm="4">
      <v-btn text large block href="tel:+79023648404">+79023648404</v-btn>
      <v-btn text large block href="mailto:info@ste3d.ru" target="_blank">info@ste3d.ru</v-btn>
    </v-col>
    <v-col cols="12">
      <v-card height="600">
        <client-only>
          <yandex-map :coords="[48.748540, 44.549707]" style="width: 100%; height: 100%;">
            <ymap-marker
              marker-id="1"
              marker-type="placemark"
              :coords="[48.748540, 44.549707]"
              hint-content="Stereotech - 5D Addititve Manufacturing"
              cluster-name="1"
            />
          </yandex-map>
        </client-only>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Contacts extends Vue {
}
</script>

<style>
</style>
