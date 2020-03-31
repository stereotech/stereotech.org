<template>
  <v-container>
    <v-layout row wrap>
      <v-flex md6>
        <v-img src="/stereotech.jpg"></v-img>
        <p offset-md="3" class="subtitle">новые возможности Аддитивного производства</p>
      </v-flex>
      <v-flex md6 align-self-center>
        <p class="phoneNumber">+7 (902) 364 84 04</p>
        <p class="email">info@ste3d.ru</p>
      </v-flex>
    </v-layout>
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