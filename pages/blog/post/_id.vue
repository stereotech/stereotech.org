<template>
  <v-container>
    <v-card>
      <v-img :src="`https://api.ste3d.ru/image/${post.image}`">
        <v-card-title class="white--text align-end" v-html="post.name"></v-card-title>
      </v-img>
      <v-card-subtitle class="pb-0">{{post.date_added}}</v-card-subtitle>
      <v-card-text class="text--primary">
        <p>{{post.author}}</p>
        <div v-html="post.description"></div>
      </v-card-text>
    </v-card>
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
    </v-row> -->
    <v-row v-if="!post" justify="center">
      <v-col cols="1">
        <v-progress-circular indeterminate></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import gql from 'graphql-tag'

@Component
export default class BlogPost extends Vue {
  @Prop({ type: String, required: true, default: '' }) photoPath!: string


  private post: any = {}
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

<style>
</style>