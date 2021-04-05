<template>

  <v-container fluid>
      <v-row>
          <v-col cols="12">
            <v-img
            :src="require('~/static/support/series5_banner.jpg?webp')"
            class="white--text align-center text-center"
            :gradient="'to bottom, rgba(2,119,189,0), rgba(2, 119, 189, 0.8), rgba(2,119,189,0)'"
            >
            <h4 class="display-1 font-weight-light">
                {{ title }}
            </h4>
            <v-form>
                <v-container>
                <v-row>
                    <v-col cols="12" sm="10">
                    <v-text-field
                        solo
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="2">  
                    <v-btn color="accent" block large>
                        <v-icon>mdi-magnify</v-icon>
                        {{$t("Поиск")}}
                    </v-btn>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </v-img>
          </v-col>
      </v-row>
  </v-container>

</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class SupportBanner extends Vue{
    @Prop({ type: String, default: ''}) title!: string

}
</script>

<style>

</style>