<template>
    <v-simple-table>
        <thead>
            <td colspan="3">Сравнение стоимости производства 3D модели:</td>
        </thead>
        <tbody>
            <tr>
                <td>Stereotech STE 520</td>
                <td>Сервис печати¹</td>
                <td>Промышленный 3D принтер²</td>
            </tr>
            <tr>
                <td>119 руб. Стоимость печати <sup>4</sup> </td>
                <td>34125 руб Стоимость печати + доставка <sup>5</sup>  </td>
                <td>920 руб. Стоимость печати <sup>6</sup> </td>
            </tr>
            <tr>
                <td>3 ч ⁷ Время печати</td>
                <td>56 ч ⁷ Время печати + доставка</td>
                <td>6,5 ч ⁷ Время печати</td>
            </tr>
            <tr>
                <td>169 224 руб. ежегодные затраты (материалы + принтер) <sup>8</sup></td>
                <td>1 774 500 руб. ежегодные затраты</td>
                <td>226 173 руб. ежегодные затраты (материалы + принтер) <sup>8</sup></td>
            </tr>
        </tbody>

    </v-simple-table>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class costCompare extends Vue {

}

</script>
