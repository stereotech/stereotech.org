<template>
  <v-flex xs12 sm6>
    <v-sheet hover>
      <v-container fluid grid-list-xs>
        <v-layout row wrap>
          <v-flex xs4>
            <v-avatar size="96">
              <img :src="image" alt="alt">
            </v-avatar>
          </v-flex>
          <v-flex xs8>
            <h4 class="text-xs-center display-1 font-weight-light">{{ $t(name) }}</h4>
            <p class="text-xs-center headline">{{ $t(description) }}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-sheet>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
})
export default class TeamCard extends Vue {
  @Prop({ type: String, required: true, default: '' }) name!: string
  @Prop({ type: String, required: true, default: '' }) image!: string
  @Prop({ type: String, required: true, default: '' }) description!: string
}
</script>

<style>
</style>
