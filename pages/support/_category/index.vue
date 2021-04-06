<template>
  <v-card>
      <SupportBanner 
        :title="$tc(`${bannerData.title}`)"
      />
      <v-card-text>
          <v-container fluid>
              <v-row justify="center"> 
                  <v-col
                   v-for="(manual, index) in covers"
                   :key="index"
                   cols="12"
                   md="4"
                  >
                    <v-list>
                        <h3 class="text-center">{{manual.title}}</h3>
                        <v-list-item v-for="(child, i) in manual.children" :key="i">
                            <v-list-item-title v-text="child.title" class="text-center"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                  </v-col>
              </v-row>
          </v-container>
      </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SupportBanner from "~/components/SupportBanner.vue"
import { IContentDocument } from "~/node_modules/@nuxt/content/types/content";

@Component({
    components:{
        SupportBanner
    }
})
export default class extends Vue{

    content: IContentDocument | IContentDocument[] = []

    covers: {title: string, children: IContentDocument[]}[] = []

    bannerData: IContentDocument = {dir:'', path:'', extension:'', slug:'', createdAt: new Date(), updatedAt: new Date()}

    async mounted(){
        this.content = await this.$content(`/user-manuals/${this.$i18n.locale}/${this.$route.params.category}`, {deep:true}).without('body').fetch()
        this.bannerData = this.content.find(i => i.extension === '.json' && i.slug === 'home')
        this.covers = this.content.filter(i => i.slug === '!cover').map(v=>{return {title:v.title, children:this.content.filter(c=>c.dir==v.dir&&c.slug!=='!cover')}})
        //console.log(covers)
        
    }
}
</script>

<style>

</style>