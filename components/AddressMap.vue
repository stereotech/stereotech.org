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
                  style="width: 100%; height: 100%"
                  :controls="['zoomControl', 'typeSelector']"
                  zoom="5"
                >
                  <template v-for="(address, index) in addresses">
                    <ymap-marker
                      :key="index"
                      :marker-id="index"
                      marker-type="placemark"
                      :coords="mapCoords(address.coords)"
                      :hint-content="`${address.name} | ${address.address}`"
                      :balloon-template="balloonTemplate(address._id)"
                    >
                      <!-- <v-card slot="balloon">
                        <v-card-title>{{ address.name }}</v-card-title>
                        <v-btn>1233</v-btn>
                      </v-card> -->
                    </ymap-marker>
                  </template>
                </yandex-map>
              </client-only>
            </v-sheet>
          </v-col>
        </v-row>

        <template v-if="regionsByCountry" id="a">
          <template v-for="(country, countryInd) in regionsByCountry.keys()">
            <v-row justify="center" :key="`title-${countryInd}`">
              <v-col cols="12" md="8">
                <h2 class="text-h2">{{ country }}</h2>
              </v-col>
            </v-row>
            <template
              v-for="(region, regionInd) in regionsByCountry.get(country)"
            >
              <v-row justify="center" :key="`region-${country}-${regionInd}`">
                <v-col cols="12" md="8">
                  <h4 class="text-h4">{{ region.region }}</h4>
                </v-col>
                <template
                  v-for="(address, index) in groupedAddress.get(region.region)"
                >
                  <v-col cols="12" md="8" :key="`address-${index}`">
                    <v-card class="mx-auto" outlined :id="`${address._id}`">
                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title class="headline">{{
                            address.name
                          }}</v-list-item-title>
                          <v-list-item-subtitle>{{
                            address.address
                          }}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar
                          tile
                          :size="$vuetify.breakpoint.xs ? 48 : 80"
                          color="white"
                        >
                          <v-img
                            v-if="address.logo"
                            :src="`https://api2.stereotech.org/${address.logo.path}`"
                          ></v-img>
                        </v-list-item-avatar>
                      </v-list-item>
                      <v-card-actions>
                        <v-btn
                          v-if="!$vuetify.breakpoint.xs"
                          text
                          color="primary"
                          :href="`mailto:${address.email}`"
                          target="_blank"
                          >{{ address.email }}</v-btn
                        >
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
                        <template v-if="address.phone">
                          <v-btn
                            v-if="!$vuetify.breakpoint.xs"
                            text
                            color="primary"
                            :href="`tel:${address.phone}`"
                            target="_blank"
                            >{{ address.phone }}</v-btn
                          >
                          <v-btn
                            v-else
                            icon
                            text
                            color="primary"
                            :href="`tel:${address.phone}`"
                            target="_blank"
                          >
                            <v-icon>mdi-phone</v-icon>
                          </v-btn>
                        </template>
                        <v-btn
                          text
                          color="primary"
                          :href="address.website"
                          target="_blank"
                          >{{
                            address.website.replace(/https?:\/\//g, "")
                          }}</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </template>
              </v-row>
            </template>
          </template>
        </template>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { Seller } from '~/types/reseller'

@Component
export default class AddressMap extends Vue {
  @Prop({ type: Number, default: 600 }) height!: number
  @Prop({ type: Array, default: () => { return [] } }) addresses!: Seller[]

  @Watch('addresses') OnAddressesChanged () {
    this.groupedAddress = this.groupBy(this.addresses, address => address.region)
    const regions: { country: string, region: string }[] = []
    this.addresses.forEach(ad => {
      if (regions.filter(r => r.region === ad.region).length === 0) {
        regions.push({ country: ad.country, region: ad.region })
      }
      const coords = ad.coords
    })
    this.regionsByCountry = this.groupBy(regions, region => region.country)
  }

  groupedAddress: Map<string, Seller[]> | null = null

  regionsByCountry: Map<string, {
    country: string;
    region: string;
  }[]> | null = null

  groupBy<K, V> (list: Array<V>, keyGetter: (input: V) => K): Map<K, Array<V>> {
    const map = new Map<K, Array<V>>();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  private mapCoords (coords: { lat: number, lng: number }) {
    //return coords.map(c => {c.lat, c.lng})
    return Object.values(coords)
  }

  private balloonTemplate(elId: string){
    console.log(elId)
    return `<div>
      <button onclick="document.getElementById('${elId}').scrollIntoView({block: \'center\', behavior: \'smooth\'});" type="button" class="v-btn  v-btn--depressed theme--light v-size--small primary"><span class="v-btn__content">${this.$t('Подробнее')}</span></button>
    </div>`
  }

}

</script>

<style>
</style>