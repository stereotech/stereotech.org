<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light">{{$t('Руководства пользователя')}}</h1>
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
    title: 'Руководства пользователя'
  },
  components: {
    ManualPanel
  }
})
export default class Manuals extends Vue {
  manualGroups: ManualGroup[] = [
    {
      name: this.$store.state.lang.manuals.printers,
      items: [
        {
          name: 'Series 3xx',
          link: '/support/manuals/ste320',
          image: 'printers/desktop/series3.jpg'
        },
        {
          name: 'Series 5xx',
          link: '/support/manuals/ste520',
          image: 'printers/desktop/series5.jpg'
        },
      ]
    },
    {
      name: this.$store.state.lang.manuals.software,
      items: [
        {
          name: 'STE App',
          link: '/support/manuals/steapp',
          image: 'printers/common/cluster1.webp'
        },
        {
          name: 'STE Slicer',
          link: '/support/manuals/steslicer',
          image: 'printers/common/steslicer.jpg'
        }
      ]
    }
  ]
}
</script>
