<template>
  <v-flex xs12>
    <v-card>
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-data-table :items="items" :headers="headers" hide-actions item-key="id">
              <template slot="headerCell" slot-scope="props">
                <h6
                  class="subheading text-uppercase font-weight-light text-xs-center"
                >{{ props.header.text }}</h6>
              </template>
              <template v-slot:items="props">
                <td
                  class="subheading text-uppercase font-weight-light text-xs-center"
                >{{ $t(props.item.title) }}</td>
                <td class="subheading text-xs-center">{{ $t(props.item.ste520) }}</td>
                <td class="subheading text-xs-center">{{ $t(props.item.ste320) }}</td>
              </template>
              <template slot="footer">
                <td></td>
                <td class="text-xs-center">
                  <v-btn color="primary" nuxt to="/ste520">{{ $t('know-more') }}</v-btn>
                  <v-btn
                    color="success"
                    href="https://ste3d.ru/ste520"
                    target="_blank"
                  >{{ $t('printer.ste520.state') }}</v-btn>
                </td>
                <td class="text-xs-center">
                  <v-btn color="primary" nuxt to="/ste320">{{ $t('know-more') }}</v-btn>
                  <v-btn
                    color="success"
                    href="https://ste3d.ru/ste320"
                    target="_blank"
                  >{{ $t('printer.ste320.state') }}</v-btn>
                </td>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

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
      align: 'center',
    },
    {
      text: 'STE 520',
      sortable: false,
      value: 'ste520',
      align: 'center',
    },
    {
      text: 'STE 320',
      sortable: false,
      value: 'ste320',
      align: 'center',
    },
  ]

  private items: any[] = [
    {
      id: 1,
      title: 'summary',
      ste520: 'printer.ste520.description',
      ste320: 'printer.ste320.description'
    },
    {
      id: 2,
      title: 'printer.ste520.spec.technology.key',
      ste520: 'printer.ste520.spec.technology.value',
      ste320: 'printer.ste320.spec.technology.value',
    },
    {
      id: 3,
      title: 'printer.ste520.spec.printhead.key',
      ste520: 'printer.ste520.spec.printhead.value',
      ste320: 'printer.ste320.spec.printhead.value',
    },
    {
      id: 4,
      title: 'printer.ste520.spec.size.key',
      ste520: 'printer.ste520.spec.size.value',
      ste320: 'printer.ste320.spec.size.value',
    }, {
      id: 5,
      title: 'printer.ste520.spec.resolution.key',
      ste520: 'printer.ste520.spec.resolution.value',
      ste320: 'printer.ste320.spec.resolution.value',
    }, {
      id: 6,
      title: 'printer.ste520.spec.materials.key',
      ste520: 'printer.ste520.spec.materials.value',
      ste320: 'printer.ste320.spec.materials.value',
    },
    {
      id: 7,
      title: 'printer.ste520.spec.diameter.key',
      ste520: 'printer.ste520.spec.diameter.value',
      ste320: 'printer.ste320.spec.diameter.value',
    },
    {
      id: 8,
      title: 'printer.ste520.spec.nozzle.key',
      ste520: 'printer.ste520.spec.nozzle.value',
      ste320: 'printer.ste320.spec.nozzle.value',
    }, {
      id: 9,
      title: 'printer.ste520.spec.temperature.key',
      ste520: 'printer.ste520.spec.temperature.value',
      ste320: 'printer.ste320.spec.temperature.value',
    }, {
      id: 10,
      title: 'printer.ste520.spec.buildplate.key',
      ste520: 'printer.ste520.spec.buildplate.value',
      ste320: 'printer.ste320.spec.buildplate.value',
    }, {
      id: 11,
      title: 'printer.ste520.spec.connectivity.key',
      ste520: 'printer.ste520.spec.connectivity.value',
      ste320: 'printer.ste320.spec.connectivity.value',
    },
    {
      id: 12,
      title: 'printer.ste520.spec.power.key',
      ste520: 'printer.ste520.spec.power.value',
      ste320: 'printer.ste320.spec.power.value',
    },
    {
      id: 13,
      title: 'printer.ste520.spec.ambient.key',
      ste520: 'printer.ste520.spec.ambient.value',
      ste320: 'printer.ste320.spec.ambient.value',
    },
    {
      id: 14,
      title: 'printer.ste520.spec.software.key',
      ste520: 'printer.ste520.spec.software.value',
      ste320: 'printer.ste320.spec.software.value',
    },
    {
      id: 15,
      title: 'printer.ste520.spec.filetypes.key',
      ste520: 'printer.ste520.spec.filetypes.value',
      ste320: 'printer.ste320.spec.filetypes.value',
    }
  ]
}

</script>

<style>
</style>