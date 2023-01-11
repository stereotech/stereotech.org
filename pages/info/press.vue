<template>
  <v-container>
    <v-row justify="center" v-if="this.loadedPage == false">
      <v-col cols="12" lg="9" md="9" sm="9">
        <v-row>
          <v-col cols="12" lg="4" md="4">
            <v-row>
              <v-col cols="12">
                <v-skeleton-loader
                  type="image"
                ></v-skeleton-loader>
              </v-col>
              <v-col cols="12">
                <v-skeleton-loader
                  type="image"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="8" md="8">
            <v-skeleton-loader
              type="image@3"
              :tile=true
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>
      <v-col 
        cols="12"
        sm="10"
        align="center"
        v-for="n in 3"
        :key="n"
      >
        <v-skeleton-loader
          class="v-s-text"
          type="heading"
        ></v-skeleton-loader>
        <v-row>
          <v-col 
            cols="12"
            lg="4"
            sm="4"
            md="4"
            v-for="n in 3"
            :key="n"
          >
            <v-skeleton-loader
              type="image@2"
              :tile=true
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="this.loadedPage == true">
      <v-col cols="12" sm="6" md="3">
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>
                {{ titleHeader }}
              </v-card-title>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ contactName }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :href="contactTelLink">
                <v-list-item-title>{{ contactTel }}</v-list-item-title>
              </v-list-item>
              <v-list-item :href="contactMailLink" target="_blank">
                <v-list-item-title>{{ contactMail }}</v-list-item-title>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-list-item
                :href="linkGoggleDisk"
                target="_blank"
              >
                <v-list-item-title
                  ><v-icon left>mdi-google-drive</v-icon>
                  {{ titlePhoto }}</v-list-item-title
                >
              </v-list-item>
              <v-list-item nuxt to="/info/press/video" exact>
                <v-list-item-title>
                  {{ titleVideo }}</v-list-item-title
                >
              </v-list-item>
              <v-list-item nuxt to="/info/press" exact>
                <v-list-item-title>
                  {{ titlePres }}</v-list-item-title
                >
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="10" md="6">
        <v-row>
          <v-col cols="12">
            <nuxt-child />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="10">
        <v-card>
          <v-card-title>
            {{ titleBrandbook }}
          </v-card-title>
          <StereotechBrandbook/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { StereotechBrandbook } from '@stereotech/stereotech-brandbook';

@Component({
  components: {
    StereotechBrandbook
  }
})

export default class PressPage extends Vue {

  titleHeader: string = ''
  contactName: string = ''
  contactTel: string = ''
  contactTelLink: string = ''
  contactMail: string = ''
  contactMailLink: string = ''

  titlePhoto: string = ''
  titleVideo: string = ''
  titlePres: string = ''
  titleBrandbook: string = ''
  linkGoggleDisk: string = ''
  loadedPage: boolean = false

  private async getDocumentsData () {

    let response = await fetch(`${process.env.API_STATAMIC}/collections/page/entries/53feee36-a6b0-4957-948d-1e30fce28d6c`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json()
    data = data.data

    this.titleHeader = data.title_header
    this.contactName = data.contact_name
    this.contactTel = data.contact_tel
    this.contactTelLink = data.contact_tel_link
    this.contactMail = data.contact_mail
    this.contactMailLink = data.contact_mail_link

    this.titlePhoto = data.title_photo
    this.titleVideo = data.title_video
    this.titlePres = data.title_pres
    this.titleBrandbook = data.title_brandbook
    this.linkGoggleDisk = data.link_goggle_disk

  }

  async mounted () {
    await this.getDocumentsData()
    this.loadedPage = true
  }

}

</script>

<style>
  .v-s-text {
    margin-top: 40px;
    margin-bottom: 20px;
  }
</style>