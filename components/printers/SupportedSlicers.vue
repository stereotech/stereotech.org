<template>
  <v-card>
    <v-container fluid grid-list-sm>
      <v-row class="text-center">
        <v-col cols="12">
          <h4
            class="headline text-uppercase font-weight-light text-center"
          >{{ $store.state.lang.software.choose }}</h4>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img src="software/steslicer.webp" />
          <h4
            class="headline text-uppercase font-weight-regular"
          >{{ $store.state.lang.software.steslicer.title }}</h4>
          <p
            class="title text-uppercase font-weight-light"
          >{{ $store.state.lang.software.steslicer.add1 }}</p>
          <v-btn color="primary" nuxt to="/software" depressed>{{ $store.state.lang.know_more }}</v-btn>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img src="software/cura.webp" />
          <h4
            class="headline text-uppercase font-weight-regular"
          >{{ $store.state.lang.software.cura.title }}</h4>
          <p
            class="title text-uppercase font-weight-light"
          >{{ $store.state.lang.software.cura.description }}</p>
          <v-btn
            color="primary"
            href="https://ultimaker.com/en/products/ultimaker-cura-software"
            target="_blank"
            depressed
          >{{ $store.state.lang.know_more }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
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
