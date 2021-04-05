<template>
  <v-card>
      <SupportBanner 
        :title="this.$tc(``)"
      />
      <v-card-text>
          <v-container fluid>
              <v-row justify="center"> 
                  <v-col
                   v-for="(manual, index) in categoryManuals"
                   :key="index"
                   cols="12"
                   md="4"
                  >
                    <v-list>
                        <h3 class="text-center">{{manual.title}}</h3>
                        <v-list-item v-for="(child, i) in manual.children" :key="i">
                            <v-list-item-title v-text="child" class="text-center"></v-list-item-title>
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

@Component({
    components:{
        SupportBanner
    }
})
export default class extends Vue{
    categoryManuals: any[] = [
        {
            title: 'steApp',
            children: ['introduction', 'aaaa', 'bbbb']
        },
        {
            title: 'steslicer',
            children: ['introduction', 'work', 'cccc']
        }
    ]

    async mounted(){
        
    }
}
</script>

<style>

</style>