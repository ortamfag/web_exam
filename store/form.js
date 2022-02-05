export const state = () => ({
  fields: '',
})

export const mutations = {
  setFields(state, payload) {
    state.fields = payload
  },
}

export const actions = {
  async getData({ commit, dispatch }) {
    const { data } = await this.$axios.get(
      `https://demo-api.vsdev.space/api/farm/baby/form`
    )
    const fields = data.fields
    commit('setFields', fields)
  },
}

export const getters = {
  getFields(state) {
    return state.fields
  },
}
