<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card href="https://instagram.com/ste3d_ru/" target="_blank">
          <v-img height="300" src="/services/insta_feed.jpg">
            <v-card-title class="white--text">Примеры работ в нашем Instagram @ste3d_ru</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class InstagramGallery extends Vue {

}

</script>

<style>
</style>