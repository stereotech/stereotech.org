<template>
    <v-container>
        <v-img :src="`${post.image}`"></v-img>
        <p>{{post.author}}</p>
        <p>{{post.date_added}}</p>
        <p>{{post.description}}</p>
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
            query: gql`query blog_post(id:""){
                name,
                image,
                author,
                date_added,
                description
                }`
        })
        this.post = result.data.blog_post
    }

}

</script>

<style>
</style>