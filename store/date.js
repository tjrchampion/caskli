export const state = () => ({
  date: ''
});

export const mutations = {
  SET_DATE(state, date) {
    state.date = date;
  }
}

export const actions = {
  setDate({ commit }, date) {
    commit('SET_DATE', date);
  }
}

export const getters = {
  getDate(state) {
    return state.date
  }
}