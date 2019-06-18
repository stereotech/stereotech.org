<template>
  <v-layout row wrap>
    <MainParalax image="/main/bg1.png"/>
    <BenefitsPanel/>
    <TeamPanel/>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MainParalax from '~/components/MainParalax.vue'
import BenefitsPanel from '~/components/benefits/BenefitsPanel.vue'
import TeamPanel from '~/components/team/TeamPanel.vue'

@Component({
  components: {
    MainParalax,
    BenefitsPanel,
    TeamPanel
  }
})
export default class Index extends Vue {

}
</script>

<style>
</style>




