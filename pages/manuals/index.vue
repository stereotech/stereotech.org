<template>
  <v-row>
    <v-col cols="12">
      <h1
        class="display-3 text-uppercase font-weight-light text-center hidden-xs-only"
      >{{ $store.state.lang.docs }}</h1>
      <h1
        class="headline text-uppercase font-weight-light text-center hidden-sm-and-up"
      >{{ $store.state.lang.docs }}</h1>
    </v-col>
    <v-col cols="12" v-for="(manual,index) in manuals" :key="index">
      <v-card>
        <v-card-title>{{ manual.title }}</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="3" v-for="(item, ind) in manual.items" :key="ind">
                <v-card nuxt :to="item.link">
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-img :src="item.image"></v-img>
                </v-card>
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

@Component
export default class Manuals extends Vue {
  manuals: any[] = [
    {
      title: this.$store.state.lang.manuals.printers,
      items: [
        {
          title: 'STE 320',
          link: '/manuals/ste320',
          image: '/printers/STE 320/banner.webp'
        }
      ]
    },
    {
      title: this.$store.state.lang.manuals.software,
      items: [
        {
          title: 'STE App',
          link: '/manuals/steapp',
          image: '/printers/common/cluster1.webp'
        }
      ]
    }
  ]
}
</script>
