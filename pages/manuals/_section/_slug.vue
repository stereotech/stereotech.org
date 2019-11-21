<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>{{ page.attrs.title }}</h1>
      </v-col>
      <v-col cols="12">
        <HtmlParser :content="page.body" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HtmlParser from '@/components/docs/HtmlParser.vue'

@Component({
  components: {
    HtmlParser
  },
  async asyncData (context: any) {
    const slug = context.params.slug || 'introduction'
    const path = `/${context.store.state.locale}/${context.params.section}/${slug}`
    const data = {
      path,
      section: context.params.section,
      page: {}
    }
    try {
      const page = await context.$docs.get(path)
      if (!page.attrs.title) { console.error(`[/${path}] ${context.store.state.lang.text.please_define_title}.`) } // eslint-disable-line no-console
      if (!page.attrs.description) { console.error(`[/${path}] ${context.store.state.lang.text.please_define_description}.`) } // eslint-disable-line no-console
      data.page = page
    } catch (error) {
      if (!error.response || error.response.status !== 404) {
        return error({ statusCode: 500, message: context.store.state.lang.text.an_error_occurred })
      }
      return error({ statusCode: 404, message: context.store.state.lang.text.api_page_not_found })
    }
    return data
  }
})
export default class ManualSlug extends Vue {
  page: any = {}
  path: string = ''
  section: string = ''


}
</script>

<style>
</style>