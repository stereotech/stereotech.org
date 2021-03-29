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
        <v-col cols="12" lg="10">
          <PrintingParameters
            :parameters="printParameters"
          />
        </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MaterialsTable from '~/components/MaterialsTable.vue'
import PrintingParameters from '~/components/PrintingParameters.vue'
import { Material, MaterialSpec } from '~/types/materials'
import { namespace } from 'vuex-class'

const materials = namespace('materials')
const printParameters = namespace('printParameters')

@Component({
  components: {
    MaterialsTable,
    PrintingParameters
  }
})
export default class EnduseFilament extends Vue {
  @materials.State filled!: boolean
  @materials.Action loadMaterialsData!: any

  @materials.Getter ourBrandMaterialsBySku!: any
  @materials.Getter specs!: MaterialSpec[]

  @printParameters.State loaded!: boolean
  @printParameters.Action loadPrintParameters!: any

  @printParameters.Getter printParametersBySku!: any

  get materials () {
    return this.ourBrandMaterialsBySku('5DTEU')
  }

  get printParameters(){
    return this.printParametersBySku('5DTEU')
  }

  async mounted () {
    if (!this.filled) {
      await this.loadMaterialsData()
    }
    if(!this.loaded){
      await this.loadPrintParameters()
    }
  }
}

</script>

<style>
</style>