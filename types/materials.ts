export interface Material {
    sku: string
    name: string
    polymer?: string
    description?: string
    _id: string
    our_brand: boolean
}

export interface MaterialSpec {
    _id: string
    name: string
    unit?: string
}

export interface MaterialSpecValue {
    material: Material
    spec: MaterialSpec
    value?: string
}

export interface MaterialEntry {
    _id: string
    display: string
    link: string
}