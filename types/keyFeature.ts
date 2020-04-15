export interface KeyFeature {
    name: string
    mediaType: MediaType
    mediaSource: string
    description: string
    keys: string[]
}

export enum MediaType {
    image,
    video
}