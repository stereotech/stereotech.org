<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <h4 class="display-1 text-uppercase font-weight-light">{{$t('Наш канал на Youtube')}}</h4>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" lg="8">
          <iframe
            width="100%"
            height="500uv"
            src="https://www.youtube.com/embed/videoseries?list=PLpJTPL5twL-6zV0_D6kh6gSj7hWacwpB_"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class YoutubeChannel extends Vue {

}

</script>

<style>
</style>