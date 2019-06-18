<template>
  <v-flex xs12>
    <v-card>
      <v-container fluid grid-list-xs>
        <v-layout row wrap>
          <BenefitsCard
            v-for="(benefit, index) in benefits"
            :key="index"
            :title="benefit.title"
            :description="benefit.description"
            :image="benefit.image"
          />
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import BenefitsCard from '~/components/benefits/BenefitsCard.vue'

@Component({
  components: {
    BenefitsCard
  }
})
export default class BenefitsPanel extends Vue {
  private benefits: any[] = [
    {
      title: 'benefit.faster.title',
      image: '/benefits/faster.png',
      description: 'benefit.faster.description'
    },
    {
      title: 'benefit.quality.title',
      image: '/benefits/quality.png',
      description: 'benefit.quality.description'
    },
    {
      title: 'benefit.stronger.title',
      image: '/benefits/stronger.png',
      description: 'benefit.stronger.description'
    }
  ]
}
</script>


<style>
</style>
