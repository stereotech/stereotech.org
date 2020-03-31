export interface Seller {
    name: string
    logo: string
    email: string
    website: string
    region: string
    country: string
    address: string
    coords: number[]
    type: SellerType
}

export enum SellerType {
    Manufacturer,
    Distributor,
    Diler
}