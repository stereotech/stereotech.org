<template>
  <v-card>
    <v-card-title>
      <v-row justify="center">
        <v-col cols="12" sm="4">
          {{ title }}
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-btn color="primary" depressed outlined block @click="exportToExel">
            <v-icon>mdi-download</v-icon>
            {{ $t("Выгрузить в xlsx") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-data-table
        id="out-table"
        :headers="tableHeaders"
        :items="tableData"
        :dense="true"
        :search="search"
        :mobile-breakpoint="0"
        fixed-header
      ></v-data-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Material, MaterialSpec } from '~/types/materials'
import * as XLSX from 'xlsx'


@Component
export default class MaterialsTable extends Vue {

  @Prop({ type: String, default: 'Title' }) title!: string
  @Prop({ type: Array, default: () => { return [] } }) materials!: Material[]
  @Prop({ type: Array, default: () => { return [] } }) specs!: MaterialSpec[]


  get tableHeaders (): {
    text: string,
    value: string,
    width: string
  }[] {
    let headers: {
      text: string,
      value: string,
      width: string
    }[] = [
        {
          text: 'Артикул',
          value: 'sku',
          width: ''
        },
        {
          text: 'Наименование',
          value: 'name',
          width: ''
        },
        {
          text: 'Полимерная основа',
          value: 'polymer',
          width: ''
        }
      ]
    this.specs.forEach(s => {
      if (s.name == 'Состав') {
        headers.push({
          text: `${s.name}, ${s.unit}`,
          value: s._id,
          width: '200px'
        })
      }
      else {
        headers.push({
          text: `${s.name}, ${s.unit}`,
          value: s._id,
          width: ''
        })
      }
    })
    return headers
  }
  search: string = ""

  get tableData (): any {
    let data: any[] = []
    data = this.materials

    data.map(m => {
      let item: any = m
      if (m.tech_specs) {
        m.tech_specs.forEach(s => {
          if (s.specs_description) {
            item[s.specs_description.id || ''] = s.specs_value
          }
        })
      }
      return item
    })

    return data
  }

  exportToExel () {
    var wb = XLSX.utils.table_to_book(document.getElementById('out-table'))
    XLSX.writeFile(wb, 'materials.xlsx')
  }

}

</script>

<style>
</style>