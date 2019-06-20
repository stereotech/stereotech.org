<template>
  <v-flex xs12>
    <v-card dark color="primary">
      <v-container grid-list-xs>
        <v-layout row wrap align-center>
          <v-flex xs12 sm6>
            <v-img src="/printers/common/cluster1.png" max-height="650"></v-img>
          </v-flex>
          <v-flex xs12 sm6 text-xs-center>
            <h4 class="display-1 text-uppercase font-weight-light">{{ $t('software.title') }}</h4>
            <p class="title text-uppercase font-weight-light">{{ $t('software.description') }}</p>
            <v-btn color="accent" large nuxt to="/software">{{$t('know-more')}}</v-btn>
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
export default class SoftwareBanner extends Vue {

}

</script>
