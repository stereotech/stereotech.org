<template>
  <v-card >
    <SupportBanner
      :title="this.$tc('Руководства пользователя')"
    />   
    <v-card-text>
      <v-container fluid>
        <v-row justify="center">
          <v-col
            v-for="(category, index) in categories"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card :to="localePath(`/support/${categoryPath(category.path.split('/'))}`)" nuxt>
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
import { IContentDocument } from "@nuxt/content/types/content";
import { Vue, Component } from "vue-property-decorator";
import SupportBanner from "~/components/SupportBanner.vue"

@Component({
  components:{
    SupportBanner
  }
})
export default class Support extends Vue {

  private categoryPath(arr: any[]){
    return arr[arr.length-2]
  }

  categories: IContentDocument | IContentDocument[] = []

  async mounted(){
    this.categories = await this.$content(`user-manuals/${this.$i18n.locale}`, {deep: true}).where({extension: '.json'}).fetch()
  }
}
</script>

<style>
</style>