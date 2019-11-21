<template>
  <v-col cols="12" sm="6">
    <v-card hover>
      <v-container fluid grid-list-xs>
        <v-row>
          <v-col cols="4">
            <v-avatar size="96">
              <img :src="image" alt="alt" />
            </v-avatar>
          </v-col>
          <v-col cols="8">
            <h4 class="text-center headline font-weight-light">{{ name }}</h4>
            <p class="text-center title">{{ description }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

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
