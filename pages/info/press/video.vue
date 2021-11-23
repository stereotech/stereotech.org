<template>
  <v-card>
    <v-card-title>
      {{ $t("О технологии 5Dtech") }}
    </v-card-title>
    <iframe
      width="100%"
      height="480"
      src="https://www.youtube.com/embed/videoseries?list=PLpJTPL5twL-4bOAtLpnqyBxoCi0NR9UdG"
      title="О технологии 5Dtech"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
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