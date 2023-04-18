export interface Material {
    sku: string
    name: string
    polymer?: string
    description?: string
    _id: string
    our_brand: boolean
    tech_specs: MaterialSpecValue[]
    image?: string
    file?: string
    locale: string
}

export interface MaterialSpec {
    _id: string
    name: string
    unit?: string
    locale: string
}

export interface MaterialSpecValue {
    specs_description?: MaterialSpec
    specs_value?: string
}