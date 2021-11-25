<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="3">
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>
                {{ $t("Контакты для прессы") }}
              </v-card-title>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Воропаева Вероника</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item href="tel:+79023648404">
                <v-list-item-title>+79023648404</v-list-item-title>
              </v-list-item>
              <v-list-item href="mailto:voropaeva@5dtech.pro" target="_blank">
                <v-list-item-title>voropaeva@5dtech.pro</v-list-item-title>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-list-item
                href="https://drive.google.com/drive/folders/11fw6TStFLdtxZ66Oxrg4xrI7gCEs7wBd?usp=sharing"
                target="_blank"
              >
                <v-list-item-title
                  ><v-icon left>mdi-google-drive</v-icon>
                  {{ $t("Фотоматериалы") }}</v-list-item-title
                >
              </v-list-item>
              <v-list-item nuxt to="/info/press/video" exact>
                <v-list-item-title>
                  {{ $t("Видеоматериалы") }}</v-list-item-title
                >
              </v-list-item>
              <v-list-item nuxt to="/info/press" exact>
                <v-list-item-title>
                  {{ $t("Презентация проекта") }}</v-list-item-title
                >
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="10" md="6">
        <v-row>
          <v-col cols="12">
            <nuxt-child />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="10">
        <v-card>
          <v-card-title>
            {{ $t("Брендбук") }}
          </v-card-title>
          <StereotechBrandbook />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { StereotechBrandbook } from '@stereotech/stereotech-brandbook'

@Component({
  components: {
    StereotechBrandbook
  }
})
export default class PressPage extends Vue {

}

</script>

<style>
</style>