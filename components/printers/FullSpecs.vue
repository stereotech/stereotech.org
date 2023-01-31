<template>
  <v-card>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h4 class="headline text-uppercase font-weight-regular text-center">
            {{ $t("Характеристики") }}
          </h4>
        </v-col>
        <v-col cols="12">
          <v-data-table
            :headers="getTableHeaders"
            :items="tableData"
            :items-per-page="100"
          >
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'


@Component({
  components: {
  }
})
export default class FullSpecs extends Vue {
  @Prop({ type: Array, required: true, default: () => { return [] } }) specXd!: any[]
  @Prop({ type: String, required: true, default: '' }) model!: string

  private datamap = new Map()
  private tableHeaders: any[] = [{ text: 'характеристика', value: 'spec' }]
  tableData: any[] = []

  get getTableHeaders () {
    this.tableHeaders.push({ text: this.model, value: this.model })
    let smodel = this.model
    this.specXd.forEach(el => {
      let dataobject = this.datamap.get(el.keySpec)
      if (dataobject === undefined) {
        this.datamap.set(el.keySpec, {})
        dataobject = this.datamap.get(el.keySpec)
      }

      dataobject[smodel] = el.valueSpec
    });
    this.getData()
    return this.tableHeaders
  }
  private getData () {

    this.datamap.forEach((v, k) => {
      this.tableData.push(Object.assign({ spec: k }, v))
    });
    return this.tableData
  }


  async mounted () {
  }

}

</script>

<style>
</style>
