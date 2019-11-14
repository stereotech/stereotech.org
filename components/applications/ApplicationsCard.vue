<template>
  <v-col cols="12" sm="6" lg="3">
    <v-card hover>
      <v-container fluid grid-list-xs>
        <v-row align="center">
          <v-col cols="4">
            <v-avatar size="96">
              <v-icon x-large color="primary">
                {{ icon }}
              </v-icon>
            </v-avatar>
          </v-col>
          <v-col cols="8">
            <h4 class="text-center title font-weight-light">
              {{ $t(name) }}
            </h4>
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
export default class ApplicationsCard extends Vue {
  @Prop({ type: String, required: true, default: '' }) name!: string
  @Prop({ type: String, required: true, default: '' }) icon!: string
}
</script>

<style>
</style>
