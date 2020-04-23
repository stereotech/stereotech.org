<template>
  <KeyFeatures :title="this.$tc('Сервисные преимущества')" :items="serviceBenefits"/>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import KeyFeatures from '~/components/KeyFeatures.vue'
import {KeyFeature, MediaType} from '~/types/keyFeature'

@Component({
  components: {
    KeyFeatures
  }
})
export default class ServiceBenefits extends Vue{
serviceBenefits: KeyFeature[]=[
    {
      name:'Бесплатная гарантия',
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/yearOfWarranty.jpg',
      description: 'На все модели принтеров Stereotech серии 3хх и 5хх действует бесплатная гарантия 1 год.',
      keys: []
    },
        {
      name:'Бесплатная доставка',
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/delivery.jpg',
      description: 'Мы надежно упакуем и бесплатно доставим принтер по РФ до ближайшего к Вам терминала транспортной компании.',
      keys: []
    },
    {
      name:'Бесплатная пусконаладка',
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/_DSC5180.jpg',
      description: 'Уже есть принтер Stereotech, но не знаете с чего начать? Оставьте заявку и наши специалисты онлайн помогут настроить принтер к работе и расскажут нюансы – все, что нужно, чтобы использовать оборудование по-максимуму!',
      keys: []
    },
    {
      name:'Богатая комплектация',
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/equipment.jpg',
      description: 'В комплект к каждому принтеру Вы получите 2 катушки пластика, запасные принтблоки, адгезив для печати и комплект инструментов для обслуживания и эксплуатации.',
      keys: []
    },
    {
      name:'Обладай инновациями',
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/',
      description: 'Технологии Stereotech высоко оценили множество экспертов в различных отраслях. Используйте инновации с новой линейкой принтеров серии 5хх!',
      keys: []
    },
    {
      name:'Скидка 28% для сферы образования',
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/education.jpg',
      description: 'Предоставляем комплект обучающих материалов и скидку до 28% на 3D принтеры моделей 320 base и 320 pro для образовательных учреждений при покупке по прямому договору.',
      keys: []
    }, 
    {
      name: 'Окупаемость меньше 2 месяцев',
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/payback.jpg',
      description: 'Принтеры Stereotech меньше, чем за 2 месяца окупятся на Вашем производстве по сравнению с использованием стороннего сервиса по 3D печати.',
      keys: []
    }, 
    {
      name: 'Бесплатная техническая поддержка',
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/techSupport.jpg',
      description: 'Есть вопросы по использованию? Решим их в месте с бесплатной годовой технической поддержкой Stereotech на все модели серии 3хх и 5хх.',
      keys: []
    }      
  ]
}
</script>

<style>

</style>