export default {
  namespaced: true,
  state: {
    brewery: {},
    isShowDetailDialog: false
  },
  mutations: {
    showDetailDialog (state, brewery) {
      state.brewery = brewery
      state.isShowDetailDialog = true
    },
    closeDetailDialog (state) {
      state.isShowDetailDialog = false
    }
  }
}
