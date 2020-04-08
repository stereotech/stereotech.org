<template>
  <v-card>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h4
            class="headline text-uppercase font-weight-regular text-center"
          >{{ $t('Характеристики') }}</h4>
        </v-col>
        <v-col
          cols="12"
          v-for="attributeGroup in attributes"
          :key="attributeGroup.attribute_group_id"
        >
          <v-data-table
            :items="attributeGroup.attribute"
            hide-default-footer
            item-key="attribute_id"
            hide-default-header
            :items-per-page="99"
          >
            <template v-slot:header>{{ this.$tc(attributeGroup.name) }}</template>
            <template v-slot:item="{item}">
              <tr>
                <td class="subheading text-uppercase font-weight-light text-center">{{ item.name }}</td>
                <td class="subheading text-center">{{ item.text }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class FullSpecs extends Vue {
  @Prop({ type: Array, required: true, default: () => { return [] } }) attributes!: any[]
}

</script>

<style>
</style>
