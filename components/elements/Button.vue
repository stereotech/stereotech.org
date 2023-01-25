<template>
    <v-card>
        <v-btn
            large
            depressed
            color="primary"
            block
            :href="link"
            target="_blank"
        >
        <v-icon v-if="icon" left>{{ icon }}</v-icon>
            {{ title }}
        </v-btn>
    </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {

    @Prop({ type: String, default: '' }) title!: string
    @Prop({ type: String, default: '' }) link!: string
    @Prop({ type: String, default: '' }) icon!: string

}
</script>

<style>

</style>