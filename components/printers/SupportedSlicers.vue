<template>
  <v-flex xs12>
    <v-card>
      <v-container fluid grid-list-sm>
        <v-layout row wrap text-xs-center>
          <v-flex xs12>
            <h4
              class="headline text-uppercase font-weight-light text-xs-center"
            >{{ $t('software.choose')}}</h4>
          </v-flex>
          <v-flex xs12 sm6>
            <v-img src="/printers/software/steslicer.webp"></v-img>
            <h4
              class="headline text-uppercase font-weight-regular"
            >{{$t('software.steslicer.title') }}</h4>
            <p class="title text-uppercase font-weight-light">{{ $t('software.steslicer.add1') }}</p>
            <v-btn color="primary" nuxt to="/software">{{ $t('know-more') }}</v-btn>
          </v-flex>
          <v-flex xs12 sm6>
            <v-img src="/printers/software/cura.webp"></v-img>
            <h4 class="headline text-uppercase font-weight-regular">{{$t('software.cura.title') }}</h4>
            <p class="title text-uppercase font-weight-light">{{ $t('software.cura.description') }}</p>
            <v-btn
              color="primary"
              href="https://ultimaker.com/en/products/ultimaker-cura-software"
              target="_blank"
            >{{ $t('know-more') }}</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class SupportedSlicers extends Vue {

}

</script>

<style>
</style>