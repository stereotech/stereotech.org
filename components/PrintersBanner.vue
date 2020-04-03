<template>
  <v-col cols="12">
    <v-card>
      <v-container>
        <v-row align="center">
          <v-col cols="12" class="d-flex d-sm-none">
            <v-img :src="`/printers/ste520/black-front.webp`" />
          </v-col>
          <v-col class="text-center" cols="12" sm="6">
            <h1 class="display-3 text-uppercase font-weight-light">{{ $store.state.lang.ste520 }}</h1>
            <p
              class="title text-uppercase font-weight-light"
            >{{ $store.state.lang.printer.ste520.description }}</p>
            <v-btn large color="primary" nuxt :to="`/series5`">{{ $store.state.lang.know_more }}</v-btn>
            <v-btn
              large
              color="success"
              href="https://ste3d.ru/series5"
              target="_blank"
            >{{ $store.state.lang.printer.ste520.state }}</v-btn>
          </v-col>
          <v-col class="d-flex d-sm-none" cols="12">
            <v-img :src="`/printers/ste320/black-front.webp`" />
          </v-col>
          <v-col class="text-center" cols="12" sm="6">
            <h1 class="display-3 text-uppercase font-weight-light">{{ $store.state.lang.ste320 }}</h1>
            <p
              class="title text-uppercase font-weight-light"
            >{{ $store.state.lang.printer.ste320.description }}</p>
            <v-btn large color="primary" nuxt :to="`/series3`">{{ $store.state.lang.know_more }}</v-btn>
            <v-btn
              large
              color="success"
              href="https://ste3d.ru/series3"
              target="_blank"
            >{{ $store.state.lang.printer.ste320.state }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PrintersBanner extends Vue {
}
</script>
