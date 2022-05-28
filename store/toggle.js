export const state = () => ({
  isModalBackDropOpen: false,
  isDosageOpen: false,
  isFrequencyOpen: false,
  isDurationOpen: false,
  isNoteOpen: false,
  toast: {
    isToastOpen: false,
    msg: '',
  },
})

export const actions = {
  toggleModalBackDrop({ commit }, payload) {
    commit('toggleBackDrop', payload)
  },
  toggleDosage({ commit }, payload) {
    commit('toggleDosage', payload)
  },
  toggleFrequency({ commit }, payload) {
    commit('toggleFrequency', payload)
  },
  toggleDuration({ commit }, payload) {
    commit('toggleDuration', payload)
  },
  toggleNote({ commit }, payload) {
    commit('toggleNote', payload)
  },
  toggleToast({ commit }, payload) {
    commit('toggleToast', payload)
  },
}

export const mutations = {
  toggleBackDrop(state, payload) {
    if (payload === true) {
      state.isModalBackDropOpen = true
      return
    }
    state.isModalBackDropOpen = payload
    state.isDosageOpen = false
    state.isFrequencyOpen = false
    state.isDurationOpen = false
    state.isNoteOpen = false
  },
  toggleDosage(state, payload) {
    state.isDosageOpen = payload
  },
  toggleFrequency(state, payload) {
    state.isFrequencyOpen = payload
  },
  toggleDuration(state, payload) {
    state.isDurationOpen = payload
  },
  toggleNote(state, payload) {
    state.isNoteOpen = payload
  },
  toggleToast(state, payload) {
    state.toast.isToastOpen = payload.status
    state.toast.msg = payload.msg
  },
}
