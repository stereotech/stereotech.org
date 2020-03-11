<template>
  <v-row>
    <SoftwarePanel
      :title="$store.state.lang.software.steslicer.title"
      :description="$store.state.lang.software.steslicer.description"
      microsoftstore
      app-name="steslicer"
    >
      <p
        class="headline text-uppercase font-weight-light"
      >{{ $store.state.lang.software.steslicer.add1 }}</p>
      <p
        class="headline text-uppercase font-weight-light"
      >{{ $store.state.lang.software.steslicer.add2 }}</p>
      <p
        class="headline text-uppercase font-weight-light"
      >{{ $store.state.lang.software.steslicer.add3 }}</p>
    </SoftwarePanel>
    <SoftwarePanel
      :title="$store.state.lang.software.steapp.title"
      :description="$store.state.lang.software.steapp.description"
      googleplay
    >
      <p
        class="headline text-uppercase font-weight-light"
      >{{ $store.state.lang.software.steapp.add1 }}</p>
      <p
        class="headline text-uppercase font-weight-light"
      >{{ $store.state.lang.software.steapp.add2 }}</p>
      <p
        class="headline text-uppercase font-weight-light"
      >{{ $store.state.lang.software.steapp.add3 }}</p>
    </SoftwarePanel>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SoftwarePanel from '~/components/software/SoftwarePanel.vue'

@Component({
  components: {
    SoftwarePanel
  },
  head: {
    title: 'Программное обеспечение'
  }
})
export default class Software extends Vue {

}

</script>

<style>
</style>
