<template>
  <v-card>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h4 class="display-1 text-uppercase font-weight-light text-center">
            {{ title }}
          </h4>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img :src="image"></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <p>{{ description }}</p>
          <v-col
            class="text-center text-sm-left" 
            v-if="buttons"
          >
            <v-btn 
              color="primary"
              class="mr-1"
              v-for="(btnName, btnLink) in buttons"
              :key="btnLink"
              nuxt
              :to="localePath(btnLink)"
            >
              {{ btnName }}
            </v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, } from 'vue-property-decorator'

@Component
export default class PrinterSelector extends Vue {

  @Prop({ type: String, required: true, default: '' }) title!: string
  @Prop({ type: String, required: true, default: '' }) image!: string
  @Prop({ type: String, required: true, default: '' }) description!: string
  @Prop({ type: Object, required: false, default: (): {[key: string]: string} => { return {}} }) buttons!: {[key: string]: string}

}

</script>


<style>
</style>
