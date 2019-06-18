<template>
  <v-layout row wrap>
    <v-flex xs12 sm4>
      <p class="title">{{ $t('address') }}</p>
    </v-flex>
    <v-flex xs12 sm4 offset-sm4>
      <v-btn flat large block href="tel:+79023648404">+79023648404</v-btn>
      <v-btn flat large block href="mailto:info@ste3d.ru" target="_blank">info@ste3d.ru</v-btn>
    </v-flex>
    <v-flex xs12>
      <v-card height="600">
        <yandex-map
          :coords="[48.748540, 44.549707]"
          style="width: 100%; height: 100%;"
          :settings="settings"
        >
          <ymap-marker
            marker-id="1"
            marker-type="placemark"
            :coords="[48.748540, 44.549707]"
            hint-content="Stereotech - 5D Addititve Manufacturing"
            cluster-name="1"
          ></ymap-marker>
        </yandex-map>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

@Component({
  components: {
    yandexMap, ymapMarker
  }
})
export default class Contacts extends Vue {
  private settings = {
    apiKey: '***REMOVED***',
    lang: 'ru_RU',
    version: '2.1'
  }

  placemarks = [
    {
      coords: [54.8, 39.8],
      properties: {}, // define properties here
      options: {}, // define options here
      clusterName: "1",
      balloonTemplate: '<div>"Your custom template"</div>',
      callbacks: { click: function () { } }
    }
  ]
}
</script>

<style>
</style>
