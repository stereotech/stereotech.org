import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex'
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
        let data: { entries: Material[]; }
        let response = await fetch(`https://api2.stereotech.org/api/collections/get/filaments?token=${process.env.COCKPIT_TOKEN}`)
        data = await response.json()
        const materials: Material[] = data.entries
        let techSpecsdata: { entries: MaterialSpec[]; }
        response = await fetch(`https://api2.stereotech.org/api/collections/get/filament_specs_description?token=${process.env.COCKPIT_TOKEN}`)
        techSpecsdata = await response.json()
        const techSpecs: MaterialSpec[] = techSpecsdata.entries
        commit('setSpecs', techSpecs)
        let specs = await (await fetch(`https://api2.stereotech.org/api/collections/get/filament_to_spec_description?token=${process.env.COCKPIT_TOKEN}`)).json()
        specs = specs.entries
        specs.forEach(s => {
            let material = materials.find(m => m._id === s.filament._id)
            if (material) {
                if (!material.tech_specs) {
                    material.tech_specs = []
                }
                material.tech_specs.push({
                    spec: techSpecs.find(t => t._id === s.spec_description._id),
                    value: s.value
                })
            }
        })
        commit('setMaterials', materials)
    }
}