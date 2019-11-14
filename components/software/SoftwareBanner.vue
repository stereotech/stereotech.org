<template>
  <v-col cols="12">
    <v-card dark color="primary">
      <v-container grid-list-xs>
        <v-row align="center">
          <v-col cols="12" sm="6">
            <v-img src="/printers/common/cluster1.webp" max-height="650" />
          </v-col>
          <v-col class="text-center" cols="12" sm="6">
            <h4 class="display-1 text-uppercase font-weight-light">
              {{ $t('software.title') }}
            </h4>
            <p class="title text-uppercase font-weight-light">
              {{ $t('software.description') }}
            </p>
            <v-btn color="accent" large nuxt to="/software">
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
export default class SoftwareBanner extends Vue {

}

</script>
