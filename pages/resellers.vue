<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <v-card>
          <v-card-title v-if="$vuetify.breakpoint.xs">{{
            $t("Запросить предложение")
          }}</v-card-title>
          <v-card-title v-else class="display-3">{{
            $t("Запросить предложение")
          }}</v-card-title>
          <v-card-text>
            <v-container>
              <v-row justify="center" align="center">
                <v-col cols="12" sm="6">
                  <p class="headline">
                    {{
                      $t(
                        "Ниже представлен список дистрибьюторов, готовых к рассмотрению ваших заявок. Если вы нуждаетесь в дополнительной информации, свяжитесь с нами, используя форму ниже."
                      )
                    }}
                  </p>
                  <QuoteForm
                    :buttonText="this.$tc('Связаться с нами')"
                    :title="this.$tc('Связаться с нами')"
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
        <AddressMap :addresses="adresses" :height="500" />
      </v-col>
      <v-col cols="12" lg="4">
        <v-card id="dealer-form">
          <v-card-title>{{ $t("Стать дилером") }}</v-card-title>
          <v-card-text>
            <v-container>
              <v-row justify="center">
                <v-col cols="12">
                  <QuoteForm
                    :buttonText="this.$tc('Заполнить форму')"
                    :title="this.$tc('Запрос для дилеров')"
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
import { Seller, SellerType } from '~/types/reseller'

@Component({
  components: {
    QuoteForm,
    AddressMap
  }
})
export default class Resellers extends Vue {

  adresses: any[] = []

  private async getDealersData () {
    let data
    let response = await fetch('https://api2.stereotech.org/api/collections/get/dealers?token=8b518a32222992717e27e1361a2260')
    data = await response.json()
    this.adresses = data.entries
    // return data
  }


  // get addresses(): Seller[] {
  //   return [
  //   {
  //     name: 'Stereotech',
  //     logo: 'resellers/stereotech.jpg',
  //     email: 'store@5dtech.pro',
  //     website: 'https://5dtech.pro',
  //     region: this.$tc('ЮФО'),
  //     country: this.$tc('Российская Федерация'),
  //     address: this.$tc('г. Волгоград, ул. им. Огарева, 2'),
  //     coords: [48.692225, 44.498048],
  //     type: SellerType.Manufacturer,
  //     phone: '+79023648404'
  //   },
  //     {
  //       name: 'ATSS Group',
  //       logo: '/resellers/atss.jpg',
  //       email: 'info@atssgroup.com',
  //       website: 'http://atssgroup.com',
  //       region: this.$tc('ЦФО'),
  //       country: this.$tc('Российская Федерация'),
  //       address: this.$tc('г. Москва, Волоколамское шоссе, д. 2'),
  //       type: SellerType.Distributor,
  //       coords: [55.807476, 37.505292],
  //       phone: '+79265517333'
  //     },
  //     {
  //       name: 'Capvidia Belgium',
  //       logo: '/resellers/capvidia.jpg',
  //       email: 'info@capvidia.com',
  //       website: 'http://capvidia.com',
  //       region: this.$tc('Бельгия'),
  //       country: this.$tc('Страны Европейского союза'),
  //       address: this.$tc('Technologielaan 3 B-3001 Leuven'),
  //       type: SellerType.Distributor,
  //       coords: [50.8540782, 4.727265]
  //     },
  //     {
  //       name: '3DSYSTEMPRO',
  //       logo: '/resellers/systempro.jpg',
  //       email: 'info@3dsystem.pro',
  //       website: 'www.3dsystem.pro',
  //       region: this.$tc('ПФО'),
  //       country: this.$tc('Российская Федерация'),
  //       address: this.$tc('г. Казань, ул. Петербургская, д. 50, корп. 23, пилон III, оф. 310, Технопарк "ИДЕЯ"'),
  //       type: SellerType.Diler,
  //       coords: [55.781028, 49.131333],
  //       phone: '88006001710'
  //     },
  //     {
  //       name: '3DSYSTEMPRO',
  //       logo: '/resellers/systempro.jpg',
  //       email: 'info@3dsystem.pro',
  //       website: 'www.3dsystem.pro',
  //       region: this.$tc('СЗФО'),
  //       country: this.$tc('Российская Федерация'),
  //       address: this.$tc('г. Санкт-Петербург, Лиговский проспект, д. 92Г, оф. 29'),
  //       type: SellerType.Diler,
  //       coords: [59.920357, 30.356122],
  //       phone: '88006001710'
  //     },
  //     {
  //       name: '3DSYSTEMPRO',
  //       logo: '/resellers/systempro.jpg',
  //       email: 'info@3dsystem.pro',
  //       website: 'www.3dsystem.pro',
  //       region: this.$tc('ЦФО'),
  //       country: this.$tc('Российская Федерация'),
  //       address: this.$tc('г. Москва, Березовая аллея д. 5А, стр. 7, офис 8'),
  //       type: SellerType.Diler,
  //       coords: [55.853708, 37.609937],
  //       phone: '88006001710'
  //     },
  //     {
  //       name: 'STUDIA3D',
  //       logo: '/resellers/studia3d.jpg',
  //       email: '3dprint@studia3d.com',
  //       website: 'www.studia3d.com',
  //       region: this.$tc('ЦФО'),
  //       country: this.$tc('Российская Федерация'),
  //       address: this.$tc('г. Москва, ул. Золоторожский Вал, 11с27'),
  //       type: SellerType.Diler,
  //       coords: [55.749076, 37.700568],
  //       phone: '+74959262651'
  //     },
  //     {
  //       name: 'Stereotech',
  //       logo: 'resellers/stereotech.jpg',
  //       email: 'tolmachev@5dtech.pro',
  //       website: 'https://5dtech.pro',
  //       region: this.$tc('СФО'),
  //       country: this.$tc('Российская Федерация'),
  //       address: this.$tc('г. Красноярск ул. Алексеева, 49'),
  //       coords: [56.047882, 92.907764],
  //       type: SellerType.Diler,
  //       phone: '+79993154420'
  //     }
  //   ]
  // }
  async mounted () {
    await this.getDealersData()
  }
}

</script>

<style>
</style>