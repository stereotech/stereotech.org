<template>
  <v-col cols="12">
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-data-table :items="items" :headers="headers" hide-default-footer item-key="id">
              <template v-slot:item="{item}">
                <tr>
                  <td
                    class="subheading text-uppercase font-weight-light text-center"
                  >{{ item.title }}</td>
                  <td class="subheading text-center">{{ item.ste520 }}</td>
                  <td class="subheading text-center">{{ item.ste320 }}</td>
                </tr>
              </template>
              <template v-slot:footer>
                <v-container>
                  <v-row>
                    <v-col offset-sm="4" cols="4">
                      <v-btn color="primary" nuxt to="/ste520">{{ $store.state.lang.know_more }}</v-btn>
                      <v-btn
                        color="success"
                        href="https://ste3d.ru/ste520"
                        target="_blank"
                      >{{ $store.state.lang.printer.ste520.state }}</v-btn>
                    </v-col>
                    <v-col cols="4">
                      <v-btn color="primary" nuxt to="/ste320">{{ $store.state.lang.know_more }}</v-btn>
                      <v-btn
                        color="success"
                        href="https://ste3d.ru/ste320"
                        target="_blank"
                      >{{ $store.state.lang.printer.ste320.state }}</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class CompareSpecs extends Vue {
  private headers: any[] = [
    {
      text: '',
      sortable: false,
      value: 'title',
      align: 'center'
    },
    {
      text: 'STE 520',
      sortable: false,
      value: 'ste520',
      align: 'center'
    },
    {
      text: 'STE 320',
      sortable: false,
      value: 'ste320',
      align: 'center'
    }
  ]

  private items: any[] = [
    {
      id: 1,
      title: this.$store.state.lang.summary,
      ste520: this.$store.state.lang.printer.ste520.description,
      ste320: this.$store.state.lang.printer.ste320.description
    },
    {
      id: 2,
      title: this.$store.state.lang.printer.ste520.spec.technology.key,
      ste520: this.$store.state.lang.printer.ste520.spec.technology.value,
      ste320: this.$store.state.lang.printer.ste320.spec.technology.value
    },
    {
      id: 3,
      title: this.$store.state.lang.printer.ste520.spec.printhead.key,
      ste520: this.$store.state.lang.printer.ste520.spec.printhead.value,
      ste320: this.$store.state.lang.printer.ste320.spec.printhead.value
    },
    {
      id: 4,
      title: this.$store.state.lang.printer.ste520.spec.size.key,
      ste520: this.$store.state.lang.printer.ste520.spec.size.value,
      ste320: this.$store.state.lang.printer.ste320.spec.size.value
    },
    {
      id: 5,
      title: this.$store.state.lang.printer.ste520.spec.volume.key,
      ste520: this.$store.state.lang.printer.ste520.spec.volume.value,
      ste320: this.$store.state.lang.printer.ste320.spec.volume.value
    },
    {
      id: 6,
      title: this.$store.state.lang.printer.ste520.spec.resolution.key,
      ste520: this.$store.state.lang.printer.ste520.spec.resolution.value,
      ste320: this.$store.state.lang.printer.ste320.spec.resolution.value
    }, {
      id: 7,
      title: this.$store.state.lang.printer.ste520.spec.materials.key,
      ste520: this.$store.state.lang.printer.ste520.spec.materials.value,
      ste320: this.$store.state.lang.printer.ste320.spec.materials.value
    },
    {
      id: 8,
      title: this.$store.state.lang.printer.ste520.spec.diameter.key,
      ste520: this.$store.state.lang.printer.ste520.spec.diameter.value,
      ste320: this.$store.state.lang.printer.ste320.spec.diameter.value
    },
    {
      id: 9,
      title: this.$store.state.lang.printer.ste520.spec.nozzle.key,
      ste520: this.$store.state.lang.printer.ste520.spec.nozzle.value,
      ste320: this.$store.state.lang.printer.ste320.spec.nozzle.value
    }, {
      id: 10,
      title: this.$store.state.lang.printer.ste520.spec.temperature.key,
      ste520: this.$store.state.lang.printer.ste520.spec.temperature.value,
      ste320: this.$store.state.lang.printer.ste320.spec.temperature.value
    }, {
      id: 11,
      title: this.$store.state.lang.printer.ste520.spec.buildplate.key,
      ste520: this.$store.state.lang.printer.ste520.spec.buildplate.value,
      ste320: this.$store.state.lang.printer.ste320.spec.buildplate.value
    }, {
      id: 12,
      title: this.$store.state.lang.printer.ste520.spec.connectivity.key,
      ste520: this.$store.state.lang.printer.ste520.spec.connectivity.value,
      ste320: this.$store.state.lang.printer.ste320.spec.connectivity.value
    },
    {
      id: 13,
      title: this.$store.state.lang.printer.ste520.spec.power.key,
      ste520: this.$store.state.lang.printer.ste520.spec.power.value,
      ste320: this.$store.state.lang.printer.ste320.spec.power.value
    },
    {
      id: 14,
      title: this.$store.state.lang.printer.ste520.spec.ambient.key,
      ste520: this.$store.state.lang.printer.ste520.spec.ambient.value,
      ste320: this.$store.state.lang.printer.ste320.spec.ambient.value
    },
    {
      id: 15,
      title: this.$store.state.lang.printer.ste520.spec.software.key,
      ste520: this.$store.state.lang.printer.ste520.spec.software.value,
      ste320: this.$store.state.lang.printer.ste320.spec.software.value
    },
    {
      id: 16,
      title: this.$store.state.lang.printer.ste520.spec.filetypes.key,
      ste520: this.$store.state.lang.printer.ste520.spec.filetypes.value,
      ste320: this.$store.state.lang.printer.ste320.spec.filetypes.value
    }

  ]
}

</script>

<style>
</style>
