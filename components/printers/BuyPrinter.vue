<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" md="6" class="text-center">
          <h2>{{ $t("Заказ") }}</h2>
          <h3 class="text-uppercase">{{ variant.model }}</h3>
          <h3>{{ price }}</h3>
          <v-form v-model="valid">
            <v-text-field
              v-model="orderName"
              :rules="[(v) => !!v || this.$tc('Требуется ФИО')]"
              :label="this.$tc('ФИО')"
              required
              outlined
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="[
                (v) => !!v || this.$tc('Требуется E-mail'),
                (v) =>
                  /.+@.+\..+/.test(v) || this.$tc('Введенный E-mail неверен'),
              ]"
              :label="this.$tc('Почта')"
              required
              outlined
            ></v-text-field>

            <v-text-field
              v-model="phoneNumber"
              :label="this.$tc('Номер телефона')"
              :rules="[(v) => !!v || this.$tc('Требуется номер телефона')]"
              outlined
            ></v-text-field>

            <v-text-field
              v-model="companyName"
              :label="this.$tc('Название компании')"
              outlined
            ></v-text-field>

            <v-btn :disabled="!valid" color="primary" @click="submit1()" large>{{
              $t("Заказать")
            }}</v-btn>
          </v-form>
          <v-snackbar
            v-model="snackbar"
            :color="snackbarError ? 'error' : 'success'"
          >
            {{ snackbarText }}
            <v-btn text @click="snackbar = false">{{ $t("Закрыть") }}</v-btn>
          </v-snackbar>
          <small>
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy">Privacy Policy</a> and
            <a href="https://policies.google.com/terms">Terms of Service</a>
            apply.
          </small>
        </v-col>
        <v-col cols="12" md="6">
          <v-img :src="variant.buyImage ? variant.buyImage : variant.image" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import VueTheMask from 'vue-the-mask'
import gql from 'graphql-tag'
import { Model } from '~/types/model'
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType, PrinterType } from '~/types/printerVariant'
import { MegaplanApi } from '~/types/megaplan/base'
Vue.use(VueTheMask)

@Component({
  components: {
  }
})
export default class BuyPrinter extends Vue {
  @Prop({
    type: Object, required: true, default: (): PrinterVariant => {
      return {
        model: '',
        image: '',
        printerType: PrinterType.ThreeAxis,
        extruderType: ExtruderType.Single,
        printVolumeType: PrintVolumeType.Standard,
        fiveAxisType: FiveAxisType.Normal,
        description: '',
        buyImage: ''
      }
    }
  }) variant!: PrinterVariant

  @Prop({ type: String, required: false, default: '' }) price!: string

  private orderName: string = ""
  private phoneNumber: string = ""
  private email: string = ""
  private companyName: string = ""
  private valid: boolean = false
  private snackbar: boolean = false
  private snackbarText: string = ''
  private snackbarError: boolean = false

  private get joinFormData () {
    const str = `
      Имя заказчика: ${this.orderName},
      Телефон: ${this.phoneNumber},
      E-Mail: ${this.email},
      Название компании: ${this.companyName},
      Модель: ${this.variant.model},
      Цена: ${this.price}
    `
    return str
  }

  private description = `Модель: ${this.variant.model}, Цена: ${this.price}`

  private async submit1(){
    let response = await fetch(`https://api2.stereotech.org/api/forms/submit/buyPrinterForm?token=${process.env.COCKPIT_TOKEN}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        form: {
          ИмяЗаказчика: `${this.orderName}`,
          Телефон: `${this.phoneNumber}`,
          Email: `${this.email}`,
          НазваниеКомпании: `${this.companyName}`,
          Модель: `${this.variant.model}`,
          Цена: `${this.price}`
        }
      })
    })
    if(response.ok){
      this.snackbarText = this.$tc('Ваш запрос успешно отправлен!')
      this.snackbarError = false
      this.snackbar = true
    }
    else{
      this.snackbarText = this.$tc('Произошла ошибка при отправке формы, ')
      this.snackbarError = true
      this.snackbar = true
    }
  }

  private async submit () {

    try {
      const name = 'Заказ: ' + new Date().toString() + ' Обращение от ' + this.orderName + ' '
      const email = this.email
      const order = this.joinFormData
      await this.$apollo.mutate({
        mutation: gql`mutation ($name: String!, $email: String!, $order: String!)
      {
          contactus(name: $name, email: $email, enquiry: $order)
      }`,
        variables: {
          name: name,
          email: email,
          order: order
        }
      })

      let megaplan = new MegaplanApi()
      await megaplan.authenticate()
      let company: any = null
      let isCompany = false
      let clientId = ''
      if (this.companyName && this.companyName !== '') {
        company = await megaplan.createCompany(this.companyName, this.description)
      }

      let contact = await megaplan.createClient(this.orderName, this.phoneNumber, this.email, company ? company.id : '', this.description)
      if (company) {
        isCompany = true
        clientId = company.id
      } else {
        clientId = contact.id
      }
      let callToDo = await megaplan.createCallToDo(isCompany, clientId)
      let emailToDo = await megaplan.createEmailToDo(isCompany, clientId)

      this.snackbarText = 'Ваш запрос успешно отправлен!'
      this.snackbarError = false
      this.snackbar = true

      this.orderName = ""
      this.phoneNumber = ""
      this.email = ""
      this.companyName = ""

    } catch (error) {
      this.snackbarText = 'Произошла ошибка при отправке формы, ' + error
      this.snackbarError = true
      this.snackbar = true
    }

    // const name = 'Заказ: ' + new Date().toString() + ' Обращение от ' + this.orderName + ' '
    // const email = this.email
    // const order = this.joinFormData

  }
}

</script>

<style scoped>
</style>
