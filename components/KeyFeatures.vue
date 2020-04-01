<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h3 class="title font-weight-light">{{ title }}</h3>
        </v-col>
        <v-col cols="12" sm="10" lg="8">
          <v-tabs centered v-model="tab">
            <v-tab v-for="(item, index) in items" :key="index">{{item.name}}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="(item, index) in items" :key="index">
              <v-container fluid>
                <v-row justify="center" align="center">
                  <v-col cols="12" sm="6">
                    <v-img :src="item.image" />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <h3>{{ item.name }}</h3>
                    <br />
                    <p>{{ item.description }}</p>
                    <p v-for="(key,index) in item.keys" :key="index">
                      <v-icon color="primary">mdi-chevron-right</v-icon>
                      {{ key }}
                    </p>
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
import { KeyFeature } from '~/types/keyFeature'

@Component
export default class KeyFeatures extends Vue {
  @Prop({ type: String, default: 'Title' }) title!: string
  @Prop({ type: Array, default: () => { return [] } }) items!: KeyFeature[]

  tab: any = null
}

</script>

<style>
</style>