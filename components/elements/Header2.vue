<template>
    <h2 class="text-center">
        {{ title }}
    </h2>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Header2 extends Vue {

    @Prop({ type: String, default: '' }) title!: string

}
</script>

<style>

</style>