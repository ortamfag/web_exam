export const state = () => ({
    animals: []
})

export const mutations = {
    setAnimals(state, payload){
        state.animals = payload
    },
}

export const actions = {
    async getAnimals({commit}){
        const { data } = await this.$axios.get(`https://demo-api.vsdev.space/api/farm/baby`)
        commit("setAnimals", data)
    }
}

export const getters = {
    getAminals(state){
        return state.animals
    },
}