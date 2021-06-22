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

  private datamap = new Map()
  private tableHeaders: any[] = [{ text: 'характеристика', value: 'spec' }]
  private tableData: any[] = []

  private get getTableHeaders () {
    this.specXd.forEach(s => {
      this.tableHeaders.push({ text: s.model, value: s.model })
      let smodel = s.model
      s.specs.forEach(el => {
        let dataobject = this.datamap.get(el.value.key)
        if (dataobject === undefined) {
          this.datamap.set(el.value.key, {})
          dataobject = this.datamap.get(el.value.key)
        }

        dataobject[smodel] = el.value.value

      });
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
