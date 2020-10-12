import { LocaleMessage } from 'vue-i18n';

export interface PrinterVariant {
    model: string
    image: string
    buyImage?: string
    printerType: PrinterType
    extruderType: ExtruderType
    printVolumeType: PrintVolumeType
    fiveAxisType: FiveAxisType
    description: string | LocaleMessage
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
    StandardFiveAxis,
    StandardLong,
    Extended,
    ExtendedFiveAxis,
    ExtendedLong
}

export enum FiveAxisType {
    Normal,
    Hybrid
}
