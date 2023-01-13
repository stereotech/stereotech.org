<template>
    <v-container>
        <v-row>
            <!-- <v-col cols="12" lg="10" v-for="entry in page.entries">
                <component :is="entry." v-bind="entry" id='entry'> </component>
            </v-col> -->
        </v-row>
    </v-container>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class MainPage extends Vue {

    page: any = {}
async mounted() {
        this.$route.fullPath
        //fetch на страницу

    }
}
</script>

<style>
</style>