<template>
  <v-container>
    <h2>Блог</h2>
    <h4>Категории</h4>
    <v-row>
      <v-chip-group color="primary">
        <v-chip nuxt exact to="/blog">Все темы</v-chip>
        <v-chip nuxt exact to="/blog/news">Новости</v-chip>
        <v-chip nuxt exact to="/blog/science">Научная деятельность</v-chip>
      </v-chip-group>
    </v-row>
    <blogPostCard
      v-for="(post, index) in posts"
      :key="index"
      :photoPath="`https://api.ste3d.ru/image/${post.image}`"
      :postTitle="post.name"
      :postDescription="post.description"
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
  private limit: number = 6
  private posts: any[] = []

  private blog_categories: any[] = []
  private slugMapping: any[] = [
    {
      slug: 'news',
      id: '1'
    },
    {
      slug: 'science',
      id: '2'
    }
  ]

  async loadPosts () {
    let result: any
    if (this.$route.params.slug === undefined) {
      result = await this.$apollo.query({
        query: gql`query($limit: Int!){
                blog_filter(sort: "p.date_added" , order: "DESC", start: 0, limit: $limit){
                post_id,
                name,
                image,
                description
            }}`,
        variables: {
          limit: this.limit
        }
      })
    }
    else {
      result = await this.$apollo.query({
        query: gql`query($category_id: ID!, $limit: Int!){
                blog_filter(filter_category_id: $category_id, sort: "p.date_added" , order: "DESC", start: 0, limit: $limit){
                post_id,
                name,
                image
            }}`,
        variables: {
          category_id: this.slugMapping.find(item => item.slug == this.$route.params.slug).id,
          limit: this.limit
        }
      })
    }
    this.posts = result.data.blog_filter
  }

  async mounted () {
    //this.limit = 6

    await this.loadPosts()
    // let categories = await this.$apollo.query({
    //     query: gql`query blog_categories{

    //         name
    //     }`
    // })
    // this.blog_categories = categories.data.blog_category
  }

  private async showMore () {
    this.limit += 3
    await this.loadPosts()
  }
}

</script>

<style>
</style>