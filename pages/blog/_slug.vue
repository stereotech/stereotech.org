<template>
    <v-container>
        <h2>Блог</h2>
        <h4>Категории</h4>
        <v-row>
            <v-chip-group>
                <v-chip>
                    <nuxt-link to="/blog/news" exact>Новости</nuxt-link>
                </v-chip>
                <v-chip>
                    <nuxt-link to="/blog/science" exact>Научная деятельность</nuxt-link>
                </v-chip>
            </v-chip-group>
        </v-row>
        <blogPostCard 
            v-for="(post, index) in posts"
            :key="index"
            photoPath = "posts.image"
            postTitle = "posts.name"
            postDescription = "posts.description"
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
    components:{
        blogPostCard
    }
})
export default class Blog extends Vue {
    private limit: number = 6
    private posts: any[] = []

    private blog_categories: any[]=[]
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
    async mounted(){
        let result: any 
        if(this.$route.params.slug === undefined){
            result = await this.$apollo.query({
            query: gql`query blog_filter(sort: "p.date_added" , order: "DESC", start: 0, $limit: number){
                post_id,
                name,
                image,
                description
            }`,
            variables: {
                limit: this.limit
            }
        })
        }
        else{
            result = await this.$apollo.query({
            query: gql`query blog_filter($filter_category_id: String, sort: "p.date_added" , order: "DESC", start: 0, $limit: number){
                post_id,
                name,
                image
            }`,
            variables: {
                filter_category_id: String(this.slugMapping.find(item => item.slug == this.$route.params.slug).id),
                limit: this.limit
            }
        })
        }     
        this.posts = result.data.blog_filter

        // let categories = await this.$apollo.query({
        //     query: gql`query blog_categories{
               
        //         name
        //     }`
        // })
        // this.blog_categories = categories.data.blog_category
    }

    private showMore(){
        return this.limit+=3
    }
}

</script>

<style>
</style>