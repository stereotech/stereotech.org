<template>
  <v-dialog v-model="dialog" max-width="600">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" block color="primary" depressed>{{ buttonText}}</v-btn>
    </template>
    <v-card>
      <v-form v-model="valid">
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-row no-gutters>
              <v-col cols="12">
                <v-text-field outlined label="Имя" v-model="name" :rules="nameRules"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field outlined label="Номер телефона" v-model="phone" v-mask="mask"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field outlined label="E-mail" v-model="email" :rules="emailRules"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field outlined label="Компания" v-model="company"></v-text-field>
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
                <v-switch v-model="subscribe" label="Подписаться на рассылку" color="primary"></v-switch>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled="!valid" depressed color="primary" @click="submit">Отправить</v-btn>
        </v-card-actions>
      </v-form>
      <small>
        This site is protected by reCAPTCHA and the Google
        <a
          href="https://policies.google.com/privacy"
        >Privacy Policy</a> and
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </small>
    </v-card>
    <v-snackbar v-model="snackbar" :color="snackbarError ? 'error' : 'success'">
      {{ snackbarText }}
      <v-btn text @click="snackbar = false">Закрыть</v-btn>
    </v-snackbar>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import gql from 'graphql-tag'

@Component
export default class QuoteForm extends Vue {
  private snackbar: boolean = false
  private snackbarText: string = ''
  private snackbarError: boolean = false

  dialog: boolean = false
  valid: boolean = false

  name: string = ''
  phone: string = ''
  email: string = ''
  company: string = ''
  interestIn: string[] = []
  subscribe: boolean = true

  interests: string[] = [
    'Серия 3xx',
    'Серия 5xx',
    'Серия Special',
    'Промышленые принтеры',
  ]

  nameRules = [
    (v: any) => !!v || 'Имя обязательно',
  ]

  emailRules = [
    (v: any) => !!v || 'E-mail обязателен',
    (v: any) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail не верен'
  ]

  private mask: string = "+7(###) ###-####"

  private get joinFormData () {
    const str = `
      Имя обратившегося: ${this.name},
      Телефон: ${this.phone},
      E-Mail: ${this.email},
      Компания: ${this.company},
      Интерес в: ${this.interestIn},
      Подписка на новости: ${this.subscribe}
    `
    return str
  }

  private async submit () {
    let name = this.dealers ? 'Запрос дилерства' : 'Запрос предложения'
    name += ': ' + new Date().toString() + ' Обращение от ' + this.name
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
      this.snackbarText = 'Ваш запрос успешно отправлен!'
      this.snackbarError = false
      this.snackbar = true

      this.name = ""
      this.phone = ""
      this.email = ""
      this.company = ""
      this.interests = []
      this.subscribe = true

      this.dialog = false

    } catch (error) {
      this.snackbarText = 'Произошла ошибка при отправке формы, ' + error
      this.snackbarError = true
      this.snackbar = true
    }
  }

  @Prop({ type: String, default: 'button text' }) buttonText!: string
  @Prop({ type: String, default: 'Title' }) title!: string
  @Prop({ type: Boolean, default: false }) equipment!: boolean
  @Prop({ type: Boolean, default: false }) subscription!: boolean
  @Prop({ type: Boolean, default: false }) dealers!: boolean
}

</script>

<style>
</style>