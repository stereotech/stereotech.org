<template>
  <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <h4 class="text-center display-2 font-weight-light">{{$t('Наша команда')}}</h4>
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

  // private team: {
  //   name: string,
  //   image: string,
  //   description: string
  // }[]
  // private async getTeam() {
  //   let data
  //   let response = await fetch(`https://api2.stereotech.org/api/collections/get/team?token=${process.env.COCKPIT_TOKEN}`)
  //   data = await response.json()
  //   this.adresses = data.entries
  // }

  get team(): {
    name: string,
    image: string,
    description: string
  }[] {
    return[{
      name: this.$tc('Артем Авдеев'),
      image: 'team/p1.jpg',
      description: this.$tc('Генеральный директор')
    },
      {
        name: this.$tc('Алексей Дроботов'),
        image: 'team/p2.jpg',
        description: this.$tc('Финансовый директор')
      },
      {
        name: this.$tc('Илья Гущин'),
        image: 'team/p3.jpg',
        description: this.$tc('Ведущий разработчик')
      },
      {
        name: this.$tc('Андрей Швец'),
        image: 'team/p4.jpg',
        description: this.$tc('Технический директор')
      },
      {
        name: this.$tc('Анатолий Тулаев'),
        image: 'team/p7.jpg',
        description: this.$tc('Директор по развитию')
      },
      {
        name: this.$tc('Иван Мартынович'),
        image: 'team/p5.jpg',
        description: this.$tc('Специалист 3D печати')
      },
      {
        name: this.$tc('Анастасия Мавлянова'),
        image: 'team/p8.jpg',
        description: this.$tc('Специалист по продажам и закупкам')
      }]
  }
}
</script>

<style>
</style>
