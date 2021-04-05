<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col lg="8">
        <ContactForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ContactForm from '~/components/ContactForm.vue'

@Component({
  head: {
    title: 'Техническая поддержка'
  },
  components: {
    ContactForm
  }
})
export default class Support extends Vue {
  async mounted () {
    //@ts-ignore
    await this.$recaptcha.init()
  }
}

</script>

<style>
</style>