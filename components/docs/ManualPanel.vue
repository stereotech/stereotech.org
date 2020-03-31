<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-row justify="center">
          <v-col v-for="(manual, index) in manuals" :key="index" cols="12" sm="6" md="3">
            <v-card hover ripple nuxt :to="manual.link">
              <v-img
                :src="manual.image"
                gradient="to top, rgba(100,115,201,.0), rgba(38, 50, 56, 1)"
              >
                <v-container fluid>
                  <v-row dense>
                    <v-col class="align-end flexbox" cols="12">
                      <span class="white--text title font-weight-light">{{ manual.name }}</span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Manual } from '~/types/manual'

@Component
export default class ManualPanel extends Vue {
  @Prop({ type: String, default: '' }) title!: string
  @Prop({ type: Array, default: () => { return [] } }) manuals!: Manual[]
}

</script>

<style>
</style>