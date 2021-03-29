<template>
  <v-container fluid>
      <v-data-iterator
        :items="parameters"
        :items-per-page="3"
      >
          <template v-slot:default="props">
              <v-row>
                  <v-col v-for="item in props.items"
                    :key="item.name"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                  >
                    <v-card>
                        <v-card-title>
                          <h4>{{ item.name }}</h4>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-list dense>
                          <v-list-item>
                            <v-list-item-content>Printing Temperature:</v-list-item-content>
                            <v-list-item-content class="align-end">
                              {{item.printTemperature}}
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>3D Temperature:</v-list-item-content>
                            <v-list-item-content class="align-end">
                              {{item.threeDTemperature}}
                            </v-list-item-content>                            
                          </v-list-item>
                        </v-list>
                    </v-card>
                  </v-col>
              </v-row>
          </template>
      </v-data-iterator>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PrintingParameters extends Vue{
    @Prop({type: Array, default: () => { return [] } }) parameters!: any[]

}
</script>

<style>

</style>