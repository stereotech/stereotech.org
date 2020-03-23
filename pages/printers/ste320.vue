<template>
  <v-row>
    <PrinterBanner
      :model="$store.state.lang.ste320"
      :description="$store.state.lang.printer.ste320.description"
    />
    <PrinterFeature
      :title="$store.state.lang.software.steapp.title"
      :description="$store.state.lang.software.steapp.description"
      image="/printers/common/cluster1.webp"
    >
      <p class="title text-uppercase font-weight-light">{{ $store.state.lang.software.steapp.add4 }}</p>
      <p class="title text-uppercase font-weight-light">{{ $store.state.lang.software.steapp.add5 }}</p>
      <p class="title text-uppercase font-weight-light">{{ $store.state.lang.software.steapp.add6 }}</p>
    </PrinterFeature>
    <ColorModes model="ste320" />
    <PrinterFeature
      :title="$store.state.lang.printer.common.design.title"
      :description="$store.state.lang.printer.common.design.description"
      image="/printers/ste320/design.webp"
    >
      <p
        class="title text-uppercase font-weight-light"
      >{{ $store.state.lang.printer.common.design.add1 }}</p>
      <p
        class="title text-uppercase font-weight-light"
      >{{ $store.state.lang.printer.common.design.add2 }}</p>
      <p
        class="title text-uppercase font-weight-light"
      >{{ $store.state.lang.printer.common.design.add3 }}</p>
    </PrinterFeature>
    <PrinterFeature
      right-text
      :title="$store.state.lang.printer.common.frame.title"
      :description="$store.state.lang.printer.common.frame.description"
      image="/printers/common/frame.webp"
    >
      <p
        class="title text-uppercase font-weight-light"
      >{{ $store.state.lang.printer.common.frame.add1 }}</p>
      <p
        class="title text-uppercase font-weight-light"
      >{{ $store.state.lang.printer.common.frame.add2 }}</p>
    </PrinterFeature>
    <PrinterFeature
      :title="$store.state.lang.printer.common.electronics.title"
      :description="$store.state.lang.printer.common.electronics.description"
      image="/printers/common/motherboard.webp"
    >
      <p
        class="title text-uppercase font-weight-light"
      >{{ $store.state.lang.printer.common.electronics.add1}}</p>
      <p
        class="title text-uppercase font-weight-light"
      >{{ $store.state.lang.printer.common.electronics.add2 }}</p>
      <p
        class="title text-uppercase font-weight-light"
      >{{ $store.state.lang.printer.common.electronics.add3 }}</p>
    </PrinterFeature>
    <PrinterFeature
      right-text
      :title="$store.state.lang.printer.common.printhead.title"
      :description="$store.state.lang.printer.common.printhead.description"
      image="/printers/common/printhead.webp"
    >
      <p
        class="title text-uppercase font-weight-light"
      >{{ $store.state.lang.printer.common.printhead.add1 }}</p>
      <p
        class="title text-uppercase font-weight-light"
      >{{ $store.state.lang.printer.common.printhead.add2 }}</p>
    </PrinterFeature>
    <SupportedSlicers />
    <FullSpecs model="ste320" />
    <BuyPrinter
      model="ste320"
      title="STE 320"
      :price="$store.state.lang.printer.ste320.spec.price.value"
      date=" "
    />
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PrinterBanner from '~/components/printers/PrinterBanner.vue'
import ColorModes from '~/components/printers/ColorModes.vue'
import PrinterFeature from '~/components/printers/PrinterFeature.vue'
import SoftwarePanel from '~/components/software/SoftwarePanel.vue'
import BuyPrinter from '~/components/printers/BuyPrinter.vue'
import FullSpecs from '~/components/printers/FullSpecs.vue'
import SupportedSlicers from '~/components/printers/SupportedSlicers.vue'

@Component({
  components: {
    PrinterBanner,
    ColorModes,
    PrinterFeature,
    SoftwarePanel,
    BuyPrinter,
    FullSpecs,
    SupportedSlicers
  },
  head: {
    title: 'Серия 3хх'
  }
})
export default class Ste320 extends Vue {

}

</script>

<style>
</style>
