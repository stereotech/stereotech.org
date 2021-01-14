<template>
  <v-container>
    <v-row justify="center" align="center">
      <!-- <v-row justify="center" v-if="post">

      <v-col class="text-center">
        <h1 class="font-weight-light">{{post.name}}</h1>
      </v-col>
      <v-col offset-md="2">
        <p>{{post.author}}</p>
        <p>{{post.date_added}}</p>
      </v-col>
      <v-col cols="12">
        <div v-html="post.description"></div>
      </v-col>
      </v-row>-->
      <v-col cols="2" v-if="!post">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
      <v-col cols="12" lg="10" v-else>
        <v-card>
          <v-img
            gradient="to bottom, rgba(2,119,189,0.2), rgba(2, 119, 189, 0.75)"
            :src="`https://api2.stereotech.org/${post.image.path}`"
            class="white--text align-end"
          >
            <v-card-title
              class="hidden-sm-and-down display-1 font-weight-light text-break"
              v-html="post.postName"
            ></v-card-title>
            <v-card-title class="hidden-md-and-up font-weight-light text-break" v-html="post.postName"></v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">{{post.dateAdded}}</v-card-subtitle>
          <v-card-text class="text--primary">
            <p>{{post.author}}</p>
            <div v-html="post.description"></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import gql from 'graphql-tag'
import { Context } from '@nuxt/types'

@Component({
    asyncData: async (context) => {
    // if (context.app.apolloProvider === undefined)
    //   return {
    //     post: null
    //   }
    // let client = context.app.apolloProvider.defaultClient

    const id = context.params.id
    let subLink = "https:\/\/api2.stereotech.org\/storage"
    let imageWidth = "img style=\" max-width: 800px \""
    let post
    let data
    let response = await fetch(`https://api2.stereotech.org/api/collections/get/blog?token=${process.env.COCKPIT_TOKEN}`)
    data = await response.json()
    post = data.entries.filter(v => v._id==id)[0]
    post.description = post.description.replace(/\/storage/gm, subLink).replace(/img/gm, imageWidth)
    console.log(post)
    // let result = await client.query({
    //   query: gql`query($id: ID!){
    //             blog_post(id: $id) {
    //                 name,
    //                 image,
    //                 author,
    //                 date_added,
    //                 description
    //             }
    //         }`,
    //   variables: {
    //     id
    //   }
    // })
    return {
      post
    }
  }
})


export default class BlogPost extends Vue {

  private post: any = null

  // async loadPost(){
  //   let data
  //   let response = await (fetch(`https://api2.stereotech.org/api/collections/get/blog?token=${process.env.COCKPIT_TOKEN}`), {
  //     filter: {_id}
  //   })
  // }

  async mounted () {
    // if (this.post) {
    //   this.post.description = this.$convertHtml(this.post.description)
    // }
  }

}

</script>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    transparent 72px
  );
}
</style>