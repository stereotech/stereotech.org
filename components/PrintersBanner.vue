<template>
  <v-col cols="12">
    <v-card>
      <v-container fluid grid-list-sm>
        <v-row align="center">
          <v-col v-if="$vuetify.breakpoint.xsOnly" cols="12">
            <v-img :src="`/printers/ste520/black-front.webp`" />
          </v-col>
          <v-col class="text-center" cols="12" sm="6">
            <h1 class="display-3 text-uppercase font-weight-light">{{ $t('ste520') }}</h1>
            <p class="title text-uppercase font-weight-light">{{ $t('printer.ste520.description') }}</p>
            <v-btn large color="primary" nuxt :to="`/ste520`">{{ $t('know-more') }}</v-btn>
            <v-btn
              large
              color="success"
              href="https://ste3d.ru/ste520"
              target="_blank"
            >{{ $t('printer.ste520.state') }}</v-btn>
          </v-col>
          <v-col v-if="$vuetify.breakpoint.xsOnly" cols="12">
            <v-img :src="`/printers/ste320/black-front.webp`" />
          </v-col>
          <v-col class="text-center" cols="12" sm="6">
            <h1 class="display-3 text-uppercase font-weight-light">{{ $t('ste320') }}</h1>
            <p class="title text-uppercase font-weight-light">{{ $t('printer.ste320.description') }}</p>
            <v-btn large color="primary" nuxt :to="`/ste320`">{{ $t('know-more') }}</v-btn>
            <v-btn
              large
              color="success"
              href="https://ste3d.ru/ste320"
              target="_blank"
            >{{ $t('printer.ste320.state') }}</v-btn>
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
