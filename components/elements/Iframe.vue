<template>
    <v-card>
        <v-card-title>{{ title }}</v-card-title>
        <iframe
            :src="link"
            width="100%"
            height="640"
            frameborder="0"
            allow="autoplay"
        ></iframe>
    </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Iframe extends Vue {

    @Prop({ type: String, default: '' }) title!: string
    @Prop({ type: String, default: '' }) link!: string

}
</script>

<style>

</style>