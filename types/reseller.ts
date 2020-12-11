export interface Seller {
    name: string
    logo: { path: string }
    email: string
    website: string
    region: string
    country: string
    address: string
    phone?: string
    coords: { value: string }[]
    type: SellerType
}

export enum SellerType {
    Manufacturer = 'Manufacturer',
    Distributor = 'Distributor',
    Diler = 'Diler'
}