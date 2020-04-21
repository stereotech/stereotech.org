<template>
  <v-col cols="12">
    <v-card>
      <v-parallax :src="image">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="auto" class="text-center">
              <h1 class="display-3 font-weight-thin text-uppercase">5D Printing</h1>
              <h4 class="display-1">{{$t('Новые возможности аддитивного производства')}}</h4>
              <v-btn
                class
                v-if="buttonLink !== ''"
                color="accent"
                large
                nuxt
                :to="localePath(buttonLink)"
              >{{$t('Узнать больше')}}</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class MainParalax extends Vue {
  @Prop({ type: String, required: true, default: '' }) image!: string
  @Prop({ type: String, required: false, default: '' }) buttonLink!: string
}
</script>
