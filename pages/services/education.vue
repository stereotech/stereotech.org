<template>
  <v-row>
    <v-col cols="12" md="8" lg="6" offset-lg="3" offset-md="2">
      <v-card>
        <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(item, i) in items" :key="i">
            <v-img :src="item.link"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-text v-if="$apollo.loading">
          <v-progress-linear indeterminate></v-progress-linear>
        </v-card-text>
        <v-card-text>
          <div v-html="text" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>Подробная информация</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-btn
                  block
                  large
                  outlined
                  href="mailto:msikt@mail.ru?subject=Курсы 3D печати&body=Здравствуйте, вышлите информацию по курсам"
                  color="primary"
                >
                  <v-icon left>mdi-email</v-icon>Записаться на курсы
                </v-btn>
              </v-col>
              <v-col cols="12" md="6">
                <v-btn block large outlined href="tel:+78442248443" color="accent">
                  Позвонить в учебный центр
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
import { Vue, Component, Watch } from 'vue-property-decorator'
import InstagramGallery from '~/components/InstagramGallery.vue'
import gql from 'graphql-tag'

//@ts-ignore
@Component({
  head: {
    title: 'Обучение 3D печати'
  },
  apollo: {
    information: {
      query: gql`{information(id: "8") {information_id, title, description}}`,
      prefetch: true
    }
  }
}
)
export default class Education extends Vue {
  @Watch('information') onInformationChanged (oldVal: any, val: any) {
    this.text = this.$convertHtml(this.information.description)
  }

  text: string = ''
  information: any = {}

  items: any[] = [
    {
      link: 'services/education/1.jpg'
    },
    {
      link: 'services/education/2.jpg'
    },
    {
      link: 'services/education/3.jpg'
    },
    {
      link: 'services/education/4.jpg'
    },
    {
      link: 'services/education/5.jpg'
    },
  ]
}

</script>

<style>
</style>

  