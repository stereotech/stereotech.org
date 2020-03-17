<template>
  <v-row>
    <PrinterBanner model="ste520" :description="$store.state.lang.printer.ste520.description" />
    <MainParalax image="/main/bg1.webp" button-link="/info/about" />
    <SoftwarePanel
      :title="$store.state.lang.software.steslicer.title"
      :description="$store.state.lang.software.steslicer.description"
      microsoftstore
      app-name="steslicer"
    >
      <p
        class="title text-uppercase font-weight-light"
      >{{ $store.state.lang.software.steslicer.add1 }}</p>
      <p
        class="title text-uppercase font-weight-light"
      >{{ $store.state.lang.software.steslicer.add2 }}</p>
      <p
        class="title text-uppercase font-weight-light"
      >{{ $store.state.lang.software.steslicer.add3 }}</p>
    </SoftwarePanel>

    <PrinterFeature
      :title="$store.state.lang.software.steapp.title"
      :description="$store.state.lang.software.steapp.description"
      image="/printers/common/cluster1.webp"
    >
      <p class="title text-uppercase font-weight-light">{{ $store.state.lang.software.steapp.add4 }}</p>
      <p class="title text-uppercase font-weight-light">{{ $store.state.lang.software.steapp.add5 }}</p>
      <p class="title text-uppercase font-weight-light">{{ $store.state.lang.software.steapp.add6 }}</p>
    </PrinterFeature>
    <ColorModes />
    <PrinterFeature
      :title="$store.state.lang.printer.common.design.title"
      :description="$store.state.lang.printer.common.design.description"
      image="/printers/ste520/design.webp"
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
      >{{ $store.state.lang.printer.common.electronics.add1 }}</p>
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
    <FullSpecs model="ste520" />
    <BuyPrinter
      model="ste520"
      title="STE 520"
      :price="$store.state.lang.printer.ste520.spec.price.value"
      date=" "
    />
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PrinterBanner from '~/components/printers/PrinterBanner.vue'
import MainParalax from '~/components/MainParalax.vue'
import ColorModes from '~/components/printers/ColorModes.vue'
import PrinterFeature from '~/components/printers/PrinterFeature.vue'
import SoftwarePanel from '~/components/software/SoftwarePanel.vue'
import BuyPrinter from '~/components/printers/BuyPrinter.vue'
import FullSpecs from '~/components/printers/FullSpecs.vue'

@Component({
  components: {
    PrinterBanner,
    ColorModes,
    MainParalax,
    PrinterFeature,
    SoftwarePanel,
    BuyPrinter,
    FullSpecs
  },
  head: {
    title: 'Серия 520'
  }
})
export default class Ste520 extends Vue {

}

</script>

<style>
</style>
