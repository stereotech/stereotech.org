<template>
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
  get benefits(): {
    title: string,
    image: string,
    description: string
  } [] {
    return [
      {title: this.$tc('Быстрее'), image: 'benefits/faster.webp', description: this.$tc('Сокращение времени печати изделия за счет отказа от поддержек')},
      {title: this.$tc('Качественнее'), image: 'benefits/quality.webp', description: this.$tc('Повышение качества поверхности за счет печати под наклоном')},
      {title: this.$tc('Прочнее'), image: 'benefits/stronger.webp', description: this.$tc('Строится прочная объемная структура изделия вместо послойной')}
    ]
  }

}
</script>

<style>
</style>
