<template>
  <v-card>
    <v-card-title
      >{{ title }}

      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-data-table
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
import { Material, MaterialSpec, MaterialSpecValue } from '~/types/materials.ts'

@Component
export default class MaterialsTable extends Vue {
  @Prop({ type: String, default: 'Title' }) title!: string
  @Prop({ type: Array, default: () => { return [] } }) materialSpecValues!: MaterialSpecValue[]

  get tableHeaders (): {
    text: string,
    value: string
  }[] {
    let headers: {
      text: string,
      value: string
    }[] = [
        {
          text: 'Артикул',
          value: 'sku'
        },
        {
          text: 'Наименование',
          value: 'name'
        },
        {
          text: 'Полимерная основа',
          value: 'polymer'
        },
        {
          text: 'Описание',
          value: 'description'
        }
      ]
    this.techSpecs.forEach(s => {
      headers.push({
        text: `${s.name}, ${s.unit}`,
        value: s._id
      })
    })
    return headers
  }
  private search: string = ""

  get tableData (): any {
    let data = []
    this.materials.forEach(m => {
      let item: any = m

    })
    return data
  }

  get materials (): Material[] {
    let materials: Material[] = []
    this.materialSpecValues.forEach(v => {
      if (!materials.includes(v.material)) {
        materials.push(v.material)
      }
    })
    return materials
  }

  get techSpecs (): MaterialSpec[] {
    let specs: MaterialSpec[] = []
    this.materialSpecValues.forEach(v => {
      if (!specs.includes(v.spec)) {
        specs.push(v.spec)
      }
    })
    console.log(specs)
    return specs
  }

}

</script>

<style>
</style>