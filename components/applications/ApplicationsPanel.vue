<template>
  <v-flex xs12>
    <v-card>
      <v-container fluid grid-list-xs>
        <v-layout row wrap>
          <v-flex xs12>
            <h4 class="text-xs-center display-2 font-weight-light">{{ $t('applications.title')}}</h4>
          </v-flex>
          <ApplicationsCard
            v-for="(application, index) in applications"
            :key="index"
            :name="application.name"
            :icon="application.icon"
          />
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import ApplicationsCard from '~/components/applications/ApplicationsCard.vue'

@Component({
  components: {
    ApplicationsCard
  }
})
export default class ApplicationsPanel extends Vue {
  private applications = [
    {
      name: 'applications.automotive',
      icon: 'mdi-car'
    },
    {
      name: 'applications.prosthetics',
      icon: 'mdi-seat-legroom-extra'
    },
    {
      name: 'applications.robotics',
      icon: 'mdi-robot-industrial'
    },
    {
      name: 'applications.rnd',
      icon: 'mdi-bank'
    },
    {
      name: 'applications.defence',
      icon: 'mdi-shield'
    },
    {
      name: 'applications.building',
      icon: 'mdi-home-modern'
    },
    {
      name: 'applications.drones',
      icon: 'mdi-quadcopter'
    },
    {
      name: 'applications.aerospace',
      icon: 'mdi-rocket'
    }
  ]
}
</script>


<style>
</style>
