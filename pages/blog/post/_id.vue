<template></template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import gql from 'graphql-tag'

@Component
export default class BlogPost extends Vue {

    async mounted(){
        let result = await this.$apollo.query({
            query: gql`query single_post(!$post_id: post_id){
                post_id,
                post_text
            }`
        })
    }

}

</script>

<style>
</style>