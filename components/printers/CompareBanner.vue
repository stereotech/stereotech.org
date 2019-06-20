<template>
  <v-flex xs12>
    <v-card dark>
      <v-img src="/printers/common/front-black.webp" max-height="800">
        <slot></slot>
      </v-img>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class CompareBanner extends Vue {

}

</script>
