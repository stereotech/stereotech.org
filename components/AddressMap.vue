<template>
  <v-card>
    <v-card-text>
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="12">
            <v-sheet :height="height" elevation="1">
              <client-only>
                <yandex-map
                  :coords="[54.720026, 30.997946]"
                  style="width: 100%; height: 100%;"
                  :controls="['zoomControl', 'typeSelector']"
                  zoom="5"
                >
                  <template v-for="(address, index) in addresses">
                    <ymap-marker
                      :key="index"
                      :marker-id="index"
                      marker-type="placemark"
                      :coords="address.coords"
                      :hint-content="`${address.name} | ${address.address}`"
                    >
                      <v-card slot="balloon">
                        <v-card-title>{{ address.name}}</v-card-title>
                      </v-card>
                    </ymap-marker>
                  </template>
                </yandex-map>
              </client-only>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row justify="center">
          <template v-for="(address, index) in addresses">
            <v-col cols="12" md="6" lg="4" :key="index">
              <v-card class="mx-auto" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline">{{ address.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ address.country }}, {{ address.region }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ address.address }}</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar tile :size="$vuetify.breakpoint.xs ? 48 : 80" color="grey">
                    <v-img :src="address.logo" />
                  </v-list-item-avatar>
                </v-list-item>
                <v-card-actions>
                  <v-btn
                    v-if="!$vuetify.breakpoint.xs"
                    text
                    color="primary"
                    :href="`mailto:${address.email}`"
                    target="_blank"
                  >{{ address.email }}</v-btn>
                  <v-btn
                    v-else
                    icon
                    text
                    color="primary"
                    :href="`mailto:${address.email}`"
                    target="_blank"
                  >
                    <v-icon>mdi-email</v-icon>
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    :href="address.website"
                    target="_blank"
                  >{{ address.website.replace(/https?:\/\//g, '') }}</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Seller } from '~/types/reseller'

@Component
export default class AddressMap extends Vue {
  @Prop({ type: Number, default: 600 }) height!: number
  @Prop({ type: Array, default: () => { return [] } }) addresses!: Seller[]

}

</script>

<style>
</style>