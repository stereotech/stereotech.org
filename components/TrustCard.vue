<template>
  <v-card>
    <v-row justify="space-around">
        <v-col cols="12" class="text-center">
            <h4 class="display-1 font-weight-light">{{ title }}</h4>
        </v-col>
        <v-col cols="6" sm="2" v-for="(image, index) in images" :key="index">
            <v-img :src="image.permalink"></v-img>
        </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TrustCard extends Vue{

    @Prop({ type: String, default: '' }) title!: string
    @Prop({ type: Array, default: () => { return [] } }) images!: any[]

}
</script>

<style>

</style>