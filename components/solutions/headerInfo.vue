<template>
  <v-container>
    <v-row align="center">
      <v-col cols="6">
        <v-img src="stereotech.jpg"></v-img>
        <p offset-md="3" class="subtitle">новые возможности Аддитивного производства</p>
      </v-col>
      <v-col cols="6" class="text center">
        <p class="phoneNumber">+7 (902) 364 84 04</p>
        <p class="email">info@ste3d.ru</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class headerInfo extends Vue {

}
</script>

<style scoped>
p {
  text-align: center;
}
.phoneNumber {
  color: rgb(8, 93, 204);
  font-size: 36pt;
}
.subtitle {
  background-color: lightgrey;
}
.email {
  font-size: 20pt;
}
</style>