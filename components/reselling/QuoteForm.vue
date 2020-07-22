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
              <v-text-field outlined :label="this.$tc('Имя')" v-model="name" :rules="nameRules"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                :label="this.$tc('Номер телефона')"
                v-model="phone"
                v-mask="mask"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field outlined label="E-mail" v-model="email" :rules="emailRules"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field outlined :label="this.$tc('Компания')" v-model="company"></v-text-field>
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
        <v-btn :disabled="!valid" depressed color="primary" @click="submit">{{$t('Отправить')}}</v-btn>
      </v-card-actions>
    </v-form>
    <small>
      This site is protected by reCAPTCHA and the Google
      <a
        href="https://policies.google.com/privacy"
      >Privacy Policy</a> and
      <a href="https://policies.google.com/terms">Terms of Service</a> apply.
    </small>
    <v-snackbar v-model="snackbar" :color="snackbarError ? 'error' : 'success'">
      {{ snackbarText }}
      <v-btn text @click="snackbar = false">{{$t('Закрыть')}}</v-btn>
    </v-snackbar>
  </DialogForm>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import DialogForm from '~/components/DialogForm.vue'
import gql from 'graphql-tag'

@Component({
  components: {
    DialogForm
  }
})
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
  subscribeStr: string = ''
  async mounted () {
    this.interests.push(this.$tc('Серия 3хх'), this.$tc('Серия 5хх'), this.$tc('Серия Special'), this.$tc('Промышленые принтеры'))
  }
  interests: string[] = [
    // 'Серия 3xx',
    // 'Серия 5xx',
    // 'Серия Special',
    // 'Промышленые принтеры',
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

  private isSubscribeToStr() {
    
    return this.subscribe? 'да' :'нет'
 
  }
  private async submit () {
    let name = this.dealers ? 'Запрос дилерства' : 'Запрос предложения'
    name += ': ' + new Date().toString() + ' Обращение от ' + this.name
    const email = this.email
    const description = this.joinFormData
    try {
      //@ts-ignore
      const token = await this.$recaptcha.execute('login')
      let companyId = 0;
      if (this.company !== ""){
        let company = await fetch(`https://stereotech.bitrix24.ru/rest/1/jh7j5uxr0f5rcdm8/crm.company.add.json?
        fields[TITLE]=${this.company}&
        fields[ASSIGNED_BY_ID]=142`) //Avdeeva
        let result = await company.json()
        companyId = result.result
      }
       let contactRequest = `https://stereotech.bitrix24.ru/rest/1/jh7j5uxr0f5rcdm8/crm.contact.add.json?
        fields[NAME]=${this.name}&
        fields[EMAIL][0][VALUE]=${this.email}&
        fields[EMAIL][0][VALUE_TYPE]=WORK&
        fields[PHONE][0][VALUE]=${this.phone}&
        fields[PHONE][0][VALUE_TYPE]=WORK&
        fields[ASSIGNED_BY_ID]=142`

      if (companyId > 0) {
        contactRequest += `&fields[COMPANY_ID]=${companyId}`
      }

      let contact = await fetch(contactRequest)
      let result = await contact.json()
      let contactId = result.result

      let dealRequest = `https://stereotech.bitrix24.ru/rest/1/jh7j5uxr0f5rcdm8/crm.lead.add.json?
        fields[TITLE]=Запрос информации c stereotech.org&
        fields[COMMENTS]=Заинтересован в ${this.interestIn}, подписка на новости: ${this.isSubscribeToStr()}&
        fields[ASSIGNED_BY_ID]=142&
        fields[STAGE_ID]=NEW&
        fields[CONTACT_ID]=${contactId}&
        params[REGISTER_SONET_EVENT]=Y`

      if (companyId > 0) {
        dealRequest += `&fields[COMPANY_ID]=${companyId}`
      }

      let deal = await fetch(dealRequest)
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

      this.name = ""
      this.phone = ""
      this.email = ""
      this.company = ""
      this.interests = []
      this.subscribe = true

      this.dialog = false

    } catch (error) {
      this.snackbarText = this.$tc('Произошла ошибка при отправке формы, ') + error
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
