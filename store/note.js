export const state = () => ({
  note:""
})

export const actions = {
  setNote({commit},payload){
      commit('setNote',payload)
  }
}

export const mutations = {
  setNote(state,payload){
      state.note = payload
  }
}
