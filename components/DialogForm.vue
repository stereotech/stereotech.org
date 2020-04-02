<template>
  <v-dialog v-model="dialog" max-width="600">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" block color="primary" depressed>{{ buttonText}}</v-btn>
    </template>
    <v-card>
      <slot />
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class DialogForm extends Vue {
  @Prop({ type: String, default: 'button text' }) buttonText!: string

  dialog: boolean = false
}

</script>

<style>
</style>