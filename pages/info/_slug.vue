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

  get media (): boolean {
    return this.$route.params.slug == 'media'
  }

  addresses: Seller[] = []

  async mounted () {
  }
}

</script>

<style>
</style>