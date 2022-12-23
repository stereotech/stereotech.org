<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" :sm="fullsize ? 12 : 6">
          <v-img
            :src="image"
            class="white--text align-center text-center"
            :gradient="
              fullsize && $vuetify.breakpoint.smAndUp
                ? 'to bottom, rgba(2,119,189,0), rgba(2, 119, 189, 0.8), rgba(2,119,189,0)'
                : ''
            "
          >
            <h4
              v-if="fullsize && $vuetify.breakpoint.smAndUp"
              class="display-1 font-weight-light"
            >
              {{ title }}
            </h4>

            <slot v-if="fullsize && $vuetify.breakpoint.smAndUp">
              <v-btn
                v-if="
                  fullsize &&
                  $vuetify.breakpoint.smAndUp &&
                  linkIf
                "
                color="accent"
                class="mt-2"
                depressed
                :href="link"
                target="_blank"
              >
                {{ $t("Узнать больше") }}
                <v-icon right>mdi-chevron-right</v-icon>
              </v-btn>
              <v-btn
                v-if="
                  fullsize &&
                  $vuetify.breakpoint.smAndUp &&
                  !linkIf
                "
                color="accent"
                class="mt-2"
                depressed
                nuxt
                :to="localePath(link)"
              >
                {{ $t("Узнать больше") }}
                <v-icon right>mdi-chevron-right</v-icon>
              </v-btn>
            </slot>
          </v-img>
        </v-col>
        <v-col
          cols="12"
          :sm="fullsize ? 12 : 6"
          :class="`text-center ${hidden}`"
        >
          <h4 class="display-1 font-weight-light">{{ title }}</h4>
          <p
            class="subtitle-1 font-weight-light"
            v-html="descriptionHtml"
          ></p>
          <slot>
            <v-btn
              color="primary"
              depressed
              :href="link"
              target="_blank"
              v-if="linkIf"
            >
              {{ $t("Узнать больше") }}
              <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
            <v-btn color="primary" depressed nuxt :to="localePath(link)" v-else>
              {{ $t("Узнать больше") }}
              <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
          </slot>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ProductCard extends Vue {
  @Prop({ type: String, default: '' }) title!: string
  @Prop({ type: String, default: '' }) buttonText!: string
  @Prop({ type: String, default: '' }) image!: string
  @Prop({ type: String, default: '' }) description!: string
  @Prop({ type: String, default: '' }) link!: string
  @Prop({ type: Boolean, default: false }) fullsize!: boolean

  get hidden () {
    return this.fullsize ? 'hidden-sm-and-up' : ''
  }

  get descriptionHtml() {
    return this.description?.replace(/(?:\r\n|\r|\n)/g, '<br />') ?? ''
  }

  get linkIf() {
    return this.link?.startsWith('http') ?? ''
  }
}

</script>

<style>
</style>