const querySearch = {
  namespaced: true,
  state: {
    searchQuery: "burger",
  },
  getters: {
    getSearchQuery(state) {
      return state.searchQuery;
    },
  },
  mutations: {
    changeSearchQuery(state, newQuery) {
      state.searchQuery = newQuery;
    },
  },
  actions: {
    async getQuerySearch(
      { commit, rootState },
      { query, addRecipeNutrition = false }
    ) {
      const res = await fetch(
        rootState.baseURLRecipes +
          "/complexSearch?query=" +
          query +
          "&addRecipeNutrition=" +
          addRecipeNutrition +
          "&number=12&apiKey=" +
          process.env.VUE_APP_API_KEY
      ).then((response) => response.json());
      if (res.results.length !== 0) {
        commit("changeSearchQuery", query);
      }
      return res;
    },
  },
};
export default querySearch;
