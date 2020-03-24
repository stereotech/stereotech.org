<template>
    <v-container>
        <slot></slot>
        <slot></slot>
        <ul>
            <li 
                v-for="el in listElements"
                v-bind:key="el.id"
            >
                <slot name="el" v-bind:el="el">
                    {{ el.text }}
                </slot>
            </li>
        </ul>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class listComponent extends Vue {

}

</script>
