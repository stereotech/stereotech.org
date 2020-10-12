import { LocaleMessage } from 'vue-i18n';

export interface KeyFeature {
    name: string | LocaleMessage
    mediaType: MediaType
    mediaSource: string
    description: string | LocaleMessage
    keys: string[]
}

export enum MediaType {
    image,
    video
}