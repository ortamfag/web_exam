export const state = () => ({
    image: '',
    text: '',
})

export const mutations = {
    setImg(state, payload){
        state.image = payload
    },
    setText(state, payload){
        state.text = payload
    },
}

export const actions = {
    async getInfo({commit}, page){
        const { data } = await this.$axios.get(`https://demo-api.vsdev.space/api/farm/${page}`)
        commit("setImg", data.image || "-")
        commit("setText", data.text)
    }
}

export const getters = {
    getInfoText(state){
        return state.text
    },
    getInfoImg(state){
        return state.image
    },
}