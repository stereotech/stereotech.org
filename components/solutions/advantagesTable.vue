<template>
    <v-simple-table :bordered="true">

        <tbody>

            <tr>
                <th></th>
                <th>Stratasys 8 axis printing</th>
                <th>VeraShape VShaper 5 Axis</th>
                <th>Ethereal Machines Halo</th>
                <th>Stereotech STE 520</th>
            </tr>


            <tr>
                <td>Программное обеспечение</td>
                <td>Siemens NX. Использовать другой софт нельзя</td>
                <td class="text-center" colspan="2">Нет данных</td>
                <td>Собственная разработка. Работает с любой CAD </td>
            </tr>
            <tr>
                <td>Печать общих CAD моделей (STL)</td>
                <td class="text-center" colspan="3">Нет. Только с известной топологией модели</td>
                <td>Да</td>
            </tr>
            <tr>
                <td>Подготовка модели</td>
                <td class="text-center" colspan="3">Ручная</td>
                <td>Автоматическая</td>
            </tr>
            <tr>
                <td>Состояние разработки</td>
                <td class="text-center" colspan="3">Опытный образец. Печать тестовых изделий</td>
                <td>Промышленный образец. Печать любых изделий</td>
            </tr>
            <tr>
                <td>Настольное решение</td>
                <td class="text-center" colspan="3">Нет</td>
                <td>Да</td>
            </tr>
            <tr>
                <th>Стоимость</th>
                <th>$ 45 000</th>
                <th>$ 350 000</th>
                <th>$ 25 000</th>
                <th>$ 8 000</th>
            </tr>
        </tbody>

    </v-simple-table>


</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class advantagesTable extends Vue {

}

</script> 
<style>
    v-table, th, td{
        border: 2px
    }
</style>
