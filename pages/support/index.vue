<template>
  <v-card>
    <v-img
      :src="require('~/static/support/series5_banner.jpg?webp')"
      class="white--text align-center text-center"
      :gradient="'to bottom, rgba(2,119,189,0), rgba(2, 119, 189, 0.8), rgba(2,119,189,0)'"
    >
      <h4 class="display-1 font-weight-light">
        {{ $t("Руководства пользователя") }}
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
    <v-card-title></v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-row justify="center">
            <v-col
              v-for="(category, index) in manualCategories"
              :key="index"
              cols="12"
              md="3"
            >
              <v-card>
                <v-card-title>{{ category.title }}</v-card-title>
                <v-card-text>
                  <v-img :src="category.image"></v-img>
                </v-card-text>
              </v-card>
            </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Support extends Vue {
  get manualCategories() {
    return [
      {
        title: this.$t("Принтеры"),
        image: "support/series5.jpg",
      },
      {
        title: this.$t("Программное обеспечение"),
        image: "support/steslicer.jpg",
      },
    ];
  }
}
</script>

<style>
</style>