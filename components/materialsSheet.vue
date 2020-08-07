<template>
  <v-card>
    <v-card-title>
      {{$t('Поддерживаемые материалы для печати')}}
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

const url = 'https://sheets.googleapis.com/v4/spreadsheets/193OD4gfKmgB075IwWqACr3k-mySEYqLAcYvsU4a-JTQ/values/sheet!A1:W?key=AIzaSyAk0QMdjpuVyOKJsvp1vC1wqHJM9J7C48M'

@Component
export default class materialsSheet extends Vue {

  private tableData: any[] = []
  private tableHeaders: any[] = []
  private search: string = ""
  private async getSheetData () {

    var removes: number[] = []
    const response = await fetch(url)

    const rows: string[][] = (await response.json()).values
    console.log(rows.length)
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
    //console.log(this.tableHeaders)
    this.tableData = newRows.map(r => {
      const entries = new Map(r.map((v, index) => {
        return [this.tableHeaders[index].value, v]
      }))
      const item = Object.fromEntries(entries)
      return item
    })
    //console.log(this.tableData)

  }

  async mounted () {
    await this.getSheetData()
  }
}
</script>

<style>
</style>