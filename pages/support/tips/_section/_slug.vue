<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>{{ page.attrs.title }}</h1>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-container>
            <HtmlParser :content="page.body" />
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HtmlParser from '@/components/docs/HtmlParser.vue'
import { VAlert } from 'vuetify/lib'

@Component({
  components: {
    HtmlParser,
    VAlert
  },
  async asyncData (context: any) {
    const slug = context.params.slug || '1-introduction'
    const path = `/${context.store.state.locale}/tips-${context.params.section}/${slug}`
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
export default class Slug extends Vue {
  page: any = {}
  path: string = ''
  section: string = ''

  get baseLink () {
    return '/' + this.$route.params.section
  }
  get list (): any[] {
    return this.$store.state.menu[this.$route.params.section].reduce((links: any, section: any) => links.concat(section.links), [])
  }
  get lastPathPart (): string {
    return this.$route.path.replace(/\/$/, '').split('/')[4] || ''
  }
  get prevLink (): any {
    const index = this.list.findIndex(link => (link.to || '/') === `/${this.lastPathPart}`)

    return this.list[index - 1] || null
  }
  get nextLink (): any {
    const index = this.list.findIndex(link => (link.to || '/') === `/${this.lastPathPart}`)

    return this.list[index + 1] || null
  }

  goBack () {
    this.$router.push(this.baseLink + this.prevLink.to)
    this.$vuetify.goTo(0)
  }

  goNext () {
    this.$router.push(this.baseLink + this.nextLink.to)
    this.$vuetify.goTo(0)
  }
}

</script>

<style>
</style>