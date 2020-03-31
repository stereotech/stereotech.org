<template>
    <v-card>
        <v-img :src="`${photoPath}`"></v-img>
        <h2>{{postTitle}}</h2>
        <nuxt-link to="/blog/id"></nuxt-link>
        <!-- <p>{{postDescription}}</p> -->
    </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class blogPostCard extends Vue{
    @Prop({type: String, required: true, default: ''}) photoPath!: string
    @Prop({ type: String, required: true, default: '' }) postTitle!: string
    @Prop({ type: String, required: true, default: '' }) postDescription!: string

}
</script>

<style>

</style>