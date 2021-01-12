<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <MaterialsTable
          title="Характеристики материалов"
          :materials="materials"
          :specs="specs"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MaterialsTable from '~/components/MaterialsTable.vue'
import { Material, MaterialSpec } from '~/types/materials'
import { namespace } from 'vuex-class'

const materials = namespace('materials')

@Component({
  components: {
    MaterialsTable
  }
})
export default class SealantFilament extends Vue {
  @materials.State filled!: boolean
  @materials.Action loadMaterialsData!: any

  @materials.Getter ourBrandMaterialsBySku!: any
  @materials.Getter specs!: MaterialSpec[]

  get materials () {
    return this.ourBrandMaterialsBySku('5DTSL')
  }

  async mounted () {
    if (!this.filled) {
      await this.loadMaterialsData()
    }
  }
}

</script>

<style>
</style>