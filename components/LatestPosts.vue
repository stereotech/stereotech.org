<template>
  <v-card>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <h4 class="display-1 text-uppercase font-weight-light">
            {{ $t("Последние новости") }}
          </h4>
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
      <v-row v-else justify="center" align="center">
        <v-col v-for="(post, index) in posts" :key="index" cols="12" md="4">
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
}

</script>

<style>
</style>