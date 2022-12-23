<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" md="6" class="text-center">
          <h2>{{ $t("Заказ") }}</h2>
          <h3 class="text-uppercase">{{ model }}</h3>
          <h3>{{ '₽' + price }}</h3>
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

            <v-btn
              :disabled="!valid"
              color="primary"
              @click="submit()"
              large
              >{{ $t("Заказать") }}</v-btn
            >
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
          <v-img :src="image" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

@Component({
  components: {
  }
})
export default class BuyPrinter extends Vue {

  @Prop({ type: String, required: true, default: '' }) model!: string
  @Prop({ type: String, required: true, default: '' }) image!: string
  @Prop({ type: String, required: false, default: '' }) price!: string

  orderName: string = ""
  phoneNumber: string = ""
  email: string = ""
  companyName: string = ""
  valid: boolean = false
  snackbar: boolean = false
  snackbarText: string = ''
  snackbarError: boolean = false

  async submit () {
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
          Модель: `${this.model}`,
          Цена: `${this.price}`
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

}

</script>

<style scoped>
</style>
