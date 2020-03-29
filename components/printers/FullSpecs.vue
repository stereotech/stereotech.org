<template>
  <v-col cols="12">
    <v-card>
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <h4
              class="headline text-uppercase font-weight-regular text-center"
            >{{ $store.state.lang.full_specs }}</h4>
          </v-col>
          <v-col cols="4" v-if="$apollo.loading">
            <v-progress-linear indeterminate></v-progress-linear>
          </v-col>
          <template v-else-if="printerSpecs">
            <v-col
              cols="12"
              v-for="attributeGroup in printerSpecs.attributes"
              :key="attributeGroup.attribute_group_id"
            >
              <v-data-table
                :items="attributeGroup.attribute"
                :headers="headers"
                hide-default-footer
                item-key="attribute_id"
                hide-default-header
                :items-per-page="99"
              >
                <template v-slot:header>{{ attributeGroup.name }}</template>
                <template v-slot:item="{item}">
                  <tr>
                    <td
                      class="subheading text-uppercase font-weight-light text-center"
                    >{{ item.name }}</td>
                    <td class="subheading text-center">{{ item.text }}</td>
                  </tr>
                </template>
              </v-data-table>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import gql from 'graphql-tag'

@Component({
  components: {
  }
})
export default class FullSpecs extends Vue {
  @Prop({ type: String, required: true, default: '' }) model!: string

  get idFromModel (): string {
    if (this.model == 'ste320') {
      return '677'
    }
    if (this.model == 'ste520') {
      return '676'
    }
    return '677'
  }

  private headers: any[] = [
    {
      text: '',
      sortable: false,
      value: 'name',
      align: 'center'
    },
    {
      text: '',
      sortable: false,
      value: 'text'
    }
  ]

  get getItems (): any[] {
    if (this.model === 'ste320') {
      return [
        {
          id: 1,
          title: this.$store.state.lang.summary,
          value: this.$store.state.lang.printer.ste320.description
        },
        {
          id: 2,
          title: this.$store.state.lang.printer.ste320.spec.technology.key,
          value: this.$store.state.lang.printer.ste320.spec.technology.value
        },
        {
          id: 3,
          title: this.$store.state.lang.printer.ste320.spec.printhead.key,
          value: this.$store.state.lang.printer.ste320.spec.printhead.value
        },
        {
          id: 4,
          title: this.$store.state.lang.printer.ste320.spec.size.key,
          value: this.$store.state.lang.printer.ste320.spec.size.value
        },
        {
          id: 5,
          title: this.$store.state.lang.printer.ste320.spec.volume.key,
          value: this.$store.state.lang.printer.ste320.spec.volume.value
        },
        {
          id: 6,
          title: this.$store.state.lang.printer.ste320.spec.resolution.key,
          value: this.$store.state.lang.printer.ste320.spec.resolution.value
        }, {
          id: 7,
          title: this.$store.state.lang.printer.ste320.spec.materials.key,
          value: this.$store.state.lang.printer.ste320.spec.materials.value
        },
        {
          id: 8,
          title: this.$store.state.lang.printer.ste320.spec.diameter.key,
          value: this.$store.state.lang.printer.ste320.spec.diameter.value
        },
        {
          id: 9,
          title: this.$store.state.lang.printer.ste320.spec.nozzle.key,
          value: this.$store.state.lang.printer.ste320.spec.nozzle.value
        }, {
          id: 10,
          title: this.$store.state.lang.printer.ste320.spec.temperature.key,
          value: this.$store.state.lang.printer.ste320.spec.temperature.value
        }, {
          id: 11,
          title: this.$store.state.lang.printer.ste320.spec.buildplate.key,
          value: this.$store.state.lang.printer.ste320.spec.buildplate.value
        }, {
          id: 12,
          title: this.$store.state.lang.printer.ste320.spec.connectivity.key,
          value: this.$store.state.lang.printer.ste320.spec.connectivity.value
        },
        {
          id: 13,
          title: this.$store.state.lang.printer.ste320.spec.power.key,
          value: this.$store.state.lang.printer.ste320.spec.power.value
        },
        {
          id: 14,
          title: this.$store.state.lang.printer.ste320.spec.ambient.key,
          value: this.$store.state.lang.printer.ste320.spec.ambient.value
        },
        {
          id: 15,
          title: this.$store.state.lang.printer.ste320.spec.software.key,
          value: this.$store.state.lang.printer.ste320.spec.software.value
        },
        {
          id: 16,
          title: this.$store.state.lang.printer.ste320.spec.filetypes.key,
          value: this.$store.state.lang.printer.ste320.spec.filetypes.value
        }
      ]
    } else if (this.model === 'ste520') {
      return [
        {
          id: 1,
          title: this.$store.state.lang.summary,
          value: this.$store.state.lang.printer.ste520.description
        },
        {
          id: 2,
          title: this.$store.state.lang.printer.ste520.spec.technology.key,
          value: this.$store.state.lang.printer.ste520.spec.technology.value
        },
        {
          id: 3,
          title: this.$store.state.lang.printer.ste520.spec.printhead.key,
          value: this.$store.state.lang.printer.ste520.spec.printhead.value
        },
        {
          id: 4,
          title: this.$store.state.lang.printer.ste520.spec.size.key,
          value: this.$store.state.lang.printer.ste520.spec.size.value
        },
        {
          id: 5,
          title: this.$store.state.lang.printer.ste520.spec.volume.key,
          value: this.$store.state.lang.printer.ste520.spec.volume.value
        },
        {
          id: 6,
          title: this.$store.state.lang.printer.ste520.spec.resolution.key,
          value: this.$store.state.lang.printer.ste520.spec.resolution.value
        }, {
          id: 7,
          title: this.$store.state.lang.printer.ste520.spec.materials.key,
          value: this.$store.state.lang.printer.ste520.spec.materials.value
        },
        {
          id: 8,
          title: this.$store.state.lang.printer.ste520.spec.diameter.key,
          value: this.$store.state.lang.printer.ste520.spec.diameter.value
        },
        {
          id: 9,
          title: this.$store.state.lang.printer.ste520.spec.nozzle.key,
          value: this.$store.state.lang.printer.ste520.spec.nozzle.value
        }, {
          id: 10,
          title: this.$store.state.lang.printer.ste520.spec.temperature.key,
          value: this.$store.state.lang.printer.ste520.spec.temperature.value
        }, {
          id: 11,
          title: this.$store.state.lang.printer.ste520.spec.buildplate.key,
          value: this.$store.state.lang.printer.ste520.spec.buildplate.value
        }, {
          id: 12,
          title: this.$store.state.lang.printer.ste520.spec.connectivity.key,
          value: this.$store.state.lang.printer.ste520.spec.connectivity.value
        },
        {
          id: 13,
          title: this.$store.state.lang.printer.ste520.spec.power.key,
          value: this.$store.state.lang.printer.ste520.spec.power.value
        },
        {
          id: 14,
          title: this.$store.state.lang.printer.ste520.spec.ambient.key,
          value: this.$store.state.lang.printer.ste520.spec.ambient.value
        },
        {
          id: 15,
          title: this.$store.state.lang.printer.ste520.spec.software.key,
          value: this.$store.state.lang.printer.ste520.spec.software.value
        },
        {
          id: 16,
          title: this.$store.state.lang.printer.ste520.spec.filetypes.key,
          value: this.$store.state.lang.printer.ste520.spec.filetypes.value
        }
      ]
    }
    return []
  }

