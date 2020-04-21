<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col lg="10" v-for="(printer, index) in printers" :key="index">
        <ProductCard
          :image="printer.image"
          :title="printer.title"
          :description="printer.description"
          :link="printer.link"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductCard from '~/components/ProductCard.vue'

@Component({
  components: {
    ProductCard
  },
  head: {
    title: 'Промышленные принтеры'
  }
})
export default class Industrial extends Vue {
  printers: {
    image: string,
    title: string,
    description: string,
    link: string
  }[] = []
    async mounted(){
      this.printers.push({
        image: '/printers/industrial/series6.jpg',
        title: this.$tc('Серия 6xx'),
        description: this.$tc('Шестиосевая установка аддитивного производства на базе промышленного манипулятора для производства полимерных деталей'),
        link: '/industrial/series6'
      },
      {
        image: '/printers/industrial/series8.jpg',
        title: this.$tc('Серия 8xx'),
        description: this.$tc('Восьмиосевая установка аддитивного производства на базе промышленного манипулятора для производства прочных композитных деталей'),
        link: '/industrial/series8'
      })
    }
}

</script>

<style>
</style>