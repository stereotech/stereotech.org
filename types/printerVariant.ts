export interface PrinterVariant {
    model: string
    image: string
    buyImage?: string
    printerType: PrinterType
    extruderType: ExtruderType
    printVolumeType: PrintVolumeType
    fiveAxisType: FiveAxisType
    description: string
}

export enum PrinterType {
    ThreeAxis,
    FiveAxis
}

export enum ExtruderType {
    Single,
    Dual
}

export enum PrintVolumeType {
    Standard,
    StandardFivaAxis,
    StandardLong,
    Extended,
    ExtendedFiveAxis,
    ExtendedLong
}

export enum FiveAxisType {
    Normal,
    Hybrid
}
