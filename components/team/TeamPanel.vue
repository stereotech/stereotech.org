<template>
  <v-col cols="12">
    <v-card>
      <v-container fluid grid-list-xs>
        <v-row>
          <v-col cols="12">
            <h4 class="text-center display-2 font-weight-light">{{ $store.state.lang.team.title }}</h4>
          </v-col>
          <TeamCard
            v-for="(member, index) in team"
            :key="index"
            :name="member.name"
            :description="member.description"
            :image="member.image"
          />
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TeamCard from '~/components/team/TeamCard.vue'

@Component({
  components: {
    TeamCard
  }
})
export default class TeamPanel extends Vue {
  private team: any[] = [
    {
      name: this.$store.state.lang.avdeev.name,
      image: '/team/p1.jpg',
      description: this.$store.state.lang.avdeev.description
    },
    {
      name: this.$store.state.lang.drobotov.name,
      image: '/team/p2.jpg',
      description: this.$store.state.lang.drobotov.description
    },
    {
      name: this.$store.state.lang.gushchin.name,
      image: '/team/p3.jpg',
      description: this.$store.state.lang.gushchin.description
    },
    {
      name: this.$store.state.lang.shvets.name,
      image: '/team/p4.jpg',
      description: this.$store.state.lang.shvets.description
    },
    {
      name: this.$store.state.lang.martynovich.name,
      image: '/team/p5.jpg',
      description: this.$store.state.lang.martynovich.description
    },
    {
      name: this.$store.state.lang.bitushkova.name,
      image: '/team/p6.jpg',
      description: this.$store.state.lang.bitushkova.description
    }
  ]
}
</script>

<style>
</style>
