<template>
  <v-row>
    <MainParalax image="/main/bg1.webp" />
    <BenefitsPanel />
    <ApplicationsPanel />
    <TeamPanel />
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainParalax from '~/components/MainParalax.vue'
import BenefitsPanel from '~/components/benefits/BenefitsPanel.vue'
import TeamPanel from '~/components/team/TeamPanel.vue'
import ApplicationsPanel from '~/components/applications/ApplicationsPanel.vue'

@Component({
  components: {
    MainParalax,
    BenefitsPanel,
    TeamPanel,
    ApplicationsPanel
  }
})
export default class About extends Vue {

}
</script>

<style>
</style>
