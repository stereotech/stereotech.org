<template>
  <client-only>
    <v-card>
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="12" class="text-center">
            <h4 class="display-1 text-uppercase font-weight-light">{{title}}</h4>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="12" lg="8">
            <v-window v-model="current">
              <v-window-item v-for="(item, index) in videoItems" :key="index">
                <iframe
                  width="100%"
                  height="500uv"
                  :src="`https://www.youtube.com/embed/${item.id.videoId}`"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions class="justify-space-between">
        <v-btn text @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group v-model="current" class="text-center" mandatory>
          <v-item
            v-for="n in videoItems.length"
            :key="`btn-${n}`"
            v-slot:default="{ active, toggle }"
          >
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn text @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </client-only>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class YoutubeChannel extends Vue {

  @Prop({ type: String, default: 'Наш канал на Youtube' }) title !: string
  @Prop({ type: String, default: '' }) playlistId !: string
  private video: any = {}
  private videoItems: any[] = []
  private current: number = 0

  next () {
    this.current = this.current + 1 === this.videoItems.length
      ? 0
      : this.current + 1
  }
  prev () {
    this.current = this.current - 1 < 0
      ? this.videoItems.length - 1
      : this.current - 1
  }

  private async getVideo () {
    let response
    if (this.playlistId == '') {
      response = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCgpK6bZ6uaGyIGB2jp-aTUw&maxResults=10&order=date&key=AIzaSyCnwZ9Tr1FBOgQeOeSDGxJgs6wFlUizmjE')
    }
    else {
      response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${this.playlistId}&key=AIzaSyCnwZ9Tr1FBOgQeOeSDGxJgs6wFlUizmjE`)
    }
    this.video = await response.json()
    //console.log(this.video.items)
    this.videoItems = this.video.items
    return this.videoItems
  }

  async mounted () {
    await this.getVideo()
  }
}

</script>

<style>
</style>