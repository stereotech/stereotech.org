<template>
<v-container>
    <v-row justify="center">
        <v-col cols="auto">
            <headerInfo></headerInfo>
            <banner></banner>
            <textStripe>
                5D принтер Stereotech STE 520 –
                дешевле, технологичнее и точнее конкурентов:
            </textStripe>
            <advantagesTable></advantagesTable>
        </v-col>
        <v-col  :cols="12" md="6">
            <listComponent :listElements="applying">
                <h3><span class="blueText text center">СФЕРЫ ПРИМЕНЕНИЯ</span> пятиосевого 3D принтера Stereotech STE 520:</h3>
            </listComponent>
        </v-col>
        <v-col  :cols="12" md="6">
            <listComponent :listElements="applying">
                <h3 class="blueText text center">ПРЕИМУЩЕСТВА 5D ТЕХНОЛОГИИ:</h3>
                <h3> <br></h3>
            </listComponent>
        </v-col>
        <v-col>
            <textStripe>
                5D принтер Stereotech STE 520
                снижает себестоимость готовых моделей в 8 раз!
            </textStripe>
            <costCompare></costCompare>
        </v-col>
    </v-row>
    
</v-container>

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
private applying:string[]=[
    'Авиация и ракетостроение',
    'Строительная печать',
    'Оборонная промышленность',
    'Робототехника',
    'Протезирование',
    'Автомобилестроение'
]
private advantages:string[]=[
    'Крепление любой оснастки для серийного производства',
    'Возможность композитной печати в объеме',
    'Печать без поддержек',
    'Гладкая поверхность на наклонных гранях',
    'Скорость печати выше, чем стандартные 3D принтеры',
    'Прочная трехмерная структура'
]
}

</script>
