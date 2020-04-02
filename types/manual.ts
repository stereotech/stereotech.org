export interface Manual {
    name: string,
    link: string,
    image: string
}

export interface ManualGroup {
    name: string
    items: Manual[]
}