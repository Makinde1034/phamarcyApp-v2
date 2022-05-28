import { drugs } from '../db'
export const state = () => ({
  allDrugs: drugs,
  searchResult: [...drugs],
  isSearchActive : false,
  autoSearchResults : [] 
})

export const actions = {
  add({ commit }) {
    commit('increment')
  },
  quickFilter({ commit, state }, text) {
    // search based on category
    if (text === 'All') {
      commit('updateState', state.allDrugs)
      return
    }
    const filteredState = state.allDrugs.filter(
      (i) => {
        return i.category.includes(text.toLowerCase())
      }

      // console.log(i.category,"fjf")
    )
    commit('updateState', filteredState)
    console.log(filteredState, text)
  },
  // search by name
  searchByName({ commit, state }, text) {
    // search based on category
    if (text === 'All') {
      commit('updateState', state.allDrugs)
      return
    }
    const filteredState = state.allDrugs.filter(
      (i) => {
        return i.name.toLowerCase().includes(text.toLowerCase())
      }

      // console.log(i.category,"fjf")
    )
    commit('updateState', filteredState)
    console.log(filteredState, text)
  },
  // autofill search
  autoFill({ commit, state }, text) {
    // search with name
    if (text === 'All') {
      commit('updateState', state.allDrugs)
      return
    }
    const filteredState = state.allDrugs.filter(
      (i) => {
        return i.name.toLowerCase().includes(text.toLowerCase()) // indexOf also workss
      }

    )
    commit('updateAutoSearchState', filteredState)
    console.log(filteredState, text)
  },
  setSearchActive({ commit }, boolean) {
    commit('setSearchActive', boolean)
  },
}

export const mutations = {
  updateState(state, payload) {
    state.searchResult = payload
  },
  setSearchActive(state, payload) {
    state.isSearchActive = payload
  },
  updateAutoSearchState(state,payload){
    state.autoSearchResults = payload
  }
}
