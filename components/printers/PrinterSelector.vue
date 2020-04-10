<template>
  <v-card>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="6" class="text-center">
         
          <v-img :src="model.image" />
        </v-col>
        <v-col cols="12" sm="6">
          <h4 class="display-1 text-uppercase font-weight-light text-center">{{ model.model }}</h4>
          <p class="subtitle-1 text-center">{{ model.description }}</p>
          <v-radio-group
            v-if="selectExtruder.length > 1"
            @change="changeExtruder"
            v-model="currentExtruderVariant"
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
                    <p class="subtitle-1">{{variant.name}}</p>
                    <p class="body-2">{{ variant.description }}</p>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="selectVolume.length > 1"
            @change="changeVolume"
            v-model="currentPrintVolume"
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
                    <p class="subtitle-1">{{variant.name}}</p>
                    <p class="body-2">{{ variant.description }}</p>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-radio>
          </v-radio-group>
          <v-radio-group
            v-if="selectFiveAxis.length > 1"
            @change="changeFiveAxis"
            v-model="currentFiveAxisType"
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
                    <p class="subtitle-1">{{variant.name}}</p>
                    <p class="body-2">{{ variant.description }}</p>
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
import { PrinterVariant, ExtruderType, PrintVolumeType, FiveAxisType } from '~/types/printerVariant'

@Component
export default class PrinterSelector extends Vue {
  @Model('change', { type: Object }) model!: PrinterVariant
  @Prop({ type: Array, default: () => { return [] } }) items!: PrinterVariant[]


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

  extruderVariants: any[] = [
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

  printVolumeVariants: any[] = [
    {
      name: 'Стандартная область печати',
      description: '200x210x200мм',
      value: PrintVolumeType.Standard
    },
    {
      name: 'Стандартная область печати, увеличенная по оси Z',
      description: '200x210x300мм',
      value: PrintVolumeType.StandardLong
    },
    {
      name: 'Увеличенная область печати',
      description: '300x310x300мм',
      value: PrintVolumeType.Extended
    },
    {
      name: 'Увеличенная область печати, удлиненная по оси Z',
      description: '300x310x400мм',
      value: PrintVolumeType.ExtendedLong
    }
  ]

  fiveAxisVariants: any[] = [
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
      && v.fiveAxisType === value.value)) || this.items[0])  }

  // async mounted(){
  //   this.extruderVariants.push({
  //     name: this.$tc('Один экструдер'),
  //     description: this.$tc('Надежная печать одним материалом'),
  //     value: ExtruderType.Single
  //   },
  //   {
  //     name: this.$tc('Два экструдера'),
  //     description: this.$tc('Печать различными материалами двумя экструдерами'),
  //     value: ExtruderType.Dual
  //   })

  //   this.printVolumeVariants.push(  {
  //     name: this.$tc('Стандартная область печати'),
  //     description: '200x210x200мм',
  //     value: PrintVolumeType.Standard
  //   },
  //   {
  //     name: this.$tc('Стандартная область печати, увеличенная по оси Z'),
  //     description: '200x210x300мм',
  //     value: PrintVolumeType.StandardLong
  //   },
  //   {
  //     name: this.$tc('Увеличенная область печати'),
  //     description: '300x310x300мм',
  //     value: PrintVolumeType.Extended
  //   },
  //   {
  //     name: this.$tc('Увеличенная область печати, удлиненная по оси Z'),
  //     description: '300x310x400мм',
  //     value: PrintVolumeType.ExtendedLong
  //   })

  //   this.fiveAxisVariants.push(    {
  //     name: this.$tc('5D принтер'),
  //     description: this.$tc('Пятиосевой принтер без дополнительных устройств'),
  //     value: FiveAxisType.Normal
  //   },
  //   {
  //     name: this.$tc('Гибридный 5D принтер'),
  //     description: this.$tc('Пятиосевой принтер с закрепляемой платформой'),
  //     value: FiveAxisType.Hybrid
  //   })
  // }    
}

</script>

<style>
</style>