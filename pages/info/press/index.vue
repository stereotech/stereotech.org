<template>
  <v-card>
    <v-card-title>
      {{ $t("Презентация проекта") }}
    </v-card-title>
    <iframe
      src="https://drive.google.com/file/d/1haJ7X9HS3XwRbQVP-sj_3rRZIoJEdT3m/preview"
      width="100%"
      height="480"
      allow="autoplay"
      frameborder="0"
    ></iframe>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class PressPage extends Vue {

}

</script>

<style>
</style>