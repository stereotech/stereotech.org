<template>
  <KeyFeatures :title="this.title" :items="serviceBenefits"/>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import KeyFeatures from '~/components/KeyFeatures.vue'

@Component({
  components: {
    KeyFeatures
  }
})

export default class ServiceBenefits extends Vue{
  
  serviceBenefits: any[] = []
  title: string = ''

  private async getServiceBenefits(){
    let response = await fetch(`${process.env.API_STATAMIC}/collections/serviceBenefits/entries`,{
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()
    this.serviceBenefits = data.data
    this.title = data.data[0].collection.title
  }
  async mounted(){
    await this.getServiceBenefits()
  }
  
}
</script>

<style>

</style>