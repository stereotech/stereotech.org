import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex'
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
        let data: { entries: PrintParameter[] }
        let response = await fetch(`https://api2.stereotech.org/api/collections/get/printingParameters?token=${process.env.COCKPIT_TOKEN}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                lang: this
            })
        })
        data = await response.json()
        const printParameters: PrintParameter[] = data.entries
        commit('setPrintParameters', printParameters)
    }
}