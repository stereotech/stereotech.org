<template>
    <v-container>
        <v-parallax :src="`${post.image}`"></v-parallax>
        <h2 class="text-center">{{post.name}}</h2>
        <p>{{post.author}}</p>
        <p>{{post.date_added}}</p>
        <p class="text-center">{{post.description}}</p>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import gql from 'graphql-tag'

@Component
export default class BlogPost extends Vue {
    @Prop({type: String, required: true, default: ''}) photoPath!: string


    private post : any
    //private blog_post_id: number = 0
    async mounted(){
        let result = await this.$apollo.query({
            query: gql`query($id: ID!){
                blog_post(id: $id){
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
    }

}

</script>

<style>
</style>