<template>
  <v-card>
    <v-container fluid grid-list-xs>
      <v-row>
        <v-col cols="12">
          <h4 class="text-center display-2 font-weight-light">{{ $t('Области применения') }}</h4>
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
  private applications: any[] = []
  
  async mounted(){
    this.applications.push({name: this.$tc('Автомобилестроение'), icon: 'mdi-car'})
    this.applications.push({name:this.$tc('Протезирование'), icon: 'mdi-seat-legroom-extra'})
    this.applications.push({name: this.$tc('Робототехника'), icon: 'mdi-robot-industrial' })
    this.applications.push({name: this.$tc('Научные исследования и образование'), icon: 'mdi-bank' })
    this.applications.push({name: this.$tc('Оборонная промышленность'), icon: 'mdi-shield' })
    this.applications.push({name: this.$tc('Строительство'), icon: 'mdi-home-modern' })
    this.applications.push({name: this.$tc('Малая авиация'), icon: 'mdi-quadcopter' })
    this.applications.push({name: this.$tc('Авиация и ракетостроение'), icon: 'mdi-rocket' })
  }

  
}
</script>

<style>
</style>
