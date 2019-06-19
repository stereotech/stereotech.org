<template>
  <v-layout row wrap>
    <SoftwarePanel
      :title="$t('software.steapp.title')"
      :description="$t('software.steapp.description')"
      appstore
      googleplay
      microsoftstore
    >
      <p class="headline text-uppercase font-weight-light">{{$t('software.steapp.add1')}}</p>
      <p class="headline text-uppercase font-weight-light">{{$t('software.steapp.add2')}}</p>
      <p class="headline text-uppercase font-weight-light">{{$t('software.steapp.add3')}}</p>
    </SoftwarePanel>
    <SoftwarePanel
      :title="$t('software.steslicer.title')"
      :description="$t('software.steslicer.description')"
      microsoftstore
      appName="steslicer"
    >
      <p class="headline text-uppercase font-weight-light">{{$t('software.steslicer.add1')}}</p>
      <p class="headline text-uppercase font-weight-light">{{$t('software.steslicer.add2')}}</p>
      <p class="headline text-uppercase font-weight-light">{{$t('software.steslicer.add3')}}</p>
    </SoftwarePanel>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import SoftwarePanel from '~/components/software/SoftwarePanel.vue'

@Component({
  components: {
    SoftwarePanel
  }
})
export default class Software extends Vue {

}

</script>

<style>
</style>