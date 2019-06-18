<template>
  <v-flex xs12>
    <v-card>
      <v-container fluid grid-list-xs>
        <v-layout row wrap>
          <v-flex xs12>
            <h4 class="text-xs-center display-2 font-weight-light">{{ $t('team.title')}}</h4>
          </v-flex>
          <TeamCard
            v-for="(member, index) in team"
            :key="index"
            :name="member.name"
            :description="member.description"
            :image="member.image"
          />
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import TeamCard from '~/components/team/TeamCard.vue'

@Component({
  components: {
    TeamCard
  }
})
export default class TeamPanel extends Vue {
  private team: any[] = [
    {
      name: 'team.avdeev.name',
      image: '/team/p1.jpg',
      description: 'team.avdeev.description'
    },
    {
      name: 'team.drobotov.name',
      image: '/team/p2.jpg',
      description: 'team.drobotov.description'
    },
    {
      name: 'team.gushchin.name',
      image: '/team/p3.jpg',
      description: 'team.gushchin.description'
    },
    {
      name: 'team.shvets.name',
      image: '/team/p4.jpg',
      description: 'team.shvets.description'
    },
    {
      name: 'team.martynovich.name',
      image: '/team/p5.jpg',
      description: 'team.martynovich.description'
    },
    {
      name: 'team.bitushkova.name',
      image: '/team/p6.jpg',
      description: 'team.bitushkova.description'
    }
  ]
}
</script>


<style>
</style>
