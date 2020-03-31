<template>
  <v-col cols="4" v-if="$apollo.loading"></v-col>
  <v-col lg="8" v-else>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" v-for="product in products" :key="product.product_id">
          <v-card>
            <v-container>
              <v-row>
                <v-col cols="12" v-for="option in product.options" :key="option.product_option_id">
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        v-for="option_value in option.product_option_value"
                        :key="option_value.product_option_value_id"
                      >{{ option_value.name}}{{ parseFloat(option_value.price) + parseFloat(product.price) }}</v-col>
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import gql from 'graphql-tag'

interface CompareTableData {
  name: string
  price: string
  description: string
}

@Component({
  components: {
  }
})
export default class CompareSpecs extends Vue {
  products: any = {}

  compareTableData: any[] = []

  async mounted () {
    let result = await this.$apollo.query({
      query: gql`{
        products {
          product_id
          name,
          price,
          options {
            product_option_id,
             product_option_value {
                name, 
                price
           }
          }
        }
      }`
    })
    this.products = result.data.products


  }
}

</script>

<style>
</style>
