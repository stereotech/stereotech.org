<template>
  <v-flex xs12>
    <v-card>
      <v-parallax :src="image">
        <v-layout align-center column justify-center>
          <h1 class="display-4 font-weight-thin text-uppercase">5D Printing</h1>
          <h4 class="display-1">{{ $t('main.newOpportunities') }}</h4>
          <v-btn
            v-if="buttonLink !== ''"
            color="accent"
            large
            nuxt
            :to="buttonLink"
          >{{$t('know-more')}}</v-btn>
        </v-layout>
      </v-parallax>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class MainParalax extends Vue {
  @Prop({ type: String, required: true, default: '' }) image!: string
  @Prop({ type: String, required: false, default: '' }) buttonLink!: string
}
</script>
