import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { PrintParameter } from '~/types/printParameters';
import { RootState } from '.';

export interface PrintParametersState {
    printParameters: PrintParameter[]
    loaded: boolean
}

export const state = (): PrintParametersState => ({
    printParameters: [],
    loaded: false
})

export const mutations: MutationTree<PrintParametersState> = {
    setPrintParameters (state, data: any) {
        state.printParameters = data
    }
}

export const getters: GetterTree<PrintParametersState, RootState> = {
    allPrintParameters (state): PrintParameter[] {
        return state.printParameters
    },
    printParametersBySku (state): (sku: string) => PrintParameter[] {
        return (sku: string) => {
            return state.printParameters.filter(m => m.sku.startsWith(sku))
        }
    }
}

export const actions: ActionTree<PrintParametersState, RootState> = {
    async loadPrintParameters ({ commit }) {
        let data: { data: PrintParameter[] }
        let response = await fetch(`${process.env.API_STATAMIC}/collections/printingParameters/entries`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
        data = await response.json()
        const printParameters: PrintParameter[] = data.data.map((item:any) => {return {"sku": item.title, name: item.name, printtemperature: item.printtemperature, 
            threedtemperature: item.threedtemperature, blowing: item.blowing, speed: item.speed, flow: item.flow, layerheight: item.layerheight}})
        commit('setPrintParameters', printParameters)
    }
}