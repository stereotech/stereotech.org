<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="3">
        <v-img src="/stereotech.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" lg="10" v-if="team">
        <TeamPanel />
      </v-col>
      <v-col cols="12" lg="10" v-if="address">
        <AddressMap :addresses="addresses" />
      </v-col>
      <v-col cols="12" lg="10" v-if="media">
        <InformationViewer id="12" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TeamPanel from '~/components/team/TeamPanel.vue'
import AddressMap from '~/components/AddressMap.vue'
import InformationViewer from '~/components/InformationViewer.vue'
import { Seller, SellerType } from '~/types/reseller'

@Component({
  head: {
    title: 'О Stereotech'
  },
  components: {
    TeamPanel,
    AddressMap,
    InformationViewer
  }
})
export default class AboutStereotech extends Vue {
  get team (): boolean {
    return !this.$route.params.slug || this.$route.params.slug == 'team'
  }

  get address (): boolean {
    return !this.$route.params.slug || this.$route.params.slug == 'address'
  }

  get media (): boolean {
    return this.$route.params.slug == 'media'
  }

  addresses: Seller[] = [
    {
      name: 'Stereotech',
      logo: { path: '/resellers/stereotech.jpg' },
      email: 'info@5dtech.pro',
      website: 'https://5dtech.pro',
      region: 'Волгоградская область',
      country: 'Российская Федерация',
      address: 'г. Волгоград, ул. Огарева, д. 2',
      type: SellerType.Manufacturer,
      coords: { lat: 48.692225,  lng: 44.498048}
    },
    {
      name: 'ATSS Group',
      logo: { path: '/resellers/atss.jpg' },
      email: 'info@atssgroup.com',
      website: 'http://atssgroup.com',
      region: 'Москва',
      country: 'Российская Федерация',
      address: 'г. Москва, Волоколамское шоссе, д. 2',
      type: SellerType.Distributor,
      coords: { lat: 55.807476, lng: 37.505292}
    },
    {
      name: 'Capvidia Belgium',
      logo: { path: '/resellers/capvidia.jpg' },
      email: 'info@capvidia.com',
      website: 'http://capvidia.com',
      region: 'Левен',
      country: 'Бельгия',
      address: 'Technologielaan 3 B-3001 Leuven',
      type: SellerType.Distributor,
      coords: { lat: 50.8540782, lng: 4.727265}
    },
  ]
}

</script>

<style>
</style>