export const state = () => ({
  prescribtionDetails: {
    dosage: '100',
    quantity: 'mg',
    times: '1',
    often: '2 days',
  },
})

export const actions = {
  setDosage({ commit }, data) {
    commit('setDosage', data)
  },
  setQuantity({ commit }, data) {
    commit('setQuantity', data)
  },
  setTimes({ commit }, data) {
    commit('setTimes', data)
  },
  setOften({ commit }, data) {
    commit('setOften', data)
  },
}

export const mutations = {
  setDosage(state, payload) {
    state.prescribtionDetails.dosage = payload
  },
  setQuantity(state, payload) {
    state.prescribtionDetails.quantity = payload
  },
  setTimes(state, payload) {
    state.prescribtionDetails.times = payload
  },
  setOften(state, payload) {
    state.prescribtionDetails.often = payload
  },
}
