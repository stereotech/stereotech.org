<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <h4 class="display-1 text-uppercase font-weight-light">{{ $t('Последние новости')}}</h4>
        </v-col>
      </v-row>
      <v-row justify="center" v-if="posts.length < 1">
        <v-col cols="2" class="text-center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col v-for="(post, index) in posts" :key="index" cols="12" md="4">
          <blogPostCard
            :postID="post.post_id"
            :photoPath="`https://api.ste3d.ru/image/${post.image}`"
            :postTitle="post.name"
            :postDescription="post.description"
          ></blogPostCard>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import gql from 'graphql-tag'
import blogPostCard from '~/components/blogPostCard.vue'

@Component({
  components: {
    blogPostCard
  }
})
export default class LatestPosts extends Vue {
  private limit: number = 3
  private posts: any[] = []

  async loadPosts () {
    let result: any
    result = await this.$apollo.query({
      query: gql`query($limit: Int!){
                blog_filter(sort: "p.date_added" , order: "DESC", start: 0, limit: $limit){
                post_id,
                name,
                image
            }}`,
      variables: {
        limit: this.limit
      }
    })

    this.posts = result.data.blog_filter
  }

  async mounted () {
    await this.loadPosts()
  }
}

</script>

<style>
</style>