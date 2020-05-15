<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="auto">
                <headerInfo></headerInfo>
                <banner></banner>
                <v-card color="lightgrey">
                    <h1 class="text-center text-uppercase"><span class="text-center text-uppercase font-weight-light">окупаемость</span> - меньше 2 месяцев!</h1>
                </v-card>
            </v-col>
            <v-col>
                <textStripe>
                    {{$t('5D принтер Stereotech STE 520 снижает себестоимость готовых моделей в 8 раз!')}}
                </textStripe>
                <costCompare></costCompare>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import listComponent from '~/components/solutions/listComponent.vue'
import textStripe from '~/components/solutions/textStripe.vue'
import headerInfo from '~/components/solutions/headerInfo.vue'
import banner from '~/components/solutions/banner.vue'

@Component({
    components:{
        listComponent,
        textStripe,
        headerInfo,
        banner
    }
})
export default class Education extends Vue {

}

</script>

<style>
</style>