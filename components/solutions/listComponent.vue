<template>
    <v-container>
            <slot></slot>

            <ul>
                <li 
                    class="font-weight-light"
                    v-for="el in listElements"
                    v-bind:key="el"
                >
                    <slot name="el" v-bind:el="el">
                        {{ el }}
                    </slot>
                </li>
            </ul>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class listComponent extends Vue {
    @Prop({ type: Array, required: true, default: [] }) listElements!: string[]
}

</script>
<style>
    .blueText{
        color: rgb(13, 91, 168)
    }
</style>