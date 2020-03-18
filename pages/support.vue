<template>
  <ContactForm />
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
    await this.$recaptcha.init()
  }
}

</script>

<style>
</style>