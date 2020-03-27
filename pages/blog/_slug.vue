<template>
    <v-container>
        <h2>Блог</h2>
        <h4>Категории</h4>
        <v-row>
            <v-chip-group>
                <v-chip v-for="category in blog_categories" :key="category">
                    {{category}}
                </v-chip>
            </v-chip-group>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import gql from 'graphql-tag'
@Component
export default class Blog extends Vue {

    private blog_categories: string[]=[
        'Все', 'Новости', 'Научная деятельность'
    ]
    async mounted(){
        let result = await this.$apollo.query({
            query: gql`query($filter_category_id: "1", sort: "p.date_added" , order: "DESC", start: 0, limit: 6){
                post_id name

            }`
        })
    
    }

}

</script>

<style>
</style>