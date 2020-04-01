<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <v-card>
          <v-card-title v-if="$vuetify.breakpoint.xs">Запросить предложение</v-card-title>
          <v-card-title v-else class="display-3">Запросить предложение</v-card-title>
          <v-card-text>
            <v-container>
              <v-row justify="center" align="center">
                <v-col cols="12" sm="6">
                  <p
                    class="headline"
                  >Ниже представлен список дистрибьюторов, готовых к рассмотрению ваших заявок. Если вы нуждаетесь в дополнительной информации, свяжитесь с нами, используя форму ниже.</p>
                  <QuoteForm
                    buttonText="Связаться с нами"
                    title="Связаться с нами"
                    subscription
                    equipment
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-img src="/resellers/quote.jpg"></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="10">
        <AddressMap :addresses="addresses" :height="500" />
      </v-col>
      <v-col cols="12" lg="4">
        <v-card>
          <v-card-title>Стать дилером</v-card-title>
          <v-card-text>
            <v-container>
              <v-row justify="center">
                <v-col cols="12">
                  <QuoteForm buttonText="Стать дилером" title="Запрос для дилеров" dealers />
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
import { Seller, SellerType } from '~/types/reseller'

@Component({
  components: {
    QuoteForm,
    AddressMap
  }
})
export default class Resellers extends Vue {
  addresses: Seller[] = [
    {
      name: 'Stereotech',
      logo: '/resellers/stereotech.jpg',
      email: 'store@ste3d.ru',
      website: 'https://ste3d.ru',
      region: 'Волгоградская обл.',
      country: 'Российская Федерация',
      address: 'г. Волгоград, ул. им. Огарева, 2',
      coords: [48.692225, 44.498048],
      type: SellerType.Manufacturer
    }
  ]
}

</script>

<style>
</style>