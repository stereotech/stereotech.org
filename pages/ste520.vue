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
      title="STE App"
      description="Print process management app"
      image="/printers/common/cluster1.png"
    >
      <p
        class="headline text-uppercase font-weight-light"
      >Control multiple 3D and 5D printers from single interface</p>
      <p class="headline text-uppercase font-weight-light">Print job sceduling</p>
      <p class="headline text-uppercase font-weight-light">Printer reservation</p>
    </PrinterFeature>
    <ColorModes/>
    <PrinterFeature
      title="Laconic design"
      description="Simple but functional"
      image="/printers/ste520/design.png"
    >
      <p class="headline text-uppercase font-weight-light">Fully closed chamber</p>
      <p class="headline text-uppercase font-weight-light">Low noise level</p>
      <p class="headline text-uppercase font-weight-light">Easy access to the printing material</p>
    </PrinterFeature>
    <PrinterFeature
      rightText
      title="Tough aluminum frame"
      description="Less vibration"
      image="/printers/common/frame.png"
    >
      <p class="headline text-uppercase font-weight-light">Stable printing</p>
      <p class="headline text-uppercase font-weight-light">Precise linear rails</p>
    </PrinterFeature>
    <PrinterFeature
      title="Efficient electronics"
      description="32 bit motion processor"
      image="/printers/common/motherboard.png"
    >
      <p
        class="headline text-uppercase font-weight-light"
      >4 Core 1GHz ARM Co-processor for network communication and print management</p>
      <p class="headline text-uppercase font-weight-light">8Gb internal storage</p>
      <p
        class="headline text-uppercase font-weight-light"
      >Stepper motor drivers with 1/128 step division</p>
    </PrinterFeature>
    <PrinterFeature
      rightText
      title="Dual nozzle printhead"
      description="Direct drive extruder for all types of materials"
      image="/printers/common/printhead.png"
    >
      <p class="headline text-uppercase font-weight-light">320°C maximum temperature</p>
      <p class="headline text-uppercase font-weight-light">Removable printing blocks</p>
    </PrinterFeature>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import PrinterBanner from '~/components/printers/PrinterBanner.vue'
import MainParalax from '~/components/MainParalax.vue'
import ColorModes from '~/components/printers/ColorModes.vue'
import PrinterFeature from '~/components/printers/PrinterFeature.vue'
import SoftwarePanel from '~/components/software/SoftwarePanel.vue'

@Component({
  components: {
    PrinterBanner,
    ColorModes,
    MainParalax,
    PrinterFeature,
    SoftwarePanel
  }
})
export default class Ste520 extends Vue {

}

</script>

<style>
</style>
