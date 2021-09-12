export default {
  namespaced: true,
  state: {
    // breweries: [],
    brewery: {},
    isShowDetailDialog: false
  },
  mutations: {
    // setBreweries (state, breweries) {
    //   state.breweries = breweries
    // },
    showDetailDialog (state, brewery) {
      state.brewery = brewery
      state.isShowDetailDialog = true
    },
    closeDetailDialog (state) {
      state.isShowDetailDialog = false
    }
  }
}
