<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title>Запрос предложения (форма для запроса)</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>Список дилеров</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>Предложение для дилеров (форма для предложения)</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Resellers extends Vue {

}

</script>

<style>
</style>