<template>
  <v-card>
    <v-card-title>
      {{ $t("Поддерживаемые материалы для печати") }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="tableHeaders"
      :items="tableData"
      :dense="true"
      :search="search"
      :mobile-breakpoint="0"
      fixed-header
    ></v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'



const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.MATERIAL_TABLE_ID}/values/sheet!A1:W?key=${process.env.MATERIAL_TABLE_KEY}`

@Component
export default class materialsSheet extends Vue {

  private tableData: any[] = []
  private tableHeaders: any[] = []
  private search: string = ""
  private async getSheetData () {

    var removes: number[] = []
    const response = await fetch(url)

    const rows: string[][] = (await response.json()).values
    for (var i = 1; i < rows[0].length; i++) {
      let dashCounter: number = 0
      for (let j = 0; j < rows.length; j++) {
        if (rows[j][i] === '-') {
          dashCounter++
        }
      }
      if (dashCounter >= 15) {
        removes.push(i)
      }
    }
    var newRows = rows.map(function (val, ind) {
      return val.filter(function (val, ind) { return !removes.includes(ind); });
    });
    const headers = newRows.shift()
    if (headers) {
      this.tableHeaders = headers.map(h => {
        return {
          text: h,
          value: h
        }
      })
    } else {
      this.tableHeaders = []
    }

    this.tableData = newRows.map(r => {
      const entries = new Map(r.map((v, index) => {
        return [this.tableHeaders[index].value, v]
      }))
      const item = Object.fromEntries(entries)
      return item
    })


  }

  async mounted () {
    await this.getSheetData()
  }
}
</script>

<style>
</style>