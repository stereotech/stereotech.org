<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" md="6" class="text-center">
          <h2>{{$t('Заказ')}}</h2>
          <h3 class="text-uppercase">{{ variant.model }}</h3>
          <h3>{{ price }}</h3>
          <v-form v-model="valid">
            <v-text-field
              v-model="orderName"
              :rules="[v => !!v || this.$tc('Требуется ФИО')]"
              :label="this.$tc('ФИО')"
              required
              outlined
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="[v => !!v || this.$tc('Требуется E-mail'), v => /.+@.+\..+/.test(v) || this.$tc('Введенный E-mail неверен')]"
              :label="this.$tc('Почта')"
              required
              outlined
            ></v-text-field>

            <v-text-field
              v-model="phoneNumber"
              v-mask="mask"
              :label="this.$tc('Номер телефона')"
              :rules="[v => !!v || this.$tc('Требуется номер телефона')]"
              outlined
            ></v-text-field>

            <v-text-field v-model="companyName" :label="this.$tc('Название компании')" outlined></v-text-field>

            <v-btn :disabled="!valid" color="primary" @click="submit()" large>{{$t("Заказать")}}</v-btn>
          </v-form>
          <v-snackbar v-model="snackbar" :color="snackbarError ? 'error' : 'success'">
            {{ snackbarText }}
            <v-btn text @click="snackbar = false">{{$t('Закрыть')}}</v-btn>
          </v-snackbar>
          <small>
            This site is protected by reCAPTCHA and the Google
            <a
              href="https://policies.google.com/privacy"
            >Privacy Policy</a> and
            <a href="https://policies.google.com/terms">Terms of Service</a> apply.
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
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType } from '~/types/printerVariant'
Vue.use(VueTheMask)

@Component({
  components: {
  }
})
export default class BuyPrinter extends Vue {
  @Prop({ type: Object, required: true, default: {} }) variant!: PrinterVariant

  @Prop({ type: String, required: false, default: '' }) price!: string

  private orderName: string = ""
  private phoneNumber: string = ""
  private email: string = ""
  private companyName: string = ""
  private mask: string = "+7 ### ###-##-##"
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


  private async submit () {
    const name = 'Заказ: ' + new Date().toString() + ' Обращение от ' + this.orderName + ' '
    const email = this.email
    const order = this.joinFormData
    try {
      //@ts-ignore
      const token = await this.$recaptcha.execute('login')
      let companyId = 0
      if (this.companyName !== "") {
        let company = await fetch(`https://stereotech.bitrix24.ru/rest/1/jh7j5uxr0f5rcdm8/crm.company.add.json?
        fields[TITLE]=${this.companyName}&
        fields[ASSIGNED_BY_ID]=142`) //Avdeeva
        let result = await company.json()
        companyId = result.result
      }
      let convertedPhone = this.phoneNumber.replace('+', '%2B')
      let contactRequest = `https://stereotech.bitrix24.ru/rest/1/jh7j5uxr0f5rcdm8/crm.contact.add.json?
        fields[NAME]=${this.orderName}&
        fields[EMAIL][0][VALUE]=${this.email}&
        fields[EMAIL][0][VALUE_TYPE]=WORK&
        fields[PHONE][0][VALUE]=${convertedPhone}&
        fields[PHONE][0][VALUE_TYPE]=WORK&
        fields[ASSIGNED_BY_ID]=142`

      if (companyId > 0) {
        contactRequest += `&fields[COMPANY_ID]=${companyId}`
      }

      let contact = await fetch(contactRequest)
      let result = await contact.json()
      let contactId = result.result

      let dealRequest = `https://stereotech.bitrix24.ru/rest/1/jh7j5uxr0f5rcdm8/crm.deal.add.json?
        fields[TITLE]=Заказ ${this.variant.model} c stereotech.org&
        fields[OPPORTUNITY]=${this.price}&
        fields[ASSIGNED_BY_ID]=142&
        fields[STAGE_ID]=NEW&
        fields[CONTACT_ID]=${contactId}&
        params[REGISTER_SONET_EVENT]=Y`

      if (companyId > 0) {
        dealRequest += `&fields[COMPANY_ID]=${companyId}`
      }

      let deal = await fetch(dealRequest)

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
  }
}

</script>

<style scoped>
</style>
