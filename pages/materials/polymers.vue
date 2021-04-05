<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">
          {{ $t("Поддерживаемые полимерные материалы") }}
        </h1>
      </v-col>
      <v-col cols="12" lg="10">
        <materialsSheet />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import materialsSheet from '~/components/materialsSheet.vue'
import PrintingParameters from '~/components/PrintingParameters.vue'

@Component({
  components: {
    materialsSheet,
    PrintingParameters
  },
  head: {
    title: 'Используемые полимерные материалы'
  }
})
export default class Polymers extends Vue {

}

</script>

<style>
</style>