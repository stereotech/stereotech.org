<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <h1
          class="display-3 text-uppercase font-weight-light text-center hidden-xs-only"
        >Советы по использованию</h1>
        <h1
          class="headline text-uppercase font-weight-light text-center hidden-sm-and-up"
        >Советы по использованию</h1>
      </v-col>
      <v-col cols="12" lg="10" v-for="(manualGroup,index) in manualGroups" :key="index">
        <ManualPanel :title="manualGroup.name" :manuals="manualGroup.items" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ManualPanel from '~/components/docs/ManualPanel.vue'
import { ManualGroup } from '~/types/manual'

@Component({
  head: {
    title: 'Советы по использованию'
  },
  components: {
    ManualPanel
  }
})
export default class Tips extends Vue {
  manualGroups: ManualGroup[] = [
    {
      name: this.$store.state.lang.manuals.printers,
      items: [
        {
          name: 'STE 320',
          link: '/support/manuals/ste320/1-introduction',
          image: '/printers/STE 320/banner.webp'
        },
        {
          name: 'STE 320',
          link: '/support/manuals/ste320/2-quickstart',
          image: '/printers/STE 320/banner.webp'
        },
      ]
    }
  ]
}
</script>
