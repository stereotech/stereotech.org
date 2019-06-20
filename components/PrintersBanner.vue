<template>
  <v-flex xs12>
    <v-card>
      <v-container fluid grid-list-sm>
        <v-layout row wrap align-center>
          <v-flex xs12 v-if="$vuetify.breakpoint.xsOnly">
            <v-img :src="`/printers/ste520/black-front.webp`"></v-img>
          </v-flex>
          <v-flex xs12 sm6 text-xs-center>
            <h1 class="display-3 text-uppercase font-weight-light">{{$t('ste520')}}</h1>
            <p class="title text-uppercase font-weight-light">{{$t('printer.ste520.description')}}</p>
            <v-btn large color="primary" nuxt :to="`/ste520`">{{$t('know-more')}}</v-btn>
            <v-btn
              large
              color="success"
              href="https://ste3d.ru/ste520"
              target="_blank"
            >{{$t('printer.ste520.state')}}</v-btn>
          </v-flex>
          <v-flex xs12 v-if="$vuetify.breakpoint.xsOnly">
            <v-img :src="`/printers/ste320/black-front.webp`"></v-img>
          </v-flex>
          <v-flex xs12 sm6 text-xs-center>
            <h1 class="display-3 text-uppercase font-weight-light">{{$t('ste320')}}</h1>
            <p class="title text-uppercase font-weight-light">{{$t('printer.ste320.description')}}</p>
            <v-btn large color="primary" nuxt :to="`/ste320`">{{$t('know-more')}}</v-btn>
            <v-btn
              large
              color="success"
              href="https://ste3d.ru/ste320"
              target="_blank"
            >{{$t('printer.ste320.state')}}</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class PrintersBanner extends Vue {
}
</script>
