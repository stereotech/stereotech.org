<template>
    <h1 class="font-weight-light">
        {{ title }}
    </h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Header1 extends Vue {

    @Prop({ type: String, default: '' }) title!: string

}
</script>

<style>

</style>