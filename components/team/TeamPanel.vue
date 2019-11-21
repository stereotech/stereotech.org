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
      name: this.$store.state.lang.team.avdeev.name,
      image: '/team/p1.jpg',
      description: this.$store.state.lang.team.avdeev.description
    },
    {
      name: this.$store.state.lang.team.drobotov.name,
      image: '/team/p2.jpg',
      description: this.$store.state.lang.team.drobotov.description
    },
    {
      name: this.$store.state.lang.team.gushchin.name,
      image: '/team/p3.jpg',
      description: this.$store.state.lang.team.gushchin.description
    },
    {
      name: this.$store.state.lang.team.shvets.name,
      image: '/team/p4.jpg',
      description: this.$store.state.lang.team.shvets.description
    },
    {
      name: this.$store.state.lang.team.martynovich.name,
      image: '/team/p5.jpg',
      description: this.$store.state.lang.team.martynovich.description
    },
    {
      name: this.$store.state.lang.team.bitushkova.name,
      image: '/team/p6.jpg',
      description: this.$store.state.lang.team.bitushkova.description
    }
  ]
}
</script>

<style>
</style>
