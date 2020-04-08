<template>
  <v-card>
    <v-card-title>{{$t('Обращение в техническую поддержку')}}</v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          outlined
          v-model="firstName"
          :rules="[v => !!v || this.$tc('Требуется имя')]"
          :label="this.$tc('Имя')"
          required
        ></v-text-field>

        <v-text-field outlined v-model="lastName" :label="this.$tc('Фамилия')"></v-text-field>
        <v-text-field outlined v-model="phoneNumber" v-mask="mask" :label="this.$tc('Телефон')"></v-text-field>

        <v-text-field
          outlined
          v-model="email"
          :rules="[v => !!v || this.$tc('Требуется E-mail'), v => /.+@.+\..+/.test(v) || this.$tc('Введенный E-mail неверен')]"
          :label="this.$tc('Почта')"
          required
        ></v-text-field>

        <v-textarea outlined v-model="description" :label="this.$tc('Описание проблемы')"></v-textarea>

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
          :rules="[v => !!v || this.$tc('Вид проблемы не указан')]"
          :items="items"
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
          @click="submit()"
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

Vue.use(VueTheMask)
@Component
export default class ContactForm extends Vue {
  private snackbar: boolean = false
  private snackbarText: string = ''
  private snackbarError: boolean = false
  private dataString: string = ""
  private mask: string = "+7(###) ###-####"
  private valid: boolean = false
  private isEnable: boolean = false
  private firstName: string = ""
  private lastName: string = ""
  private phoneNumber: string = ""
  private email: string = ""
  private description: string = ""
  private apealTheme: string = ""
  private problemType: string = ""
  private serialNumber: string = ""
  private apealThemeItems: String[] = ['STE 520', 'STE 320', 'STE App', 'STE Slicer', 'Услуги']
  private items: string[] = []
  // private showProblemTypeItems (apealThemeItem: string) {
  //   let items: string[]
  //   if (apealThemeItem === 'Услуги') {
  //     this.isEnable = false
  //     return
  //   }
  //   else if (apealThemeItem === 'STE 520' || apealThemeItem === 'STE 320') {
  //     items = ['Не могу запустить печать',
  //       'Результаты печати неудовлетворительны',
  //       'Нужна помощь со встроенным ПО',
  //       'Что-то сломалось',
  //       'Отсутствуют детали',
  //       'Другое']
  //     this.isEnable = true
  //     return items
  //   }
  //   else if (apealThemeItem === 'STE App') {
  //     items = [
  //       'Ошибки на экране принтера',
  //       'Ошибки в приложении на смартфоне',
  //       'Ошибки в браузере',
  //       'Другое'
  //     ]
  //     this.isEnable = true
  //     return items
  //   }
  //   else if (apealThemeItem === 'STE Slicer') {
  //     items = [
  //       'Проблемы с установкой',
  //       'Проблемы с созданием профиля принтера',
  //       'Проблемы с подготовкой на печать',
  //       'Другое'
  //     ]
  //     this.isEnable = true
  //     return items
  //   }
  // }

  private get joinFormData () {
    const str = `
      Имя обратившегося: ${this.firstName} ${this.lastName},
      Телефон: ${this.phoneNumber},
      E-Mail: ${this.email},
      Тема бращения: ${this.apealTheme},
      Вид обращения: ${this.problemType},
      Серийный номер устройства: ${this.serialNumber},
      Описание проблемы: ${this.description}
    `
    return str
  }

  private async submit () {
    const name = 'Техническая поддержка: ' + new Date().toString() + ' Обращение от ' + this.firstName + ' ' + this.lastName + ''
    const email = this.email
    const description = this.joinFormData
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
      this.snackbarText = this.$tc('Ваш запрос успешно отправлен!')
      this.snackbarError = false
      this.snackbar = true

      this.firstName = ""
      this.lastName = ""
      this.phoneNumber = ""
      this.email = ""
      this.apealTheme = ""
      this.problemType = ""
      this.serialNumber = ""

    } catch (error) {
      this.snackbarText = this.$tc('Произошла ошибка при отправке формы, ') + error
      this.snackbarError = true
      this.snackbar = true
    }
  }

  async mounted(){
    this.apealThemeItems.push('STE 520', 'STE 320', 'STE App', 'STE Slicer', this.$tc('Услуги'))

    if (this.apealTheme === this.$tc('Услуги')) {
      this.isEnable = false
      return
    }
    else if (this.apealTheme === 'STE 520' || this.apealTheme === 'STE 320') {
      this.items.push(this.$tc('Не могу запустить печать'),
        this.$tc('Результаты печати неудовлетворительны'),
        this.$tc('Нужна помощь со встроенным ПО'),
        this.$tc('Что-то сломалось'),
        this.$tc('Отсутствуют детали'),
        this.$tc('Другое'))
      this.isEnable = true
      return this.items
    }
    else if (this.apealTheme === 'STE App') {
      this.items.push(
        this.$tc('Ошибки на экране принтера'),
        this.$tc('Ошибки в приложении на смартфоне'),
        this.$tc('Ошибки в браузере'),
        this.$tc('Другое')
      )
      this.isEnable = true
      return this.items
    }
    else if (this.apealTheme === 'STE Slicer') {
      this.items.push  (this.$tc('Проблемы с установкой'),
        this.$tc('Проблемы с созданием профиля принтера'),
        this.$tc('Проблемы с подготовкой на печать'),
        this.$tc('Другое'))

      this.isEnable = true
      return this.items
    }
  

  }
}


</script>

<style>
</style>