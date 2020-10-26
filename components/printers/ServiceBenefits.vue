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
get serviceBenefits(): KeyFeature[] {
  return [
    {
      name: this.$tc('Бесплатная гарантия'),
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/yearOfWarranty.jpg',
      description: this.$tc('На все модели принтеров Stereotech серии 3хх и 5хх действует бесплатная гарантия 1 год.'),
      keys: []
    },
        {
      name: this.$tc('Бесплатная доставка'),
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/delivery.jpg',
      description: this.$tc('Мы надежно упакуем и бесплатно доставим принтер по РФ до ближайшего к Вам терминала транспортной компании.'),
      keys: []
    },
    {
      name: this.$tc('Бесплатная пусконаладка'),
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/_DSC5180.jpg',
      description: this.$tc('Уже есть принтер Stereotech, но не знаете с чего начать? Оставьте заявку и наши специалисты онлайн помогут настроить принтер к работе и расскажут нюансы – все, что нужно, чтобы использовать оборудование по-максимуму!'),
      keys: []
    },
    {
      name: this.$tc('Богатая комплектация'),
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/equipment.jpg',
      description: this.$tc('В комплект к каждому принтеру Вы получите 2 катушки пластика, запасные принтблоки, адгезив для печати и комплект инструментов для обслуживания и эксплуатации.'),
      keys: []
    },
    {
      name: this.$tc('Обладай инновациями'),
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/diplomas.jpg',
      description: this.$tc('Технологии Stereotech высоко оценили множество экспертов в различных отраслях. Используйте инновации с новой линейкой принтеров серии 5хх!'),
      keys: []
    },
    {
      name: this.$tc('Скидка 28% для сферы образования'),
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/education.jpg',
      description: this.$tc('Предоставляем комплект обучающих материалов и скидку до 28% на 3D принтеры моделей 320 base и 320 pro для образовательных учреждений при покупке по прямому договору.'),
      keys: []
    }, 
    {
      name: this.$tc('Окупаемость меньше 2 месяцев'),
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/payback.jpg',
      description: this.$tc('Принтеры Stereotech меньше, чем за 2 месяца окупятся на Вашем производстве по сравнению с использованием стороннего сервиса по 3D печати.'),
      keys: []
    }, 
    {
      name: this.$tc('Бесплатная техническая поддержка'),
      mediaType: MediaType.image,
      mediaSource: '/printers/serviceBenefits/techSupport.jpg',
      description: this.$tc('Есть вопросы по использованию? Решим их в месте с бесплатной годовой технической поддержкой Stereotech на все модели серии 3хх и 5хх.'),
      keys: []
    }      
  ]
} 
}
</script>

<style>

</style>