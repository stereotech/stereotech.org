<template>
  <v-row>
    <v-col cols="12">
      <InstagramGallery />
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-text>
          <div v-html="text" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>Заказать работу</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-btn block large outlined href="mailto:print@ste3d.ru" color="primary">
                  <v-icon left>mdi-email</v-icon>По Email - print@ste3d.ru
                </v-btn>
              </v-col>
              <v-col cols="12" md="6">
                <v-btn block large outlined href="tel:+79023648404" color="accent">
                  По телефону - +79023648404
                  <v-icon right>mdi-phone</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import InstagramGallery from '~/components/InstagramGallery.vue'
import gql from 'graphql-tag'

//@ts-ignore
@Component({
  head: {
    title: 'Stereotech - 3D печать в Волгограде'
  },
  components: {
    InstagramGallery
  },
  apollo: {
    information: gql`{information(id: "7") {information_id, title, description}}`
  }
})
export default class Printing extends Vue {
  text: string = ''
  mounted () {
    //@ts-ignore
    this.text = this.$convertHtml(this.information.description)
  }

  asyncData (context: any) {
    let client = context.app.apolloProvider.defaultClient
  }
}

</script>

<style>
</style>