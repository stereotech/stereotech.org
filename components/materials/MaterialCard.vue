<template>
  <v-card>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6" v-if="material.image">
          <v-img :src="material.image"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <div class="text-center font-weight-light display-2">
            {{ material.name }}
          </div>
          <br />
          <div>{{ material.description }}</div>
          <template v-if="material.file">
            <br />
            <div class="text-center">
              <v-btn
                color="primary"
                depressed
                target="_blank"
                :href="material.file"
              >
                <v-icon left>mdi-download</v-icon
                >{{ $t("Загрузить брошюру") }}</v-btn
              >
            </div>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Material } from '~/types/materials'

@Component
export default class MaterialCard extends Vue {
  
  @Prop({
    type: Object, default: (): Material => {
      return {
        sku: '',
        name: '',
        _id: '',
        our_brand: true,
        tech_specs: [],
        locale: 'default'
      }
    }
  }) material!: Material

}

</script>

<style>
</style>