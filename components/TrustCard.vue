<template>
  <v-card>
      <!-- <v-card-text> -->
          <v-row justify="center">
            <v-col cols="12" class="text-center">
                <h4 class="display-1 font-weight-light">{{ $t("Нам доверяют")}}</h4>
            </v-col>
              <v-col cols="6" sm="2" v-for="(logo, index) in logos" :key="index">
                  <v-img :src="logo"></v-img>
              </v-col>
          </v-row>
      <!-- </v-card-text> -->
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TrustCard extends Vue{

    private logos: string[] = [
        'trust/grass.jpg', 'trust/severstal.jpg', 'trust/vnm.jpg'
    ] 

}
</script>

<style>

</style>