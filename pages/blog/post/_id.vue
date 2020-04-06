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
            :src="`https://api.ste3d.ru/image/${post.image}`"
            class="white--text align-end"
          >
            <v-card-title
              class="hidden-sm-and-down display-1 font-weight-light text-break"
              v-html="post.name"
            ></v-card-title>
            <v-card-title class="hidden-md-and-up font-weight-light text-break" v-html="post.name"></v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">{{post.date_added}}</v-card-subtitle>
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

@Component
export default class BlogPost extends Vue {


  private post: any = null
  //private blog_post_id: number = 0
  async mounted () {
    let result = await this.$apollo.query({
      query: gql`query($id: ID!){
                blog_post(id: $id) {
                    name,
                    image,
                    author,
                    date_added,
                    description
                }
            }`,
      variables: {
        id: this.$route.params.id
      }
    })
    this.post = result.data.blog_post
    this.post.description = this.$convertHtml(this.post.description)
    //console.log(this.$route.params)
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