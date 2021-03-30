<template>
  <v-container fluid>
    <v-data-iterator :items="parameters" :items-per-page="itemsPerPage" :page="page" hide-default-footer>
      <template v-slot:header>
        <v-toolbar dark color="primary" class="mb-1">
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Поиск"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="Object.keys(parameters[0]).filter(v=>!v.startsWith('_'))"
              prepend-inner-icon="mdi-magnify"
              label="Сортировать по"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn large depressed color="blue" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed color="blue" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card>
              <v-card-title>
                <h4>{{ item.name }}</h4>
              </v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-item
                  v-for="(k, index) in Object.keys(item).filter(
                    (v) => !v.startsWith('_')
                  )"
                  :key="index"
                >
                  <v-list-item-content>{{ $t(`${k}`) }}</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item[k] }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 grey--text">
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PrintingParameters extends Vue {
  @Prop({
    type: Array,
    default: () => {
      return [];
    },
  })
  parameters!: any[];

  private search: string = ""
  private sortBy: string = "name"
  private sortDesc: boolean = false
  private itemsPerPageArray: number[]=[1, 2, 3, 4, 8, 12]
  private itemsPerPage: number = 3
  private page: number = 1
  //private filter: {},

  private  updateItemsPerPage (number) {
    this.itemsPerPage = number
  }

  private numberOfPages () {
    return Math.ceil(this.parameters.length / this.itemsPerPage)
  }

  private nextPage () {
        if (this.page + 1 <= this.numberOfPages()) this.page += 1
  }
  private formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
  }


}
</script>

<style>
</style>