<template>
  <v-layout row wrap>
    <PrinterBanner model="ste320" :description="$t('printer.ste320.description')"/>
    <PrinterFeature
      :title="$t('software.steapp.title')"
      :description="$t('software.steapp.description')"
      image="/printers/common/cluster1.webp"
    >
      <p class="title text-uppercase font-weight-light">{{ $t('software.steapp.add4') }}</p>
      <p class="title text-uppercase font-weight-light">{{ $t('software.steapp.add5') }}</p>
      <p class="title text-uppercase font-weight-light">{{ $t('software.steapp.add6') }}</p>
    </PrinterFeature>
    <ColorModes model="ste320"/>
    <PrinterFeature
      :title="$t('printer.common.design.title')"
      :description="$t('printer.common.design.description')"
      image="/printers/ste320/design.webp"
    >
      <p class="title text-uppercase font-weight-light">{{ $t('printer.common.design.add1') }}</p>
      <p class="title text-uppercase font-weight-light">{{ $t('printer.common.design.add2') }}</p>
      <p class="title text-uppercase font-weight-light">{{ $t('printer.common.design.add3') }}</p>
    </PrinterFeature>
    <PrinterFeature
      rightText
      :title="$t('printer.common.frame.title')"
      :description="$t('printer.common.frame.description')"
      image="/printers/common/frame.webp"
    >
      <p class="title text-uppercase font-weight-light">{{ $t('printer.common.frame.add1') }}</p>
      <p class="title text-uppercase font-weight-light">{{ $t('printer.common.frame.add2') }}</p>
    </PrinterFeature>
    <PrinterFeature
      :title="$t('printer.common.electronics.title')"
      :description="$t('printer.common.electronics.description')"
      image="/printers/common/motherboard.webp"
    >
      <p class="title text-uppercase font-weight-light">{{ $t('printer.common.electronics.add1') }}</p>
      <p class="title text-uppercase font-weight-light">{{ $t('printer.common.electronics.add2') }}</p>
      <p class="title text-uppercase font-weight-light">{{ $t('printer.common.electronics.add3') }}</p>
    </PrinterFeature>
    <PrinterFeature
      rightText
      :title="$t('printer.common.printhead.title')"
      :description="$t('printer.common.printhead.description')"
      image="/printers/common/printhead.webp"
    >
      <p class="title text-uppercase font-weight-light">{{ $t('printer.common.printhead.add1') }}</p>
      <p class="title text-uppercase font-weight-light">{{ $t('printer.common.printhead.add2') }}</p>
    </PrinterFeature>
    <SupportedSlicers/>
    <FullSpecs model="ste320"/>
    <BuyPrinter
      model="ste320"
      title="STE 320"
      :price="$t('printer.ste320.spec.price.value')"
      date="Q1 2020"
    />
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
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
  }
})
export default class Ste320 extends Vue {

}

</script>

<style>
</style>
