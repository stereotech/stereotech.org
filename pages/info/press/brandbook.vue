<template>
  <v-card>
    <v-card-title>
      {{ $t("Брендбук") }}
    </v-card-title>
    <StereotechBrandbook />
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { StereotechBrandbook } from '@stereotech/stereotech-brandbook'

@Component({
  components: {
    StereotechBrandbook
  }
})
export default class PressPage extends Vue {

}

</script>

<style>
</style>