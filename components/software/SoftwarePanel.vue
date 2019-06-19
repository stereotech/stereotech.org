<template>
  <v-flex xs12>
    <v-card>
      <v-container fluid grid-list-sm>
        <v-layout row wrap align-center>
          <v-flex xs12 sm6>
            <v-img :src="`/printers/software/${appName}.png`"></v-img>
          </v-flex>
          <v-flex xs12 sm6 text-xs-center>
            <h4 class="display-2 text-uppercase font-weight-light">{{ title }}</h4>
            <p class="headline text-uppercase font-weight-light">{{description}}</p>
            <slot></slot>
            <v-container fluid grid-list-xs>
              <v-layout row wrap>
                <v-flex xs4 v-if="appstore">
                  <v-img max-height="120" src="/printers/software/app-store.png"></v-img>
                </v-flex>
                <v-flex xs4 v-if="googleplay">
                  <v-img max-height="120" src="/printers/software/google-play.png"></v-img>
                </v-flex>
                <v-flex xs4 v-if="microsoftstore">
                  <v-img max-height="120" src="/printers/software/microsoft-store.png"></v-img>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class SoftwarePanel extends Vue {
  @Prop({ type: String, required: false, default: 'steapp' }) appName!: string
  @Prop({ type: String, required: false, default: '' }) title!: string
  @Prop({ type: String, required: false, default: '' }) description!: string
  @Prop({ type: Boolean, required: false, default: false }) appstore!: boolean
  @Prop({ type: Boolean, required: false, default: false }) googleplay!: boolean
  @Prop({ type: Boolean, required: false, default: false }) microsoftstore!: boolean
}

</script>

<style>
</style>