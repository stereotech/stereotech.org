import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Material, MaterialSpec } from '~/types/materials';
import { RootState } from '.';

export interface MaterialsState {
    materials: Material[]
    specs: MaterialSpec[]
    filled: boolean
}

export const state = (): MaterialsState => ({
    materials: [],
    specs: [],
    filled: false
})

export const mutations: MutationTree<MaterialsState> = {
    setMaterials (state, data: any) {
        state.materials = data
        state.filled = true
    },
    setSpecs (state, data: any) {
        state.specs = data
    }
}

export const getters: GetterTree<MaterialsState, RootState> = {
    specs (state): MaterialSpec[] {
        return state.specs
    },
    ourBrandMaterials (state): Material[] {
        return state.materials.filter(m => m.our_brand)
    },
    otherMaterials (state): Material[] {
        return state.materials.filter(m => !m.our_brand)
    },
    ourBrandMaterialsBySku (state): (sku: string) => Material[] {
        return (sku: string) => {
            return state.materials.filter(m => m.our_brand).filter(m => m.sku.startsWith(sku))
        }
    }
}

export const actions: ActionTree<MaterialsState, RootState> = {
    async loadMaterialsData ({ commit }) {

        let techSpecsdata: { data: MaterialSpec[]; }
        let response = await fetch(`${process.env.API_STATAMIC}/collections/filament_specs_description/entries?limit=9999`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
        techSpecsdata = await response.json()
        const techSpecs: MaterialSpec[] = techSpecsdata.data.map((item:any) => {return {"name": item.title, unit: item.unit, "_id": item.id, locale: item.locale}})
        commit('setSpecs', techSpecs)

        let data: { data: Material[]; }
        response = await fetch(`${process.env.API_STATAMIC}/collections/filaments/entries?limit=500`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
        data = await response.json()
        const materials: Material[] = data.data.map((item:any) => {return {"sku": item.title, name: item.name, polymer: item.polymer, description: item.description,
            "_id": item.id, our_brand: item.our_brand, "tech_specs": item.filament_specs, image: item.image[0]?.permalink, file: item.file[0]?.permalink, locale: item.locale}})
        commit('setMaterials', materials)

    }
}
