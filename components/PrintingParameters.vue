<template>
  <v-container fluid>
      <v-data-iterator>
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
                        <v-card-title></v-card-title>
                        <v-divider></v-divider>
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
    @Prop({})

}
</script>

<style>

</style>