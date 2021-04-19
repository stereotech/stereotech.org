<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">{{ $t("Блог") }}</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="auto">
        <h4 class="font-weight-light text-center">{{ $t("Категории") }}</h4>
        <v-chip-group color="primary">
          <v-chip nuxt exact :to="localePath('/blog')">{{
            $t("Все темы")
          }}</v-chip>
          <v-chip nuxt exact :to="localePath('/blog/news')">{{
            $t("Новости")
          }}</v-chip>
          <v-chip nuxt exact :to="localePath('/blog/science')">{{
            $t("Научная деятельность")
          }}</v-chip>
        </v-chip-group>
      </v-col>
    </v-row>

    <v-row justify="center" v-if="posts.length < 1">
      <v-col cols="2" class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row justify="center" v-else>
      <v-col cols="12" lg="10">
        <v-card>
          <v-container fluid>
            <v-row justify="center" align="center">
              <v-col
                v-for="(post, index) in posts"
                :key="index"
                cols="12"
                md="4"
              >
                <blogPostCard
                  :postID="post._id"
                  :photoPath="`https://api2.stereotech.org/${post.image.path}`"
                  :postTitle="post.postName"
                  :postDescription="post.description"
                ></blogPostCard>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-col cols="auto" class="text-center">
      <v-btn depressed color="primary" @click="showMore()">{{
        $t("Показать ещё")
      }}</v-btn>
    </v-col>
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
    let data
    let response = await fetch(`https://api2.stereotech.org/api/collections/get/blog?token=${process.env.COCKPIT_TOKEN}`)
    data = await response.json()
    if (this.$route.params.slug === undefined) {
      this.posts = data.entries.slice(0, this.limit)
    }
    else {
      this.posts = data.entries.filter(item => item.category == this.$route.params.slug).slice(0, this.limit)
    }
  }

  async mounted () {
    await this.loadPosts()
  }

  private async showMore () {
    this.limit += 3
    await this.loadPosts()
  }
}

</script>

<style>
</style>