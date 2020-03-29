<template>
<v-card>
    <headerInfo></headerInfo>
    <banner></banner>
    <textStripe>
        5D принтер Stereotech STE 520 –
        дешевле, технологичнее и точнее конкурентов:
    </textStripe>
    <advantagesTable></advantagesTable>

    <listComponent>
    </listComponent>
    <textStripe>
        5D принтер Stereotech STE 520
        снижает себестоимость готовых моделей в 8 раз!
    </textStripe>
    <costCompare></costCompare>
</v-card>

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import advantagesTable from '~/components/solutions/advantagesTable.vue'
import costCompare from '~/components/solutions/costCompare.vue'
import listComponent from '~/components/solutions/listComponent.vue'
import textStripe from '~/components/solutions/textStripe.vue'
import headerInfo from '~/components/solutions/headerInfo.vue'
import banner from '~/components/solutions/banner.vue'

@Component({
    components:{
        advantagesTable,
        costCompare,
        listComponent,
        textStripe,
        headerInfo,
        banner
    }
}
)
export default class Production extends Vue {


}

</script>
