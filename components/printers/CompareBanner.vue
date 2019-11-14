<template>
  <v-col cols="12">
    <v-card dark>
      <v-img src="/printers/common/front-black.webp" max-height="800">
        <slot />
      </v-img>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class CompareBanner extends Vue {

}

</script>
