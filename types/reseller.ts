export interface Seller {
    id: string
    title: string
    logo: { path: string }
    email: string
    website: string
    region: string
    country: string
    address: string
    phone?: string
    coords: string
    type: SellerType
}

export enum SellerType {
    Manufacturer = 'Manufacturer',
    Distributor = 'Distributor',
    Diler = 'Diler'
}