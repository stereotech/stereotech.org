<template>
  <v-card dark color="primary">
      <h1 class="text-center font-weight-light">
        <slot></slot>
      </h1>

  </v-card>
      
</template>

<script>
import { Vue, Component} from 'vue-property-decorator'
@Component
export default class textStripe extends Vue{

}
</script>

<style>
    /* #str{
        font-size: 20pt
    } */
</style>
