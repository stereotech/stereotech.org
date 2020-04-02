<template>
    <v-simple-table >
    
        <tbody>

            <tr>
                <th></th>
                <th class="text-center">Stratasys 8 axis printing</th>
                <th class="text-center">VeraShape VShaper 5 Axis</th>
                <th class="text-center">Ethereal Machines Halo</th>
                <th class="text-center">Stereotech STE 520</th>
            </tr>

            <tr>
                <td class="text-center">Программное обеспечение</td>
                <td class="text-center">Siemens NX. Использовать другой софт нельзя</td>
                <td class="text-center">Нет данных</td>
                <td class="text-center">Нет данных</td>
                <td class="text-center">Собственная разработка. Работает с любой CAD </td>
            </tr>
            <tr>
                <td class="text-center">Печать общих CAD моделей (STL)</td>
                <td class="text-center">Нет. Только с известной топологией модели</td>
                <td class="text-center">Нет. Только с известной топологией модели</td>
                <td class="text-center">Нет. Только с известной топологией модели</td>
                <td class="text-center">Да</td>
            </tr>
            <tr>
                <td class="text-center">Подготовка модели</td>
                <td class="text-center">Ручная</td>
                <td class="text-center">Ручная</td>
                <td class="text-center">Ручная</td>
                <td class="text-center">Автоматическая</td>
            </tr>
            <tr>
                <td class="text-center">Состояние разработки</td>
                <td class="text-center">Опытный образец. Печать тестовых изделий</td>
                <td class="text-center">Опытный образец. Печать тестовых изделий</td>
                <td class="text-center">Опытный образец. Печать тестовых изделий</td>
                <td class="text-center">Промышленный образец. Печать любых изделий</td>
            </tr>
            <tr>
                <td class="text-center">Настольное решение</td>
                <td class="text-center">Нет</td>
                <td class="text-center">Нет</td>
                <td class="text-center">Нет</td>
                <td class="text-center">Да</td>
            </tr>
            <tr>
                <th class="text-center">Стоимость</th>
                <th class="text-center">$ 45 000</th>
                <th class="text-center">$ 350 000</th>
                <th class="text-center">$ 25 000</th>
                <th class="text-center">$ 8 000</th>
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
