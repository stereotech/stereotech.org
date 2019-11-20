<template>
  <v-col cols="12">
    <v-card>
      <v-container fluid grid-list-xs>
        <v-row>
          <v-col cols="12">
            <h4
              class="text-center display-2 font-weight-light"
            >{{ $store.state.lang.applications.title }}</h4>
          </v-col>
          <ApplicationsCard
            v-for="(application, index) in applications"
            :key="index"
            :name="application.name"
            :icon="application.icon"
          />
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import ApplicationsCard from '~/components/applications/ApplicationsCard.vue'

@Component({
  components: {
    ApplicationsCard
  }
})
export default class ApplicationsPanel extends Vue {
  private applications = [
    {
      name: this.$store.state.lang.applications.automotive,
      icon: 'mdi-car'
    },
    {
      name: this.$store.state.lang.applications.prosthetics,
      icon: 'mdi-seat-legroom-extra'
    },
    {
      name: this.$store.state.lang.applications.robotics,
      icon: 'mdi-robot-industrial'
    },
    {
      name: this.$store.state.lang.applications.rnd,
      icon: 'mdi-bank'
    },
    {
      name: this.$store.state.lang.applications.defence,
      icon: 'mdi-shield'
    },
    {
      name: this.$store.state.lang.applications.building,
      icon: 'mdi-home-modern'
    },
    {
      name: this.$store.state.lang.applications.drones,
      icon: 'mdi-quadcopter'
    },
    {
      name: this.$store.state.lang.applications.aerospace,
      icon: 'mdi-rocket'
    }
  ]
}
</script>

<style>
</style>
