<template>
  <v-row>
    <v-col cols="12">
      <script id="bx24_form_inline" data-skip-moving="true"></script>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Feedback extends Vue {
  mounted () {
    (function (w, d, u, b) {
      //@ts-ignore
      w["Bitrix24FormObject"] = b;
      //@ts-ignore
      w[b] = w[b] ||
        function () {
          arguments[0].ref = u;
          //@ts-ignore
          (w[b].forms = w[b].forms || []).push(arguments[0]);
        };
      //@ts-ignore
      if (w[b]["forms"]) return;
      var s = d.createElement("script");
      //@ts-ignore
      s.async = 1;
      //@ts-ignore
      s.src = u + "?" + 1 * new Date();
      var h = d.getElementsByTagName("script")[0];
      //@ts-ignore
      h.parentNode.insertBefore(s, h);
    })(
      window,
      document,
      "https://stereotech.bitrix24.ru/bitrix/js/crm/form_loader.js",
      "b24form"
    );
    //@ts-ignore
    b24form({ id: "3", lang: "ru", sec: "***REMOVED***", type: "inline" });
  }
}
</script>

<style>
</style>