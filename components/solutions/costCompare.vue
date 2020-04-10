<template>
<v-container>
    <h4>{{$t('Сравнение стоимости производства 3D модели:')}}</h4>
    <v-simple-table>
        <tbody>
            <tr>
                <td>{{$t('Stereotech STE 520')}}</td>
                <td>{{$t('Сервис печати')}}¹</td>
                <td>{{$t('Промышленный 3D принтер')}}²</td>
            </tr>
            <tr>
                <td>{{$t('119 руб. Стоимость печати')}} <sup>4</sup> </td>
                <td>{{$t("34125 руб Стоимость печати + доставка")}} <sup>5</sup>  </td>
                <td>{{$t('920 руб. Стоимость печати')}} <sup>6</sup> </td>
            </tr>
            <tr>
                <td>{{$t('3 ч ⁷ Время печати')}}</td>
                <td>{{$t("56 ч ⁷ Время печати + доставка")}}</td>
                <td>{{$t('6,5 ч ⁷ Время печати')}}</td>
            </tr>
            <tr>
                <td>{{$t('169 224 руб. ежегодные затраты (материалы + принтер)')}} <sup>8</sup></td>
                <td>{{$t('1 774 500 руб. ежегодные затраты')}}</td>
                <td>{{$t('226 173 руб. ежегодные затраты (материалы + принтер)')}} <sup>8</sup></td>
            </tr>
        </tbody>

    </v-simple-table>
</v-container>
    
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class costCompare extends Vue {

}

</script>
