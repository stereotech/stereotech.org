<template>
  <v-card>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h4 class="display-1 text-uppercase font-weight-light text-center">
            {{ model.model }}
          </h4>
          <p class="title font-weight-light text-center">
            {{ model.description }}
          </p>
        </v-col>

        <v-col cols="12" sm="6" v-if="model.image">
          <v-img
            :src="`https://api2.stereotech.org/${model.image.path}`"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <!-- <v-radio-group
            v-if="selectExtruder.length > 1"
            @change="changeExtruder"
            v-model="currentExtruderVariant"
            dense
          >
            <v-radio
              v-for="(variant, index) in getExtruderVariants"
              :key="index"
              :value="variant"
              color="primary"
              class="text-truncate"
            >
              <template v-slot:label>
                <v-list-item class="text-truncate">
                  <v-list-item-content>
                    <v-list-item-title class="text-truncate">{{
                      variant.name
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="text-truncate">{{
                      variant.description
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-radio>
          </v-radio-group> -->
          <v-radio-group
            v-if="selectVolume.length > 1"
            @change="changeVolume"
            v-model="currentPrintVolume"
            dense
          >
            <v-radio
              v-for="(variant, index) in getPrintVolumeVariants"
              :key="index"
              :value="variant"
              color="primary"
            >
              <template v-slot:label>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{ variant.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{
                      variant.description
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-radio>
          </v-radio-group>
          <!-- <v-radio-group
            v-if="selectFiveAxis.length > 1"
            @change="changeFiveAxis"
            v-model="currentFiveAxisType"
            dense
          >
            <v-radio
              v-for="(variant, index) in getFiveAxisVariants"
              :key="index"
              :value="variant"
              color="primary"
            >
              <template v-slot:label>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{ variant.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{
                      variant.description
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-radio>
          </v-radio-group> -->
          <v-col class="text-center text-sm-left">
            <v-btn color="primary" @click="$vuetify.goTo('#buyPrinterForm')">{{
              $t("Заказать")
            }}</v-btn>

            <v-btn color="accent" nuxt :to="localePath('/resellers')">{{
              $t("Где купить")
            }}</v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType, PrinterType } from '~/types/printerVariant'

@Component
export default class PrinterSelector extends Vue {
  @Model('change', {
    type: Object, default: (): any => {
      return {
        model: '',
        image: {
          path: ''
        },
        printerType: PrinterType.ThreeAxis,
        extruderType: ExtruderType.Dual,
        printVolumeType: PrintVolumeType.Standard,
        fiveAxisType: FiveAxisType.Normal,
        description: '',
        buyImage: {
          path: ''
        }
      }
    }
  }) model!: any
  @Prop({ type: Array, default: () => { return [] } }) items!: any[]
  @Prop({ type: String, default: " " }) price!: String


  get selectExtruder (): ExtruderType[] {
    let extruderValues: ExtruderType[] = []
    this.items.forEach(v => {
      if (extruderValues.indexOf(v.extruderType) < 0) {
        extruderValues.push(v.extruderType)
      }
    })
    return extruderValues
  }

  get selectVolume (): PrintVolumeType[] {
    let volumeValues: PrintVolumeType[] = []
    this.items.filter(v => !(this.selectExtruder.length > 1) || v.extruderType === this.currentExtruderVariant.value).forEach(v => {
      if (volumeValues.indexOf(v.printVolumeType) < 0) {
        volumeValues.push(v.printVolumeType)
      }
    })
    return volumeValues
  }

  get selectFiveAxis (): FiveAxisType[] {
    let fiveAxisValues: FiveAxisType[] = []
    if (!this.currentPrintVolume)
      return fiveAxisValues
    this.items.filter(v => !(this.selectVolume.length > 1) || v.printVolumeType === this.currentPrintVolume.value).forEach(v => {
      if (fiveAxisValues.indexOf(v.fiveAxisType) < 0) {
        fiveAxisValues.push(v.fiveAxisType)
      }
    })
    return fiveAxisValues
  }

  // get extruderVariants (): {
  //   name: string,
  //   description: string,
  //   value: ExtruderType
  // }[] {
  //   return [
  //     {
  //       name: this.$tc('Один экструдер'),
  //       description: this.$tc('Надежная печать одним материалом'),
  //       value: ExtruderType.Single
  //     },
  //     {
  //       name: this.$tc('Два экструдера'),
  //       description: this.$tc('Печать различными материалами двумя экструдерами'),
  //       value: ExtruderType.Dual
  //     }
  //   ]
  // }

  // get getExtruderVariants () {
  //   return this.extruderVariants.filter(v => this.selectExtruder.indexOf(v.value) >= 0)
  // }

  get getPrintVolumeVariants () {
    return this.printVolumeVariants.filter(v => this.selectVolume.indexOf(v.value) >= 0)
  }

  // get getFiveAxisVariants () {
  //   return this.fiveAxisVariants.filter(v => this.selectFiveAxis.indexOf(v.value) >= 0)
  // }

  currentExtruderVariant: {
    name: string,
    description: string,
    value: ExtruderType
  } = {
      name: '',
      description: '',
      value: ExtruderType.Dual
    }

  get printVolumeVariants (): {
    name: string,
    description: string,
    value: PrintVolumeType
  }[] {
    return [
      {
        name: this.$tc('Стандартная область печати'),
        description: '230x230x150мм',
        value: PrintVolumeType.StandardFiveAxis
      },
      {
        name: this.$tc('Стандартная область печати'),
        description: '200x210x200мм',
        value: PrintVolumeType.Standard
      },
      {
        name: this.$tc('Увеличенная область печати'),
        description: '300x310x300мм',
        value: PrintVolumeType.Extended
      },
      {
        name: this.$tc('Увеличенная область печати'),
        description: '330x330x250мм',
        value: PrintVolumeType.ExtendedFiveAxis
      }
    ]
  }

  // get fiveAxisVariants (): {
  //   name: string,
  //   description: string,
  //   value: FiveAxisType
  // }[] {
  //   return [
  //     {
  //       name: this.$tc('5D принтер'),
  //       description: this.$tc('Пятиосевой принтер без дополнительных устройств'),
  //       value: FiveAxisType.Normal
  //     },
  //     {
  //       name: this.$tc('Гибридный 5D принтер'),
  //       description: this.$tc('Пятиосевой принтер с закрепляемой платформой'),
  //       value: FiveAxisType.Hybrid
  //     }
  //   ]
  // }

  currentFiveAxisType: {
    name: string,
    description: string,
    value: FiveAxisType
  } = {
      name: '',
      description: '',
      value: FiveAxisType.Hybrid
    }

  currentPrintVolume: {
    name: string,
    description: string,
    value: PrintVolumeType
  } = {
      name: '',
      description: '',
      value: PrintVolumeType.Standard
    }

  changeExtruder (value: any) {
    this.$emit('change', this.items.find(v => (v.extruderType === value.value
      && v.printVolumeType === this.currentPrintVolume.value
      && v.fiveAxisType === this.currentFiveAxisType.value)) || this.items[0])
  }

  changeVolume (value: any) {
    this.$emit('change', this.items.find(v => (v.extruderType === this.currentExtruderVariant.value
      && v.printVolumeType === value.value
      && v.fiveAxisType === this.currentFiveAxisType.value)) || this.items[0])
  }

  changeFiveAxis (value: any) {
    this.$emit('change', this.items.find(v => (v.extruderType === this.currentExtruderVariant.value
      && v.printVolumeType === this.currentPrintVolume.value
      && v.fiveAxisType === value.value)) || this.items[0])
  }


}

</script>

<style>
</style>
