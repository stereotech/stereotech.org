<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h1 class="title font-weight-light">{{ title }}</h1>
        </v-col>
        <v-col cols="12">
          <v-tabs centered center-active show-arrows v-model="tab">
            <v-tabs-slider></v-tabs-slider>
            <v-tab v-for="(item, index) in items" :key="index">{{
              item.name
            }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="(item, index) in items" :key="index">
              <v-container fluid>
                <v-row justify="center">
                  <v-col cols="12" sm="6" lg="4">
                    <video
                      v-if="link(item).endsWith('mp4')"
                      width="100%"
                      height="100%"
                      autoplay
                      loop
                    >
                      <source :src="link(item)" />
                    </video>
                    <v-img v-else :src="link(item)" />
                  </v-col>
                  <v-col cols="12" sm="6" lg="4">
                    <h3 class="font-weight-light">{{ item.name }}</h3>
                    <br />
                    <p>{{ item.description }}</p>
                    <p v-for="(key, index) in item.keys" :key="index">
                      <v-icon color="primary">mdi-chevron-right</v-icon>
                      {{ key.value.key }}
                    </p>
                    <slot />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { KeyFeature, MediaType } from '~/types/keyFeature'

@Component
export default class KeyFeatures extends Vue {
  @Prop({ type: String, default: 'Title' }) title!: string
  @Prop({ type: Array, default: () => { return [] } }) items!: any[]
  mediaStyle: any = 'img style=\" max-width: 300px \"'
  tab: any = null

  link (item: any): string {
    let link = ''
    const regex = /<img[^>]+src="([^">]+)"/gm;
    let m: RegExpExecArray | null;

    while ((m = regex.exec(item.mediaSource)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        if (match.endsWith('.jpg') || match.endsWith('.mp4')) {
          link = match
        }
      });
    }
    link = link.replace(/\/storage/gm, 'https://api2.stereotech.org/storage').replace(/\s/gm, '-')
    return link
  }
}

</script>

<style>
</style>