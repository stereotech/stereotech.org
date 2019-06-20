<template>
  <v-flex xs12>
    <v-card>
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <h4
              class="headline text-uppercase font-weight-regular text-xs-center"
            >{{ $t('full-specs') }}</h4>
          </v-flex>
          <v-flex xs12>
            <v-data-table :items="items" :headers="headers" hide-actions item-key="id" hide-headers>
              <template v-slot:items="props">
                <td
                  class="subheading text-uppercase font-weight-light text-xs-center"
                >{{ $t(props.item.title) }}</td>
                <td class="subheading text-xs-center">{{ $t(props.item.value) }}</td>
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
export default class FullSpecs extends Vue {
  @Prop({ type: String, required: true, default: '' }) model!: string

  private headers: any[] = [
    {
      text: 'Spec',
      sortable: false,
      value: 'title',
      align: 'center',
    },
    {
      text: 'Value',
      sortable: false,
      value: 'value'
    },
  ]

  private items: any[] = [
    {
      id: 1,
      title: 'summary',
      value: `printer.${this.model}.description`
    },
    {
      id: 2,
      title: `printer.${this.model}.spec.technology.key`,
      value: `printer.${this.model}.spec.technology.value`
    },
    {
      id: 3,
      title: `printer.${this.model}.spec.printhead.key`,
      value: `printer.${this.model}.spec.printhead.value`
    },
    {
      id: 4,
      title: `printer.${this.model}.spec.size.key`,
      value: `printer.${this.model}.spec.size.value`
    }, {
      id: 5,
      title: `printer.${this.model}.spec.resolution.key`,
      value: `printer.${this.model}.spec.resolution.value`
    }, {
      id: 6,
      title: `printer.${this.model}.spec.materials.key`,
      value: `printer.${this.model}.spec.materials.value`
    },
    {
      id: 7,
      title: `printer.${this.model}.spec.diameter.key`,
      value: `printer.${this.model}.spec.diameter.value`
    },
    {
      id: 8,
      title: `printer.${this.model}.spec.nozzle.key`,
      value: `printer.${this.model}.spec.nozzle.value`
    }, {
      id: 9,
      title: `printer.${this.model}.spec.temperature.key`,
      value: `printer.${this.model}.spec.temperature.value`
    }, {
      id: 10,
      title: `printer.${this.model}.spec.buildplate.key`,
      value: `printer.${this.model}.spec.buildplate.value`
    }, {
      id: 11,
      title: `printer.${this.model}.spec.connectivity.key`,
      value: `printer.${this.model}.spec.connectivity.value`
    },
    {
      id: 12,
      title: `printer.${this.model}.spec.power.key`,
      value: `printer.${this.model}.spec.power.value`
    },
    {
      id: 13,
      title: `printer.${this.model}.spec.ambient.key`,
      value: `printer.${this.model}.spec.ambient.value`
    },
    {
      id: 14,
      title: `printer.${this.model}.spec.software.key`,
      value: `printer.${this.model}.spec.software.value`
    },
    {
      id: 15,
      title: `printer.${this.model}.spec.filetypes.key`,
      value: `printer.${this.model}.spec.filetypes.value`
    }
  ]
}

</script>

<style>
</style>