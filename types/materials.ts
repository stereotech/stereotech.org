export interface Material {
    sku: string
    name: string
    polymer?: string
    description?: string
    _id: string
    our_brand: boolean
    tech_specs: MaterialSpecValue[]
}

export interface MaterialSpec {
    _id: string
    name: string
    unit?: string
}

export interface MaterialSpecValue {
    spec?: MaterialSpec
    value?: string
}