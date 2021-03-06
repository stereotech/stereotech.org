<template>
  <v-card>
    <v-card-title>{{$t('Обращение в техническую поддержку')}}</v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          outlined
          v-model="name"
          :rules="[v => !!v || this.$tc('Требуется имя')]"
          :label="this.$tc('ФИО')"
          required
        ></v-text-field>
        <v-autocomplete
          outlined
          v-model="country"
          :items="countries"
          item-text="country"
          :label="this.$tc('Страна')"
        ></v-autocomplete>
        <v-text-field outlined v-model="phoneNumber" :label="this.$tc('Телефон')" required></v-text-field>

        <v-text-field
          outlined
          v-model="email"
          :rules="[v => !!v || this.$tc('Требуется E-mail'), v => /.+@.+\..+/.test(v) || this.$tc('Введенный E-mail неверен')]"
          :label="this.$tc('Почта')"
          required
        ></v-text-field>

        <v-textarea outlined v-model="problemDescription" :label="this.$tc('Описание проблемы')"></v-textarea>

        <v-select
          outlined
          v-model="apealTheme"
          :items="apealThemeItems"
          :rules="[v => !!v || this.$tc('Требуется выбрать тему обращения')]"
          :label="this.$tc('Тема обращения')"
        ></v-select>

        <v-select
          outlined
          v-model="problemType"
          :disabled="!isEnable"
          :rules="[v => !!v && apealTheme!=='Услуги' || this.$tc('Вид проблемы не указан')]"
          :items="problemItems"
          :label="this.$tc('Вид проблемы')"
        ></v-select>

        <v-text-field
          outlined
          v-model="serialNumber"
          :rules="[v => !!v || this.$tc('Требуется серийный номер')]"
          :label="this.$tc('Серийный номер устройства')"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="submit1()"
          large
        >{{$t('Отправить запрос')}}</v-btn>
      </v-form>
      <small>
        This site is protected by reCAPTCHA and the Google
        <a
          href="https://policies.google.com/privacy"
        >Privacy Policy</a> and
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </small>
    </v-card-text>
    <v-snackbar v-model="snackbar" :color="snackbarError ? 'error' : 'success'">
      {{ snackbarText }}
      <v-btn text @click="snackbar = false">{{$t('Закрыть')}}</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VueTheMask from 'vue-the-mask'
import gql from 'graphql-tag'
import { MegaplanApi } from '~/types/megaplan/base'

Vue.use(VueTheMask)
@Component
export default class ContactForm extends Vue {
  private snackbar: boolean = false
  private snackbarText: string = ''
  private snackbarError: boolean = false
  private dataString: string = ""
  private valid: boolean = false
  private isEnable: boolean = false
  private name: string = ""
  private phoneNumber: string = ""
  private email: string = ""
  private country: string = ""
  private problemDescription: string = ""
  private apealTheme: string = ""
  private problemType: string = ""
  private serialNumber: string = ""
  //private apealThemeItems: String[] = []
  private items: string[] = []

  private countries: any[] = require('country-json/src/country-by-name.json')

  get apealThemeItems(): string[] {
    return ['STE 520', 'STE 320', 'STE App', 'STE Slicer', this.$tc('Услуги')]
  }
  get problemItems(): string[] {
   if (this.apealTheme === 'Услуги') {
      this.items = []
      this.isEnable = false
    }
    else if (this.apealTheme === 'STE 520' || this.apealTheme === 'STE 320') {
      this.items = ['Не могу запустить печать',
        'Результаты печати неудовлетворительны',
        'Нужна помощь со встроенным ПО',
        'Что-то сломалось',
        'Отсутствуют детали',
        'Другое']
      this.isEnable = true
    }
    else if (this.apealTheme === 'STE App') {
      this.items = [
        'Ошибки на экране принтера',
        'Ошибки в приложении на смартфоне',
        'Ошибки в браузере',
        'Другое'
      ]
      this.isEnable = true
    }
    else if (this.apealTheme === 'STE Slicer') {
      this.items = [
        'Проблемы с установкой',
        'Проблемы с созданием профиля принтера',
        'Проблемы с подготовкой на печать',
        'Другое'
      ]
      this.isEnable = true
    }
    return this.items
  }

  private get description(){
    const str = `
    Тема обращения: ${this.apealTheme}, 
    Вид обращения: ${this.problemType}, 
    Серийный номер устройства: ${this.serialNumber}, 
    Описание проблемы: ${this.problemDescription}`

    return str
  } 

  private async submit1(){

    let response = await fetch(`https://api2.stereotech.org/api/forms/submit/techSupport?token=${process.env.COCKPIT_TOKEN}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        form: {
          ФИО: `${this.name}`,
          Email: `${this.email}`,
          Телефон: `${this.phoneNumber}`,
          Страна: `${this.country}`,
          ТемаОбращения: `${this.apealTheme}`, 
          ВидОбращения: `${this.problemType}`, 
          СерийныйНомерУстройства: `${this.serialNumber}`, 
          ОписаниеПроблемы: `${this.problemDescription}`
        }
      })
    })
    console.log(response)
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
    const name = 'Техническая поддержка: ' + new Date().toString() + ' Обращение от ' + this.name + ''
    const email = this.email
    const description = this.description
    try {
      //@ts-ignore
      const token = await this.$recaptcha.execute('login')
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
      let megaplan = new MegaplanApi()
      await megaplan.authenticate()
     // let company: any = null
      let isCompany = false
      let clientId = ''
      let contact = await megaplan.createClient(this.name, this.phoneNumber, this.email, '' , '')
      clientId = contact.id
      let callToDo = await megaplan.createCallToDo(isCompany, clientId)
      let emailToDo = await megaplan.createEmailToDo(isCompany, clientId)
      let deal = await megaplan.createDeal('', contact, this.description, 0)
      this.snackbarText = this.$tc('Ваш запрос успешно отправлен!')
      this.snackbarError = false
      this.snackbar = true

      this.name = ""
      this.phoneNumber = ""
      this.email = ""
      this.problemDescription = ""
      this.apealTheme = ""
      this.problemType = ""
      this.serialNumber = ""

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