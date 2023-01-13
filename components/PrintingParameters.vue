<template>
  <v-card>
    <v-data-iterator :items="parameters" 
      :items-per-page="itemsPerPage" 
      :page="page" 
      :search="search" 
      hide-default-footer
      :sort-by="sortBy"
      :sort-desc="sortDesc"
    >
      <template v-slot:header>
        <v-container class="mb-1">
          <v-card dark color="primary" outlined>
            <v-card-title>{{$t('Параметры печати')}}</v-card-title>
            <v-card-text>
              <v-row justify="center">
                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="search"
                    clearable
                    flat
                    solo-inverted
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    :label="$t('Поиск')"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-select
                    v-model="sortBy"
                    flat
                    solo-inverted
                    hide-details
                    :items="sortKeys"
                    prepend-inner-icon="mdi-magnify"
                    :label="$t('Сортировать по')"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-btn-toggle v-model="sortDesc" mandatory>
                    <v-btn large depressed color="blue" :value="false">
                      <v-icon>mdi-arrow-up</v-icon>
                    </v-btn>
                    <v-btn large depressed color="blue" :value="true">
                      <v-icon>mdi-arrow-down</v-icon>
                    </v-btn>
                  </v-btn-toggle>                  
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-container>
      </template>
      <template v-slot:default="props">
        <v-row class="ml-1 mr-1">
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card outlined>
              <v-card-title>
                <h4>{{ item.name }}</h4>
              </v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-item
                  v-for="(k, index) in Object.keys(item).filter(
                    (v) => !v.startsWith('_')
                  ).filter(v=> v!= 'name')"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === k }">{{ $t(`${k}`) }}</v-list-item-content>
                  <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === k }">
                    {{ item[k] }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
      <template v-slot:footer>
        <v-row class="mt-2 ml-5" align="center" justify="center">
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
            Page {{ page }} of {{ numberOfPages() }}
          </span>
          <v-col v-if="$vuetify.breakpoint.xs" class="text-center" cols="12">
            <v-btn
              fab
              dark
              color="blue darken-3"
              class="mr-1 mb-2"
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab dark color="blue darken-3" class="ml-1 mr-5 mb-2" @click="nextPage">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
          <v-col v-else sm="3" lg="2">
            <v-btn
              fab
              dark
              color="blue darken-3"
              class="mr-1 mb-2"
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab dark color="blue darken-3" class="ml-1 mr-5 mb-2" @click="nextPage">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-card>
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

  search: string = ""
  sortBy: string = ""
  sortDesc: boolean = false
  itemsPerPageArray: number[]=[1, 2, 3, 4, 8, 12]
  itemsPerPage: number = 3
  page: number = 1
  
  get sortKeys(): any[]{
    if (this.parameters[0]) {
      return Object.keys(this.parameters[0]).filter((v) => !v.startsWith('_')).map(v => {return {text: this.$tc(`${v}`), value: v}})

    } else {
      return []
    }
  }

  updateItemsPerPage (number) {
    this.itemsPerPage = number
  }

  numberOfPages () {
    return Math.ceil(this.parameters.length / this.itemsPerPage)
  }

  nextPage () {
        if (this.page + 1 <= this.numberOfPages()) this.page += 1
  }
  formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
  }

}
</script>

<style>
</style>