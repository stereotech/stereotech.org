<template>
  <v-card>
      <v-list>
          <v-list-item :href="`http://download.stereotech.org/manuals/${$route.params.section}_${$i18n.locale}.pdf`" target="_blank">
              <v-list-item-icon>
                  <v-icon>mdi-download</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                  {{$t('Скачать PDF')}}
              </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <template v-for="(header, index) in manualHeaders">
            <v-list-item :key="index" :to="localePath(`/support/${$route.params.category}/${$route.params.section}/${$route.params.file}#${header.id}`)" nuxt>
                <v-list-item-title>
                    {{header.text}}
                </v-list-item-title>
            </v-list-item>
          </template>
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