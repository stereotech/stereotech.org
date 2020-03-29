<template>
  <v-col class="text-center" cols="12">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-img :src="`/printers/${model}/clusterItem.png`" />
        </v-col>
        <v-col cols="12" md="6">
          <h2>Заказ</h2>
          <h3 class="text-uppercase">{{ getPrinterModelName()}}</h3>
          <h3>{{ getPrinterPrice()}}</h3>

          <v-form v-model="valid">
            <v-select
              v-model="printerModel"
              :items="getModelsDescriptions(series)"
              outlined
              label="Модель"
            ></v-select>

            <v-text-field
              v-model="orderName"
              :rules="[v => !!v || 'Требуется ФИО']"
              label="ФИО"
              required
              outlined
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="[v => !!v || 'Требуется E-mail', v => /.+@.+\..+/.test(v) || 'Введенный E-mail неверен']"
              label="Почта"
              required
              outlined
            ></v-text-field>

            <v-text-field
              v-model="phoneNumber"
              v-mask="mask"
              label="Номер телефона"
              :rules="[v => !!v || 'Требуется номер телефона']"
              outlined
            ></v-text-field>

            <v-text-field v-model="companyName" label="Название компании" outlined></v-text-field>

            <v-btn :disabled="!valid" color="primary" @click="submit()" large>Заказать</v-btn>
          </v-form>
          <v-snackbar v-model="snackbar" :color="snackbarError ? 'error' : 'success'">
            {{ snackbarText }}
            <v-btn text @click="snackbar = false">Закрыть</v-btn>
          </v-snackbar>
          <small>
            This site is protected by reCAPTCHA and the Google
            <a
              href="https://policies.google.com/privacy"
            >Privacy Policy</a> and
            <a href="https://policies.google.com/terms">Terms of Service</a> apply.
          </small>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-card color="accent" dark>
      <h4 class="display-3 text-uppercase font-weight-light">{{ title }}</h4>
      <p class="display-1 text-uppercase font-weight-light">{{ price }}</p>

      <v-btn large color="success" :href="`https://ste3d.ru/${model}`" target="_blank">{{ state }}</v-btn>
    </v-card>-->
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import VueTheMask from 'vue-the-mask'
import gql from 'graphql-tag'
import { Model } from '~/types/model'
Vue.use(VueTheMask)

@Component({
  components: {
  }
})
export default class BuyPrinter extends Vue {
  @Prop({ type: String, required: true, default: 'ste320' }) model!: string
  @Prop({ type: String, required: true, default: 'STE 320' }) title!: string
  @Prop({ type: String, required: true, default: '3xx' }) series!: string

  private orderName: string = ""
  private phoneNumber: string = ""
  private email: string = ""
  private companyName: string = ""
  private mdl: string = ""
  private printerModel: string = ""
  private printerPrice: string = ""
  private itemsArray: Model[] = []
  private mask: string = "+7(###) ###-####"
  private valid: boolean = false
  private snackbar: boolean = false
  private snackbarText: string = ''
  private snackbarError: boolean = false
  private series3xxModels: Model[] = [{
    modelName: '320 student edition',
    modelDescription: '320 base с пособием для обучения школьников и студентов. Скидка 20% для учебных заведений при покупке по прямому договору.',
    price: '97200'
  },
  {
    modelName: '320 teacher edition',
    modelDescription: '320 pro с пособием для обучения школьников и студентов. Скидка 20% для учебных заведений при покупке по прямому договору.',
    price: '100000'
  },
  {
    modelName: '320 base',
    modelDescription: 'Стартовый принтер для обучения, производства и разработки с одним экструдером и закрытой камерой',
    price: '129000'
  },
  {
    modelName: '320 pro',
    modelDescription: 'Продвинутый принтер для обучения, производства и разработки с двумя экструдерами и закрытой камерой',
    price: '139000'
  },
  {
    modelName: '320 plus',
    modelDescription: 'Продвинутый принтер с двумя экструдерами и зоной печати 200x210x300 мм',
    price: '159000'
  },
  {
    modelName: '330 pro',
    modelDescription: 'Продвинутый принтер с двумя экструдерами и зоной печати 300x310x300 мм',
    price: '198000'
  },
  {    modelName: '320 Carbon',
    modelDescription: 'Продвинутый принтер для производства и разработки для печати непрерывным углеволокном',
    price: '399000'  }
  ]

  private series5xxModels: Model[] = [{
    modelName: '520 pro',
    modelDescription: 'Пятиосевой принтер для печати прочных деталей',
    price: '498000'
  },
  {
    modelName: '520 hybrid',
    modelDescription: 'Универсальный принтер для решения уникальных задач',
    price: '568000'
  },
  {
    modelName: '530 pro',
    modelDescription: 'Пятиосевой принтер для печати прочных деталей с зоной печати 330x330x250 мм',
    price: '578000'  },
  {
    modelName: '530 hybrid',
    modelDescription: 'Универсальный принтер для решения уникальных задач с зоной печати в режиме 3D 300x310x300 мм',
    price: '648000'  }]

