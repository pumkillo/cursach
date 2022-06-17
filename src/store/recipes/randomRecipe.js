const randomRecipe = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async randomRecipe({ rootState }) {
      const res = await fetch(
        rootState.baseURLRecipes +
          "/random?number=1&apiKey=" +
          process.env.VUE_APP_API_KEY
      ).then((response) => response.json());
      return res;
    },
  },
};
export default randomRecipe;
