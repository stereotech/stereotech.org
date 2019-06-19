<template>
  <v-layout row wrap>
    <MainParalax image="/main/bg1.png"/>
    <BenefitsPanel/>
    <ApplicationsPanel/>
    <TeamPanel/>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MainParalax from '~/components/MainParalax.vue'
import BenefitsPanel from '~/components/benefits/BenefitsPanel.vue'
import TeamPanel from '~/components/team/TeamPanel.vue'
import ApplicationsPanel from '~/components/applications/ApplicationsPanel.vue'

@Component({
  components: {
    MainParalax,
    BenefitsPanel,
    TeamPanel,
    ApplicationsPanel,
  }
})
export default class About extends Vue {

}
</script>

<style>
</style>

