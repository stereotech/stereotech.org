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
    ThreeAxis = 'ThreeAxis',
    FiveAxis = 'FiveAxis'
}

export enum ExtruderType {
    Single = 'Single',
    Dual = 'Dual'
}

export enum PrintVolumeType {
    Standard = 'Standard',
    StandardFiveAxis = 'StandardFiveAxis',
    StandardLong = 'StandardLong',
    Extended = 'Extended',
    ExtendedFiveAxis = 'ExtendedFiveAxis',
    ExtendedLong = 'ExtendedLong'
}

export enum FiveAxisType {
    Normal = 'Normal',
    Hybrid = 'Hybrid'
}
