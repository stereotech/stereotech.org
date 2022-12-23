<template>
  <v-container fluid>
    <v-row justify="center" v-if="this.loadedPage == false">
      <v-col cols="12" lg="10">
        <v-skeleton-loader
          type="image"
          :tile=true
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" lg="10">
        <v-skeleton-loader
          type="table"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" lg="9">
        <v-row>
          <v-col 
            cols="12"
            lg="4"
            md="4"
            sm="4"
            v-for="n in 3"
            :key="n"
          >
            <v-skeleton-loader
              type="image@2"
              :tile=true
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>  
    </v-row>
    <v-row justify="center" v-if="this.loadedPage == true">
      <v-col
        cols="12"
        lg="10"
        v-for="material in materials"
        :key="material._id"
      >
        <MaterialCard :material="material" />
      </v-col>
      <v-col cols="12" lg="10">
        <MaterialsTable
          title="Характеристики материалов"
          :materials="materials"
          :specs="specs"
        />
      </v-col>
      <v-col cols="12" lg="10">
        <PrintingParameters :parameters="printParameters" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MaterialsTable from '~/components/MaterialsTable.vue'
import PrintingParameters from '~/components/PrintingParameters.vue'
import MaterialCard from '~/components/materials/MaterialCard.vue'
import { MaterialSpec } from '~/types/materials'
import { namespace } from 'vuex-class'

const materials = namespace('materials')
const printParameters = namespace('printParameters')

@Component({
  components: {
    MaterialsTable,
    PrintingParameters,
    MaterialCard
  }
})
export default class EnduseFilament extends Vue {

  loadedPage: boolean = false

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

  get printParameters () {
    return this.printParametersBySku('5DTEU')
  }

  async mounted () {
    if (!this.filled) {
      await this.loadMaterialsData()
    }
    if (!this.loaded) {
      await this.loadPrintParameters()
    }
    this.loadedPage = true
  }
}

</script>

<style>
</style>