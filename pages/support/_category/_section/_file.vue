<template>
  <v-container>
      <article>
          <nuxt-content :document="page" />
      </article>
      <v-col cols="12"> 
          <v-btn v-if="prevNext[0]" :to="localePath(`/support/${this.$route.params.category}/${this.$route.params.section}/${prevNext[0].slug}`)" nuxt>
            <v-icon right>mdi-chevron-left</v-icon>
            {{prevNext[0].title}}
          </v-btn>
          <v-btn v-if="prevNext[1]" :to="localePath(`/support/${this.$route.params.category}/${this.$route.params.section}/${prevNext[1].slug}`)" nuxt>
            {{prevNext[1].title}}
            <v-icon right>mdi-chevron-right</v-icon>
          </v-btn>
      </v-col>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { IContentDocument } from "~/node_modules/@nuxt/content/types/content";

@Component
export default class Section extends Vue{
    page: IContentDocument | IContentDocument[] = []  
    prevNext: IContentDocument | IContentDocument[] = []

    async mounted(){
        
        this.page = await this.$content(`/user-manuals/${this.$i18n.locale}/${this.$route.params.category}/${this.$route.params.section}/${this.$route.params.file}`, {deep:true}).fetch()
        // if(this.$route.hash){
        //     await this.$vuetify.goTo(this.$route.hash)
        // }
       this.prevNext = await this.$content(`/user-manuals/${this.$i18n.locale}/${this.$route.params.category}/${this.$route.params.section}`, {deep:true}).only(['title', 'slug']).surround(this.$route.params.file).fetch()
       // const [prev, next] = await this.$content(`/user-manuals/${this.$i18n.locale}/${this.$route.params.category}/${this.$route.params.section}/${this.$route.params.file}`).surround(`${this.$route.params.file}`).fetch()
    }
}
</script>

<style>
    .nuxt-content h1 {
    font-size: 6rem !important;
    line-height: 6rem;
    letter-spacing: -0.015625em !important;
    font-weight: 300;
    font-family: Roboto, sans-serif !important;
    }
    .nuxt-content h2 {
    font-size: 3.75rem !important;
    line-height: 3.75rem;
    letter-spacing: -0.0083333333em !important;
    font-weight: 300;
    font-family: Roboto, sans-serif !important;
    }
    .nuxt-content img {
    line-height: 1.5;
    white-space: normal;
    color: rgba(0, 0, 0, 0.87);
    box-sizing: inherit;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
    z-index: 0;
    position: relative;
    overflow: hidden;
    flex: 1 0 auto;
    max-width: 100%;
    max-height: 480px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    }
    .nuxt-content p {
    word-break: normal;
    tab-size: 4;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    white-space: normal;
    color: rgba(0, 0, 0, 0.87);
    background-repeat: no-repeat;
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    margin-bottom: 16px;
    }
    .nuxt-content ol {
    word-break: normal;
    tab-size: 4;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    white-space: normal;
    color: rgba(0, 0, 0, 0.87);
    background-repeat: no-repeat;
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    padding-left: 24px;
    }
    .nuxt-content li {
    word-break: normal;
    tab-size: 4;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    white-space: normal;
    color: rgba(0, 0, 0, 0.87);
    background-repeat: no-repeat;
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    }
    .nuxt-content ul {
    word-break: normal;
    tab-size: 4;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    white-space: normal;
    color: rgba(0, 0, 0, 0.87);
    background-repeat: no-repeat;
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    padding-left: 24px;
    }
    .nuxt-content blockquote {
    word-break: normal;
    tab-size: 4;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    white-space: normal;
    background-repeat: no-repeat;
    box-sizing: inherit;
    margin: 0;
    display: block;
    font-size: 16px;
    margin-bottom: 16px;
    padding: 16px;
    position: relative;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    color: #fff;
    background-color: #9c27b0 !important;
    border-color: #9c27b0 !important;
    border-radius: 4px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14),
        0 0 0 0 rgba(0, 0, 0, 0.12);
    }
    .nuxt-content blockquote p {
    word-break: normal;
    tab-size: 4;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    white-space: normal;
    font-size: 16px;
    color: #fff;
    background-repeat: no-repeat;
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    flex: 1 1 auto;
    }
    .nuxt-content table {
    word-break: normal;
    tab-size: 4;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    white-space: normal;
    color: rgba(0, 0, 0, 0.87);
    background-repeat: no-repeat;
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    width: 100%;
    border-spacing: 0;
    }
    .nuxt-content thead {
    word-break: normal;
    tab-size: 4;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    white-space: normal;
    color: rgba(0, 0, 0, 0.87);
    border-spacing: 0;
    background-repeat: no-repeat;
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    }
    .nuxt-content thead tr {
    word-break: normal;
    tab-size: 4;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    white-space: normal;
    color: rgba(0, 0, 0, 0.87);
    border-spacing: 0;
    background-repeat: no-repeat;
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    }
    .nuxt-content th {
    word-break: normal;
    tab-size: 4;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    white-space: normal;
    border-spacing: 0;
    background-repeat: no-repeat;
    box-sizing: inherit;
    margin: 0;
    padding: 0 16px;
    user-select: none;
    font-size: 12px;
    height: 48px;
    text-align: left;
    color: rgba(0, 0, 0, 0.54);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
    .nuxt-content tbody {
    word-break: normal;
    tab-size: 4;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    white-space: normal;
    color: rgba(0, 0, 0, 0.87);
    border-spacing: 0;
    background-repeat: no-repeat;
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    }
    .nuxt-content tbody tr {
    word-break: normal;
    tab-size: 4;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    white-space: normal;
    color: rgba(0, 0, 0, 0.87);
    border-spacing: 0;
    background-repeat: no-repeat;
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    }
    .nuxt-content tbody td {
    word-break: normal;
    tab-size: 4;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: Roboto, sans-serif;
    line-height: 1.5;
    white-space: normal;
    color: rgba(0, 0, 0, 0.87);
    border-spacing: 0;
    background-repeat: no-repeat;
    box-sizing: inherit;
    margin: 0;
    padding: 0 16px;
    font-size: 14px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
</style>