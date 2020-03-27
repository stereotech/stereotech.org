<template>
  <v-card dark color="primary">
      <p class="text-center" id="str">
        <slot></slot>
      </p>

  </v-card>
      
</template>

<script>
import { Vue, Component} from 'vue-property-decorator'
@Component
export default class textStripe extends Vue{

}
</script>

<style>
    #str{
        font-size: 25pt
    }
</style>
