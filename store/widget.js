export const state = () => ({
  cows: 0,
  rabbits: 0,
  sheeps: 0,
})

export const mutations = {
  setCows(state, payload) {
    state.cows = payload
  },
  setRabbits(state, payload) {
    state.rabbits = payload
  },
  setSheeps(state, payload) {
    state.sheeps = payload
  },
}

export const actions = {
  async getStats({ commit }) {
    const { data } = await this.$axios.get(
      `https://demo-api.vsdev.space/api/farm/left_widget`
    )
    console.log(data);
    commit('setCows', data.cows)
    commit('setRabbits', data.rabbits)
    commit('setSheeps', data.sheeps)
  },
}

export const getters = {
  getCows(state){
      return state.cows
  },
  getRabbits(state){
      return state.rabbits
  },
  getSheeps(state){
      return state.sheeps
  },
}
