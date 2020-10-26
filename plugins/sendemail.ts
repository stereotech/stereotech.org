//97c1c3bb-3f64-4510-b50c-c9001b9d6f8f
//a86ec5b6-dff4-4c87-ad6f-8e7cdc50698e

import './../assets/smtp.js'
declare let Email: any

import { Plugin } from '@nuxt/types'



declare module 'vue/types/vue' {
    interface Vue {
        $sendEmail (options: sendEmailOptions): void
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $sendEmail (options: sendEmailOptions): void
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $sendEmail (options: sendEmailOptions): void
    }
}

const sendEmailPlugin: Plugin = (context, inject) => {
    inject('sendEmail', (options: sendEmailOptions) => {

        Email.send({
            SecureToken: process.env.SECURE_TOKEN,
            To: options.to,
            From: options.from,
            Subject: options.subject,
            Body: options.body,
            Attachments: options.files.map(f => { return { name: f.name, path: f.name } })
        })
    })
}

export interface sendEmailOptions {
    to: string
    from: string
    subject: string
    body: string
    files: File[]
}