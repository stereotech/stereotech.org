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

        <v-col cols="12" sm="6">
          <v-img :src="model.image"></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <v-radio-group
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
          <v-radio-group
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
          </v-radio-group>
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
    type: Object, default: (): PrinterVariant => {
      return {
        model: '',
        image: '',
        printerType: PrinterType.ThreeAxis,
        extruderType: ExtruderType.Single,
        printVolumeType: PrintVolumeType.Standard,
        fiveAxisType: FiveAxisType.Normal,
        description: '',
        buyImage: ''
      }
    }
  }) model!: PrinterVariant
  @Prop({ type: Array, default: () => { return [] } }) items!: PrinterVariant[]
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
    this.items.filter(v => !(this.selectVolume.length > 1) || v.printVolumeType === this.currentPrintVolume.value).forEach(v => {
      if (fiveAxisValues.indexOf(v.fiveAxisType) < 0) {
        fiveAxisValues.push(v.fiveAxisType)
      }
    })
    return fiveAxisValues
  }

  get extruderVariants (): {
    name: string,
    description: string,
    value: ExtruderType
  }[] {
    return [
      {
        name: 'Один экструдер',
        description: 'Надежная печать одним материалом',
        value: ExtruderType.Single
      },
      {
        name: 'Два экструдера',
        description: 'Печать различными материалами двумя экструдерами',
        value: ExtruderType.Dual
      }
    ]
  }

  get getExtruderVariants () {
    return this.extruderVariants.filter(v => this.selectExtruder.indexOf(v.value) >= 0)
  }

  get getPrintVolumeVariants () {
    return this.printVolumeVariants.filter(v => this.selectVolume.indexOf(v.value) >= 0)
  }

  get getFiveAxisVariants () {
    return this.fiveAxisVariants.filter(v => this.selectFiveAxis.indexOf(v.value) >= 0)
  }

  currentExtruderVariant: any = this.getExtruderVariants[0]

  get printVolumeVariants (): {
    name: string,
    description: string,
    value: PrintVolumeType
  }[] {
    return [
      {
        name: 'Стандартная область печати',
        description: '230x230x150мм',
        value: PrintVolumeType.StandardFiveAxis
      },
      {
        name: 'Стандартная область печати',
        description: '200x210x200мм',
        value: PrintVolumeType.Standard
      },
      {
        name: 'Увеличенная область печати',
        description: '300x310x300мм',
        value: PrintVolumeType.Extended
      },
      {
        name: 'Увеличенная область печати',
        description: '330x330x250мм',
        value: PrintVolumeType.ExtendedFiveAxis
      }
    ]
  }

  get fiveAxisVariants (): {
    name: string,
    description: string,
    value: FiveAxisType
  }[] {
    return [
      {
        name: '5D принтер',
        description: 'Пятиосевой принтер без дополнительных устройств',
        value: FiveAxisType.Normal
      },
      {
        name: 'Гибридный 5D принтер',
        description: 'Пятиосевой принтер с закрепляемой платформой',
        value: FiveAxisType.Hybrid
      }
    ]
  }

  currentFiveAxisType: any = this.fiveAxisVariants[0]
  currentPrintVolume: any = this.printVolumeVariants[0]

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
