<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h1 class="title font-weight-light">{{ title }}</h1>
        </v-col>
        <v-col cols="12">
          <v-tabs centered center-active show-arrows v-model="tab">
            <v-tabs-slider></v-tabs-slider>
            <v-tab v-for="(item, index) in items" :key="index">{{
              item.title
            }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="(item, index) in items" :key="index">
              <v-container fluid>
                <v-row justify="center">
                  <v-col cols="12" sm="6" lg="4">
                    <v-img :src="item.mediasource[0].permalink" />
                  </v-col>
                  <v-col cols="12" sm="6" lg="4">
                    <h3 class="font-weight-light">{{ item.title }}</h3>
                    <br />
                    <p>{{ item.description }}</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class KeyFeatures extends Vue {

  @Prop({ type: String, default: 'Title' }) title!: string
  @Prop({ type: Array, default: () => { return [] } }) items!: any[]
  tab: any = null

}

</script>

<style>
</style>