<template>
  <v-col cols="12">
    <v-card dark class="d-none d-sm-flex">
      <v-img
        src="/printers/common/front-black.webp"
        srcset="/printers/common/front-black.webp"
        max-height="800"
      />
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class CompareBanner extends Vue {

}

</script>
