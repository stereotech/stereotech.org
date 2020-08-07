<template>
  <v-card>
      <v-data-table :headers="tableHeaders" :items="tableData">

      </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const url = 'https://sheets.googleapis.com/v4/spreadsheets/***REMOVED***/values/sheet!A1:W?key=***REMOVED***'

@Component
export default class materialsSheet extends Vue{

private tableData: any[] = []
private tableHeaders: any[] = []

private async getSheetData(){
    const response = await fetch(url)
    
    const rows: string[][] = (await response.json()).values
    
    const headers = rows.shift()
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
    console.log(this.tableHeaders)
    this.tableData = rows.map(r => {
        const entries = new Map(r.map((v, index) => {
            return [this.tableHeaders[index].value, v]
        }))
        const item = Object.fromEntries(entries)
        return item
    })
    console.log(this.tableData)

}

async mounted(){
    await this.getSheetData()
}
}
</script>

<style>

</style>