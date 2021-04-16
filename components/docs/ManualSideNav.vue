<template>
  <v-card>
      <v-list>
          <v-list-item v-for="(header, index) in manualHeaders" :key="index" :to="localePath(`/support/${$route.params.category}/${$route.params.section}/${$route.params.file}#${header.id}`)" nuxt>
              <v-list-item-title
                class="font-weight-bold"             
              >
                  {{header.text}}
              </v-list-item-title>
          </v-list-item>
      </v-list>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ManualSideNav extends Vue{
    @Prop({type: Array, required: true, default:()=>{return []}}) manualHeaders!: any[]

}
</script>

<style>

</style>