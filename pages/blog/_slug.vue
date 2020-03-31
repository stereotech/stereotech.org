<template>
  <v-container>
    <h2>Блог</h2>
    <h4>Категории</h4>
    <v-row>
      <v-chip-group>
        <v-chip v-for="category in blog_categories" :key="category">{{category}}</v-chip>
      </v-chip-group>
    </v-row>
    <blogPostCard
      v-for="(post, index) in posts"
      :key="index"
      photoPath="posts.image"
      postTitle="posts.name"
      postDescription="posts.description"
    ></blogPostCard>
    <v-row align="center">
      <v-btn dark color="primary" @click="showMore()">Показать ещё</v-btn>
    </v-row>
  </v-container>
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
export default class Blog extends Vue {

  private posts: any[] = []

  private blog_categories: any[] = []
  async mounted () {
    let result = await this.$apollo.query({
      query: gql`query blog_filter(filter_category_id: "1", sort: "p.date_added" , order: "DESC", start: 0, limit: 6){
                post_id,
                name,
                image,
                description
            }`
    })
    this.posts = result.data.blog_filter

    let categories = await this.$apollo.query({
      query: gql`query blog_category{
               
                name
            }`
    })
    this.blog_categories = categories.data.blog_category
  }

  private showMore () {

  }
}

</script>

<style>
</style>