  private specialSeries: Model[] = [{    modelName: '320 Glaze',
    modelDescription: 'Принтер для печати уникальных изделий из глазури и шоколада',
    price: '198000'  },
  {
    modelName: '520 Glaze',
    modelDescription: 'Универсальный принтер для печати уникальных изделий из глазури и шоколада',
    price: '568000'  },
  {
    modelName: '520 Chocolatier',
    modelDescription: 'Профессиональная машина для изготовления уникальных изделий из шоколада с темперирующей машиной',
    price: '750000'  },
  {
    modelName: '320 Carbon',
    modelDescription: 'Продвинутый принтер для производства и разработки для печати непрерывным углеволокном',
    price: '750000'  },
  {
    modelName: '520 Carbon',
    modelDescription: 'Инновационный принтер для печати прочных деталей с непрерывным углеволокном',
    price: '698000'  }]

  private industrialSeries: Model[] = [{
    modelName: '3000',
    modelDescription: 'Шестиосевая машина АП на базе промышленного манипулятора для производства полимерных деталей',
    price: 'Цена по запросу'  },
  {
    modelName: '5000',
    modelDescription: 'Восьмиосевая машина АП на базе промышленного манипулятора для производства прочных полимерных деталей',
    price: 'Цена по запросу'  },
  {
    modelName: '5000 Carbon',
    modelDescription: 'Восьмиосевая машина АП на базе промышленного манипулятора для производства прочных композитных деталей',
    price: 'Цена по запросу'  }]

  private get joinFormData () {
    const str = `
      Имя заказчика: ${this.orderName},
      Телефон: ${this.phoneNumber},
      E-Mail: ${this.email},
      Название компании: ${this.companyName},
      Модель: ${this.mdl},
      Описание модели: ${this.printerModel}
      Цена: ${this.printerPrice}
    `
    return str
  }

  private getModelsArray (str: String) {
    //let arr 
    if (str === '3xx') {
      this.itemsArray = this.series3xxModels
    }
    else if (str === "5xx") {
      this.itemsArray = this.series5xxModels

    }
    else if (str === "special") {
      this.itemsArray = this.specialSeries

    }
    else if (str === "industrial") {
      this.itemsArray = this.industrialSeries
    }
    //console.log(str)
    return this.itemsArray
  }
  private getModelsDescriptions (str: string) {
    //let itemsArr: Model[] = []
    let arr: string[] = []

    for (let index = 0; index < this.getModelsArray(str).length; index++) {
      arr.push(this.getModelsArray(str)[index].modelDescription)
    }
    return arr

  }

  private getPrinterPrice () {
    let item = this.getModelInfo(this.printerModel)
    if (item == undefined) {
      if (this.series === '3xx') {
        this.printerPrice = '129000'
        this.printerModel = "Стартовый принтер для обучения, производства и разработки с одним экструдером и закрытой камерой"

      }
      else if (this.series === '5xx') {
        this.printerPrice = '498000'
        this.printerModel = "Пятиосевой принтер для печати прочных деталей"
      }
      else if (this.series === 'special') {
        this.printerPrice = '698000'
        this.printerModel = "Инновационный принтер для печати прочных деталей с непрерывным углеволокном"
      }
      else if (this.series === 'industrial') {
        this.printerPrice = 'Цена по запросу'
        this.printerModel = "Шестиосевая машина АП на базе промышленного манипулятора для производства полимерных деталей"

      }
    }
    else {
      this.printerPrice = item.price
    }
    return this.printerPrice
  }

  private getPrinterModelName () {
    let item = this.getModelInfo(this.printerModel)
    if (item == undefined) {
      if (this.series === '3xx') {
        this.mdl = '320 base V4'
      }
      else if (this.series === '5xx') {
        this.mdl = '520 pro V4'
      }
      else if (this.series === 'special') {
        this.mdl = '520 Carbon V4'
      }
      else if (this.series === 'industrial') {
        this.mdl = '3000'
      }
    }
    else {
      this.mdl = item.modelName
    }
    return this.mdl
  }

  private getModelInfo (str: string) {

    let modelInfo = this.getModelsArray(str).filter(mass => mass.modelDescription === str)
    console.log(modelInfo)
    return modelInfo[0]

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
      this.mdl = ""
      this.printerPrice = ""
      this.printerModel = ""

    } catch (error) {
      this.snackbarText = 'Произошла ошибка при отправке формы, ' + error
      this.snackbarError = true
      this.snackbar = true
    }
  }
  get state (): string {
    if (this.model === 'ste320') {
      return this.$store.state.lang.printer.ste320.state
    } else if (this.model === 'ste520') {
      return this.$store.state.lang.printer.ste520.state
    }
    return ''
  }
}

</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
