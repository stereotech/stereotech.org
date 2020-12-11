export interface Seller {
    name: string
    logo: { path: string }
    email: string
    website: string
    region: string
    country: string
    address: string
    phone?: string
    coords: { lat: number, lng: number }[]
    type: SellerType
}

export enum SellerType {
    Manufacturer = 'Manufacturer',
    Distributor = 'Distributor',
    Diler = 'Diler'
}