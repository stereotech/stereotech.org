<template>
<v-container>
    <v-card>
    <v-row justify="center">
        <v-col cols="auto">
            <headerInfo></headerInfo>
            <banner></banner>
                <v-card color="lightgray">
                    <h1 class="text-center text-uppercase"><span class="text-center text-uppercase font-weight-light">окупаемость</span> - меньше 2 месяцев!</h1>
                </v-card>
        </v-col>
        <v-col  :cols="12" md="6">
            <listComponent :listElements="applying">
                <h3><span class="blueText text-center">{{$t('СФЕРЫ ПРИМЕНЕНИЯ')}}</span> {{$t('пятиосевого 3D принтера Stereotech STE 520:')}}</h3>
            </listComponent>
        </v-col> 
        <v-col  :cols="12" md="6">
            <listComponent :listElements="advantages">
                <h3 class="blueText text center">{{$t('ПРЕИМУЩЕСТВА 5D ТЕХНОЛОГИИ:')}}</h3>
                <h3> <br></h3>
            </listComponent>
        </v-col>

        <v-col>
            <listComponent :listElements="easeOfUse">
                <h3 class="blueText text-uppercase">{{$t('удобство эксплуатации:')}}</h3>
            </listComponent>
            <textStripe>
               {{$t('5D принтер Stereotech STE 520 – дешевле, технологичнее и точнее конкурентов:')}}
            </textStripe>
            <advantagesTable></advantagesTable>
            <textStripe>
                {{$t('5D принтер Stereotech STE 520 снижает себестоимость готовых моделей в 8 раз!')}}
            </textStripe>
            <costCompare></costCompare>
            <listComponent :listElements="guarantee">
                <h3 class="blueText text-uppercase">{{$t('гарантия и безопасность принтера STEREOTECH STE 520')}}</h3>
            </listComponent>
        </v-col>
    </v-row>
    </v-card>
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
get applying():string[] {
    return [
        this.$tc('Авиация и ракетостроение'),
        this.$tc('Строительная печать'),
        this.$tc('Оборонная промышленность'),
        this.$tc('Робототехника'),
        this.$tc('Протезирование'),
        this.$tc('Автомобилестроение')
    ]
} 
get advantages():string[] {
    return [
        this.$tc('Крепление любой оснастки для серийного производства'),
        this.$tc('Возможность композитной печати в объеме'),
        this.$tc('Печать без поддержек'),
        this.$tc('Гладкая поверхность на наклонных гранях'),
        this.$tc('Скорость печати выше, чем стандартные 3D принтеры'),
        this.$tc('Прочная трехмерная структура')
    ]
} 
get easeOfUse(): string[] {
    return [
        this.$tc('Двухсопельная печатающая головка. Экструдер с прямой подачей, печать любыми материалами'),
        this.$tc('Полностью автоматическая подготовка изделий к печати'),
        this.$tc('Программное обеспечение поддерживает различные режимы 5D печати, планирует задания на печать'),
        this.$tc('Световая индикация обозначает завершение печати, ошибку в работе, паузу'),
        this.$tc('Полностью закрытая камера принтера – низкий шум и легкий доступ к материалам'),
        this.$tc('Алюминиевая рама принтера – минимум вибраций при работе и выше точность модели из-за правильного движения направляющих')
    ]
}
get guarantee(): string[] {
    return [
        this.$tc('Продукция сертифицирована для продажи на территории Российской Федерации'),
        this.$tc('Фирменная гарантия производителя на каждый принтер'),
        this.$tc('Доставка заказанного оборудования осуществляется точно в срок'),
        this.$tc('При необходимости, наша сервисная служба бесплатно произведет установку и запуск оборудования')
    ]
}

}

</script>
