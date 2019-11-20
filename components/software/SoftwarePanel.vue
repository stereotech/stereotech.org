<template>
  <v-col cols="12">
    <v-card>
      <v-container fluid grid-list-sm>
        <v-row align="center">
          <v-col cols="12" sm="6">
            <v-img :src="`/printers/software/${appName}.webp`" />
          </v-col>
          <v-col class="text-center" cols="12" sm="6">
            <h4 class="display-2 text-uppercase font-weight-light pb-4">{{ title }}</h4>
            <p class="headline text-uppercase font-weight-light">{{ description }}</p>
            <slot />
            <v-container fluid grid-list-xs>
              <v-row>
                <v-col v-if="appstore" cols="4">
                  <v-img max-height="120" src="/printers/software/app-store.webp" />
                </v-col>
                <v-col v-if="googleplay" cols="4">
                  <a
                    href="https://play.google.com/store/apps/details?id=ru.stereotech.steapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                  >
                    <v-img
                      max-height="120"
                      alt="Доступно в Google Play"
                      :src="`https://play.google.com/intl/en_us/badges/static/images/badges/${$store.state.locale}_badge_web_generic.png`"
                    />
                  </a>
                  <!--<v-img max-height="120" src="/printers/software/google-play.webp"></v-img>-->
                </v-col>
                <v-col v-if="microsoftstore" cols="4">
                  <v-img max-height="120" src="/printers/software/microsoft-store.webp" />
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

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
