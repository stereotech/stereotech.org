<template>
  <v-flex xs12>
    <v-card>
      <v-container fluid grid-list-sm>
        <v-layout row wrap align-center>
          <v-flex xs12 sm6>
            <v-img :src="`/printers/software/${appName}.webp`"></v-img>
          </v-flex>
          <v-flex xs12 sm6 text-xs-center>
            <h4 class="display-2 text-uppercase font-weight-light pb-3">{{ title }}</h4>
            <p class="headline text-uppercase font-weight-light">{{description}}</p>
            <slot></slot>
            <v-container fluid grid-list-xs>
              <v-layout row wrap>
                <v-flex xs4 v-if="appstore">
                  <v-img max-height="120" src="/printers/software/app-store.webp"></v-img>
                </v-flex>
                <v-flex xs4 v-if="googleplay">
                  <a
                    href="https://play.google.com/store/apps/details?id=ru.stereotech.steapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                  >
                    <v-img
                      max-height="120"
                      alt="Доступно в Google Play"
                      :src="`https://play.google.com/intl/en_us/badges/static/images/badges/${$i18n.locale}_badge_web_generic.png`"
                    />
                  </a>
                  <!--<v-img max-height="120" src="/printers/software/google-play.webp"></v-img>-->
                </v-flex>
                <v-flex xs4 v-if="microsoftstore">
                  <v-img max-height="120" src="/printers/software/microsoft-store.webp"></v-img>
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