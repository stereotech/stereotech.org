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
          <v-img :src="variant.image" />
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

  @Prop({ type: String, required: true, default: '' }) price!: number

  private orderName: string = ""
  private phoneNumber: string = ""
  private email: string = ""
  private companyName: string = ""
  private mask: string = "+7(###) ###-####"
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