  private items: any[] = [
    {
      id: 1,
      title: this.$store.state.lang.summary,
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
    },
    {
      id: 5,
      title: `printer.${this.model}.spec.volume.key`,
      value: `printer.${this.model}.spec.volume.value`
    },
    {
      id: 6,
      title: `printer.${this.model}.spec.resolution.key`,
      value: `printer.${this.model}.spec.resolution.value`
    }, {
      id: 7,
      title: `printer.${this.model}.spec.materials.key`,
      value: `printer.${this.model}.spec.materials.value`
    },
    {
      id: 8,
      title: `printer.${this.model}.spec.diameter.key`,
      value: `printer.${this.model}.spec.diameter.value`
    },
    {
      id: 9,
      title: `printer.${this.model}.spec.nozzle.key`,
      value: `printer.${this.model}.spec.nozzle.value`
    }, {
      id: 10,
      title: `printer.${this.model}.spec.temperature.key`,
      value: `printer.${this.model}.spec.temperature.value`
    }, {
      id: 11,
      title: `printer.${this.model}.spec.buildplate.key`,
      value: `printer.${this.model}.spec.buildplate.value`
    }, {
      id: 12,
      title: `printer.${this.model}.spec.connectivity.key`,
      value: `printer.${this.model}.spec.connectivity.value`
    },
    {
      id: 13,
      title: `printer.${this.model}.spec.power.key`,
      value: `printer.${this.model}.spec.power.value`
    },
    {
      id: 14,
      title: `printer.${this.model}.spec.ambient.key`,
      value: `printer.${this.model}.spec.ambient.value`
    },
    {
      id: 15,
      title: `printer.${this.model}.spec.software.key`,
      value: `printer.${this.model}.spec.software.value`
    },
    {
      id: 16,
      title: `printer.${this.model}.spec.filetypes.key`,
      value: `printer.${this.model}.spec.filetypes.value`
    }
  ]

  printerSpecs: any = {}

  async mounted () {
    let result = await this.$apollo.query({
      query: gql`query($id: ID!) {product(id: $id) {
        product_id, 
        name, 
        image,
        price
        attributes { 
          attribute_group_id, 
          name, 
          attribute {
            name, 
            attribute_id, 
            text
          }
        }
      }
      }`,
      variables: {
        id: this.idFromModel
      }
    })
    this.printerSpecs = result.data.product
  }
}

</script>

<style>
</style>
