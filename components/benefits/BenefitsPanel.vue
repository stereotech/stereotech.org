<template>
  <v-col cols="12">
    <v-card>
      <v-container fluid grid-list-xs>
        <v-row>
          <BenefitsCard
            v-for="(benefit, index) in benefits"
            :key="index"
            :title="benefit.title"
            :description="benefit.description"
            :image="benefit.image"
          />
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import BenefitsCard from '~/components/benefits/BenefitsCard.vue'

@Component({
  components: {
    BenefitsCard
  }
})
export default class BenefitsPanel extends Vue {
  private benefits: any[] = [
    {
      title: this.$store.state.lang.benefit.faster.title,
      image: 'benefits/faster.webp',
      description: this.$store.state.lang.benefit.faster.description
    },
    {
      title: this.$store.state.lang.benefit.quality.title,
      image: 'benefits/quality.webp',
      description: this.$store.state.lang.benefit.quality.description
    },
    {
      title: this.$store.state.lang.benefit.stronger.title,
      image: 'benefits/stronger.webp',
      description: this.$store.state.lang.benefit.stronger.description
    }
  ]
}
</script>

<style>
</style>
