<template>
  <v-layout row wrap>
    <PrinterBanner model="ste520" :description="$t('printer.ste520.description')"/>
    <MainParalax image="/main/bg1.png" buttonLink="/about"/>
    <SoftwarePanel
      :title="$t('software.steslicer.title')"
      :description="$t('software.steslicer.description')"
      microsoftstore
      appName="steslicer"
    >
      <p class="headline text-uppercase font-weight-light">{{$t('software.steslicer.add1')}}</p>
      <p class="headline text-uppercase font-weight-light">{{$t('software.steslicer.add2')}}</p>
      <p class="headline text-uppercase font-weight-light">{{$t('software.steslicer.add3')}}</p>
    </SoftwarePanel>

    <PrinterFeature
      :title="$t('software.steapp.title')"
      :description="$t('software.steapp.description')"
      image="/printers/common/cluster1.png"
    >
      <p class="headline text-uppercase font-weight-light">{{ $t('software.steapp.add4') }}</p>
      <p class="headline text-uppercase font-weight-light">{{ $t('software.steapp.add5') }}</p>
      <p class="headline text-uppercase font-weight-light">{{ $t('software.steapp.add6') }}</p>
    </PrinterFeature>
    <ColorModes/>
    <PrinterFeature
      :title="$t('printer.common.design.title')"
      :description="$t('printer.common.design.description')"
      image="/printers/ste520/design.png"
    >
      <p class="headline text-uppercase font-weight-light">{{ $t('printer.common.design.add1') }}</p>
      <p class="headline text-uppercase font-weight-light">{{ $t('printer.common.design.add2') }}</p>
      <p class="headline text-uppercase font-weight-light">{{ $t('printer.common.design.add3') }}</p>
    </PrinterFeature>
    <PrinterFeature
      rightText
      :title="$t('printer.common.frame.title')"
      :description="$t('printer.common.frame.description')"
      image="/printers/common/frame.png"
    >
      <p class="headline text-uppercase font-weight-light">{{ $t('printer.common.frame.add1') }}</p>
      <p class="headline text-uppercase font-weight-light">{{ $t('printer.common.frame.add2') }}</p>
    </PrinterFeature>
    <PrinterFeature
      :title="$t('printer.common.electronics.title')"
      :description="$t('printer.common.electronics.description')"
      image="/printers/common/motherboard.png"
    >
      <p
        class="headline text-uppercase font-weight-light"
      >{{ $t('printer.common.electronics.add1') }}</p>
      <p
        class="headline text-uppercase font-weight-light"
      >{{ $t('printer.common.electronics.add2') }}</p>
      <p
        class="headline text-uppercase font-weight-light"
      >{{ $t('printer.common.electronics.add3') }}</p>
    </PrinterFeature>
    <PrinterFeature
      rightText
      :title="$t('printer.common.printhead.title')"
      :description="$t('printer.common.printhead.description')"
      image="/printers/common/printhead.png"
    >
      <p class="headline text-uppercase font-weight-light">{{ $t('printer.common.printhead.add1') }}</p>
      <p class="headline text-uppercase font-weight-light">{{ $t('printer.common.printhead.add2') }}</p>
    </PrinterFeature>
    <BuyPrinter model="ste520" title="STE 520" price="349 000" date="Q1 2020"/>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import PrinterBanner from '~/components/printers/PrinterBanner.vue'
import MainParalax from '~/components/MainParalax.vue'
import ColorModes from '~/components/printers/ColorModes.vue'
import PrinterFeature from '~/components/printers/PrinterFeature.vue'
import SoftwarePanel from '~/components/software/SoftwarePanel.vue'
import BuyPrinter from '~/components/printers/BuyPrinter.vue'

@Component({
  components: {
    PrinterBanner,
    ColorModes,
    MainParalax,
    PrinterFeature,
    SoftwarePanel,
    BuyPrinter
  }
})
export default class Ste520 extends Vue {

}

</script>

<style>
</style>
