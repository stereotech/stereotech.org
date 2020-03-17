<template>
    <v-card>
        <v-card-title>
            Техническая поддержка
        </v-card-title>
        <v-card-text>
            <v-form v-model="valid">
                <v-text-field
                    v-model="firstName"
                    :rules="[v => !!v || 'Name is required']"
                    label="Имя"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="lastName"
                    label="Фамилия"
                ></v-text-field>

                <!-- <v-text-field
                    type="text"
                    v-model="phoneNumber"
                    label = "Телефон"            
                    v-mask="'+*(***) ***-****'"
                ></v-text-field> -->
                
                    
                <!-- <v-text-field v-model="mask" label="Mask"></v-text-field> -->
            
            
                <v-text-field v-model="phoneNumber" v-mask="mask" label="Телефон"></v-text-field>
            
                

                <v-text-field
                    v-model="email"
                    :rules="[v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid']"
                    label="Почта"
                    required
                ></v-text-field>

                <v-textarea
                    v-model="description"                   
                    label="Описание проблемы"
                ></v-textarea>

                <v-select
                    v-model="apealTheme"
                    :items="apealThemeItems"
                    :rules="[v => !!v || 'Apeal theme is required']" 
                    label="Тема обращения"
                ></v-select>

                <v-select
                    v-model = "problemType" 
                    :disabled="!isEnable"  
                    :rules="[v => !!v || 'Problem type is required']"              
                    :items="showProblemTypeItems(apealTheme)"
                    label="Вид проблемы"
                ></v-select>

                <v-text-field
                    v-model="serialNumber"
                    :rules="[v => !!v || 'Serial number is required']"
                    label="Серийный номер устройства"
                    required
                ></v-text-field>

                <v-btn
                    :disabled="!valid"
                    color="primary"
                    class="mr-4"
                    @click="submit()"
                >
                    Submit
                </v-btn>
            </v-form>
        </v-card-text>

        
    </v-card>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)
@Component
export default class ContactForm extends Vue {

    // private emailRules = [
    //     v:any => !!v || 'E-mail is required',
    //     v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    // ]
    // private nameRules = [
    //     v => !!v || 'Name is required'
    // ]
    private dataString: string = ""
    private mask: string = "+#(###) ###-####"
    private valid: boolean = false
    private isEnable: boolean = false
    private firstName: string = ""
    private lastName: string = ""
    private phoneNumber: string = ""
    private email: string = ""
    private description: string = ""
    private apealTheme: string = ""
    private problemType: string = ""
    private serialNumber: string = ""
    private apealThemeItems: String[] = ['STE 520', 'STE 320', 'STE App', 'STE Slicer', 'Услуги']
    private showProblemTypeItems(apealThemeItem : string){
        let items: string[]
        if (apealThemeItem === 'Услуги'){
            this.isEnable = false
            return
        }
        else if (apealThemeItem === 'STE 520' || apealThemeItem === 'STE 320'){
            items = ['Не могу запустить печать',
            'Результаты печати неудовлетворительны',
            'Нужна помощь со встроенным ПО',
            'Что-то сломалось',
            'Отсутствуют детали',
            'Другое']
            this.isEnable = true
            return items
        }
        else if (apealThemeItem === 'STE App'){
            items = [
                'Ошибки на экране принтера',
                'Ошибки в приложении на смартфоне',
                'Ошибки в браузере',
                'Другое'
            ]
            this.isEnable = true
            return items
        }
        else if (apealThemeItem === 'STE Slicer') {
            items = [
                'Проблемы с установкой',
                'Проблемы с созданием профиля принтера',
                'Проблемы с подготовкой на печать',
                'Другое'
            ]
            this.isEnable = true
            return items
        }
    }

    private joinFormData(){        
        this.dataString.concat("name:", this.firstName, "\n",
        "lastName:", this.lastName, "\n",
        "phone:",this.phoneNumber, "\n",
        "email:", this.email, "\n",
        "description:", this.description, "\n",
        "apealTheme:", this.apealTheme, "\n",
        "pronlemType:", this.problemType, "\n",
        "serialNumber", this.serialNumber, "\n")
        return this.dataString
        //console.log(this.dataString)
    }

    private submit(){
        this.firstName = ""
        this.lastName = ""
        this.phoneNumber = ""
        this.email = ""
        this.apealTheme = ""
        this.problemType = ""
        this.serialNumber = ""
    }
}


</script>

<style>
</style>