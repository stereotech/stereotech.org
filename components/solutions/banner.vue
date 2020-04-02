<template>
  <v-parallax src="/main/bg1.webp">
  <v-row>
    <v-col class="text-center">
      <h2 class="display-3">Первый в мире настольный 5D принтер Stereotech STE 520 от российской компании</h2>
    </v-col>
 
  </v-row>

  </v-parallax>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator'
import BenefitsPanel from '~/components/benefits/BenefitsPanel.vue'
@Component({
  components:{
    BenefitsPanel
  }
})
export default class banner extends Vue{

}
</script>

<style>
  /* .bannerText{
    align-content: center
  } */
</style>