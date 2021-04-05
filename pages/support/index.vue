<template>
  <v-card >
    <SupportBanner
      :title="this.$tc('Руководства пользователя')"
    />
    <v-card-text>
      <v-container fluid>
        <v-row justify="center">
          <v-col
            v-for="(category, index) in manualCategories"
            :key="index"
            cols="12"
            md="3"
          >
            <v-card :to="``" nuxt>
              <v-card-title>{{ category.title }}</v-card-title>
              <v-card-text>
                <v-img :src="category.image"></v-img>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row> 
      </v-container>       
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SupportBanner from "~/components/SupportBanner.vue"

@Component({
  components:{
    SupportBanner
  }
})
export default class Support extends Vue {
  get manualCategories() {
    return [
      {
        title: this.$t("Принтеры"),
        image: "support/series5.jpg",
      },
      {
        title: this.$t("Программное обеспечение"),
        image: "support/steslicer.jpg",
      },
    ];
  }

  async mounted(){
    
  }
}
</script>

<style>
</style>