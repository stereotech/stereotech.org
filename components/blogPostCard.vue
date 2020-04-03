<template>
    <v-card nuxt :to='`/blog/post/${postID}`'>
        <v-img :src="`${photoPath}`"></v-img>
        <v-card-title class="text-center">{{postTitle}}</v-card-title>
        <v-card-text>            
            <!-- <p>{{postDescription}}</p> -->
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class blogPostCard extends Vue{
    @Prop({type: String, required: true, default: ''}) photoPath!: string
    @Prop({ type: String, required: true, default: '' }) postTitle!: string
    @Prop({ type: String, required: true, default: '' }) postDescription!: string
    @Prop({ type: String, required: true, default: '' }) postID !: string

}
</script>

<style>

</style>