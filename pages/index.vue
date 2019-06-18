<template>
  <v-layout row wrap>
    <MainParalax image="/main/bg1.png"/>
    <BenefitsPanel/>
    <PrintersBanner :description="$t('printer.ste520.description')" model="ste520"/>
    <PrintersBanner rightText :description="$t('printer.ste320.description')" model="ste320"/>
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
import PrintersBanner from '~/components/PrintersBanner.vue'

@Component({
  components: {
    MainParalax,
    BenefitsPanel,
    TeamPanel,
    ApplicationsPanel,
    PrintersBanner
  }
})
export default class Index extends Vue {

}
</script>

<style>
</style>




