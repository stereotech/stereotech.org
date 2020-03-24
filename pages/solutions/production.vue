<template>
<v-card>
    <advantagesTable></advantagesTable>

    <listComponent>
        <template v-slot:todo="{ todo }">
            {{ todo.text }}
        </template>
    </listComponent>

    <costCompare></costCompare>
</v-card>

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import advantagesTable from '~/components/solutions/advantagesTable.vue'
import costCompare from '~/components/solutions/costCompare.vue'
import listComponent from '~/components/solutions/listComponent.vue'

@Component({
    components:{
        advantagesTable,
        costCompare,
        listComponent
    }
}
)
export default class Production extends Vue {


}

</script>
