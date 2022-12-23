<template>
  <DialogForm :buttonText="buttonText">
    <v-form v-model="valid">
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                outlined
                :label="this.$tc('Имя')"
                v-model="name"
                :rules="nameRules"
              ></v-text-field>
            </v-col>
            <!-- <v-autocomplete
              outlined
              v-model="country"
              :items="countries"
              item-text="country"
              :label="this.$tc('Страна')"
            ></v-autocomplete> -->
            <v-col cols="12">
              <v-text-field
                outlined
                :label="this.$tc('Номер телефона')"
                v-model="phone"
                :rules="phoneRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                label="E-mail"
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                :label="this.$tc('Компания')"
                v-model="companyName"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-textarea
                outlined
                v-model="comment"
                :label="this.$tc('Комментарий')"
              ></v-textarea>
            </v-col>
            <v-col cols="12" v-if="equipment">
              <v-checkbox
                color="primary"
                v-model="interestIn"
                v-for="(interest, index) in interests"
                :key="index"
                :label="interest"
                :value="interest"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" v-if="subscription">
              <v-switch
                v-model="subscribe"
                :label="this.$tc('Подписаться на рассылку')"
                color="primary"
              ></v-switch>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn :disabled="!valid" depressed color="primary" @click="submit1">{{
          $t("Отправить")
        }}</v-btn>
      </v-card-actions>
    </v-form>
    <small>
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy">Privacy Policy</a> and
      <a href="https://policies.google.com/terms">Terms of Service</a> apply.
    </small>
    <v-snackbar v-model="snackbar" :color="snackbarError ? 'error' : 'success'">
      {{ snackbarText }}
      <v-btn text @click="snackbar = false">{{ $t("Закрыть") }}</v-btn>
    </v-snackbar>
  </DialogForm>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import DialogForm from '~/components/DialogForm.vue'
import gql from 'graphql-tag'
import { MegaplanApi } from '~/types/megaplan/base'

@Component({
  components: {
    DialogForm
  }
})
export default class QuoteForm extends Vue {
  @Prop({ type: String, default: 'button text' }) buttonText!: string
  @Prop({ type: String, default: 'Title' }) title!: string
  @Prop({ type: Boolean, default: false }) equipment!: boolean
  @Prop({ type: Boolean, default: false }) subscription!: boolean
  @Prop({ type: Boolean, default: false }) dealers!: boolean
  snackbar: boolean = false
  snackbarText: string = ''
  snackbarError: boolean = false

  dialog: boolean = false
  valid: boolean = false

  name: string = ''
  country: string = ''
  phone: string = ''
  email: string = ''
  companyName: string = ''
  comment: string = ''
  interestIn: string[] = []
  subscribe: boolean = true
  subscribeStr: string = ''

  //countries: any[] = require('country-json/src/country-by-name.json')
  get interests (): string[] {
    return [
      this.$tc('Серия Hybrid'),
      this.$tc('Серия Fiber'),
      this.$tc('Промышленые принтеры')
    ]
  }

  nameRules = [
    (v: any) => !!v || 'Имя обязательно',
  ]

  emailRules = [
    (v: any) => !!v || 'E-mail обязателен',
    (v: any) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail не верен'
  ]

  phoneRules = [
    (v: any) => !!v || 'Номер телефона обязателен'
  ]
  private mask: string = "+7(###) ###-####"

  private get joinFormData () {
    const str = `
      Имя обратившегося: ${this.name},
      Телефон: ${this.phone},
      E-Mail: ${this.email},
      Компания: ${this.companyName},
      Интерес в: ${this.interestIn},
      Подписка на новости: ${this.subscribe}
    `
    return str
  }

  private isSubscribeToStr () {

    return this.subscribe ? 'да' : 'нет'

  }

  private get description () {
    const str = !this.dealers ? `Заинтересован(а) в: ${this.interestIn}, Подписка на новости: ${this.subscribe}` : 'Запрос на дилерство'
    return str
  }

  async submit1 () {
    let response = await fetch(`https://api2.stereotech.org/api/forms/submit/quoteForm?token=${process.env.COCKPIT_TOKEN}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        form: {
          ФИО: `${this.name}`,
          Телефон: `${this.phone}`,
          Email: `${this.email}`,
          Компания: `${this.companyName}`,
          Подробности: `${this.description}`
        }
      })
    })
    if (response.ok) {
      this.snackbarText = this.$tc('Ваш запрос успешно отправлен!')
      this.snackbarError = false
      this.snackbar = true
    }
    else {
      this.snackbarText = this.$tc('Произошла ошибка при отправке формы, ')
      this.snackbarError = true
      this.snackbar = true
    }
  }

  private async submit () {
    let name = this.dealers ? 'Запрос дилерства' : 'Запрос предложения'
    name += ': ' + new Date().toString() + ' Обращение от ' + this.name
    const email = this.email
    const description = this.joinFormData
    await this.$apollo.mutate({
      mutation: gql`mutation ($name: String!, $email: String!, $description: String!)
      {
          contactus(name: $name, email: $email, enquiry: $description)
      }`,
      variables: {
        name: name,
        email: email,
        description: description
      }
    })
    try {
      //@ts-ignore
      let megaplan = new MegaplanApi()
      await megaplan.authenticate()
      let company: any = null
      let isCompany = false
      let clientId = ''
      if (this.companyName && this.companyName !== '') {
        company = await megaplan.createCompany(this.companyName, this.description)
      }
      let contact = await megaplan.createClient(this.name, this.phone, this.email, company ? company.id : '', this.description)
      if (company) {
        isCompany = true
        clientId = company.id
      } else {
        clientId = contact.id
      }
      let callToDo = await megaplan.createCallToDo(isCompany, clientId)
      let emailToDo = await megaplan.createEmailToDo(isCompany, clientId)

      this.snackbarText = this.$tc('Ваш запрос успешно отправлен!')
      this.snackbarError = false
      this.snackbar = true

      this.name = ""
      this.phone = ""
      this.email = ""
      this.companyName = ""
      this.interestIn = []
      this.subscribe = true

      this.dialog = false

    } catch (error) {
      this.snackbarText = this.$tc('Произошла ошибка при отправке формы, ') + error
      this.snackbarError = true
      this.snackbar = true
    }
  }


}

</script>

<style>
</style>
