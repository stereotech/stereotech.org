<template>
  <v-col cols="12">
    <v-card>
      <v-container fluid grid-list-sm>
        <v-row class="text-center">
          <v-col cols="12">
            <h4
              class="headline text-uppercase font-weight-light text-center"
            >
              {{ $t('software.choose') }}
            </h4>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img src="/printers/software/steslicer.webp" />
            <h4
              class="headline text-uppercase font-weight-regular"
            >
              {{ $t('software.steslicer.title') }}
            </h4>
            <p class="title text-uppercase font-weight-light">
              {{ $t('software.steslicer.add1') }}
            </p>
            <v-btn color="primary" nuxt to="/software">
              {{ $t('know-more') }}
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img src="/printers/software/cura.webp" />
            <h4 class="headline text-uppercase font-weight-regular">
              {{ $t('software.cura.title') }}
            </h4>
            <p class="title text-uppercase font-weight-light">
              {{ $t('software.cura.description') }}
            </p>
            <v-btn
              color="primary"
              href="https://ultimaker.com/en/products/ultimaker-cura-software"
              target="_blank"
            >
              {{ $t('know-more') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class SupportedSlicers extends Vue {

}

</script>

<style>
</style>
