<template>
  <v-container fluid>
    <v-row justify="center" v-if="this.loadedPage == false">
      <v-col cols="12" lg="10">
        <v-skeleton-loader
          type="image@2"
          :tile=true
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" lg="10">
        <v-skeleton-loader
          type="image@3"
          :tile=true
        ></v-skeleton-loader>
      </v-col>
      <v-col 
        cols="12" 
        lg="8"
        v-for="n in 3"
        :key="n"
      >
        <v-skeleton-loader
          class="v-s-text"
          type="heading"
        ></v-skeleton-loader>
        <v-skeleton-loader
          type="image"
          :tile=true
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" lg="5">
        <v-skeleton-loader
          type="image"
          :tile=true
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <v-card v-if="this.loadedPage == true">
          <v-card-title v-if="$vuetify.breakpoint.xs">{{
            title
          }}</v-card-title>
          <v-card-title v-else class="display-3">{{
            title
          }}</v-card-title>
          <v-card-text>
            <v-container>
              <v-row justify="center" align="center">
                <v-col cols="12" sm="6">
                  <p class="headline">
                    {{ description }}
                  </p>
                  <QuoteForm
                    :buttonText="subFormButton"
                    :title="subFormTitle"
                    subscription
                    equipment
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-img :src="image"></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="10">
        <AddressMap :addresses="adresses" :height="500" :loadedPage="loadedPage"/>
      </v-col>
      <v-col cols="12" lg="4" v-if="this.loadedPage == true">
        <v-card id="dealer-form">
          <v-card-title>{{ subtitle }}</v-card-title>
          <v-card-text>
            <v-container>
              <v-row justify="center">
                <v-col cols="12">
                  <QuoteForm
                    :buttonText="dealersFormButton"
                    :title="dealersFormTitle"
                    dealers
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import QuoteForm from '~/components/reselling/QuoteForm.vue'
import AddressMap from '~/components/AddressMap.vue'

@Component({
  components: {
    QuoteForm,
    AddressMap
  }
})
export default class Resellers extends Vue {

  title: string = ''
  subtitle: string = ''
  description: string = ''
  subFormButton: string = ''
  subFormTitle: string = ''
  dealersFormButton: string = ''
  dealersFormTitle: string = ''
  image: string = ''
  loadedPage: boolean = false

  adresses: any[] = []

  private async getResellersData () {
    let response = await fetch(`${process.env.API_STATAMIC}/collections/page/entries/a02027e1-ce2c-433e-ab02-7a1223098d26`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    let data = await response.json()
    data = data.data

    this.title = data.title_header
    this.subtitle = data.title_footer
    this.description = data.textarea_field
    this.image = data.assets_for_quoteform[0].permalink

    let getSubForm = data.subscription_form.api_url
    response = await fetch(getSubForm, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getSubForm = await response.json()
    this.subFormButton = getSubForm.data.fields.buttontext.default
    this.subFormTitle = getSubForm.data.fields.title.default

    let getDealersForm = data.dealers_form.api_url
    response = await fetch(getDealersForm, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getDealersForm = await response.json()
    this.dealersFormButton = getDealersForm.data.fields.buttontext.default
    this.dealersFormTitle = getDealersForm.data.fields.title.default

    let getAdresses = data.dealers_collections[0].handle
    response = await fetch(`${process.env.API_STATAMIC}/collections/${getAdresses}/entries?filter[locale]=default`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }  
    })
    getAdresses = await response.json()
    this.adresses = getAdresses.data
  }

  async mounted () {
    await this.getResellersData()
    this.loadedPage = true
  }
}

</script>

<style>
  .v-s-text {
    margin-bottom: 20px;
  }
</style>