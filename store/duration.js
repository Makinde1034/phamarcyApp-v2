export const state = () => ({
  duration : '1 day'
})

export const actions = {
    setDuration({commit},payload){
        commit('setDuration',payload)
    }
}

export const mutations = {
    setDuration(state,payload){
        state.duration = payload
    }
}
