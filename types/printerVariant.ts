export interface PrinterVariant {
    model: string
    image: string
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
    StandardLong,
    Extended,
    ExtendedLong
}

export enum FiveAxisType {
    Normal,
    Hybrid
}