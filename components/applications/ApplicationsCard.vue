<template>
  <v-flex xs12 sm6 lg3>
    <v-card hover>
      <v-container fluid grid-list-xs>
        <v-layout row wrap align-center>
          <v-flex xs4>
            <v-avatar size="96">
              <v-icon x-large color="primary">{{icon}}</v-icon>
            </v-avatar>
          </v-flex>
          <v-flex xs8>
            <h4 class="text-xs-center title font-weight-light">{{ $t(name) }}</h4>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
})
export default class ApplicationsCard extends Vue {
  @Prop({ type: String, required: true, default: '' }) name!: string
  @Prop({ type: String, required: true, default: '' }) icon!: string
}
</script>

<style>
</style>
