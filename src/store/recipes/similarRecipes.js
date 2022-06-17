/* eslint-disable no-unused-vars */
const similarRecipes = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getSimilarRecipes({ rootState }, recipeID) {
      const res = await fetch(
        rootState.baseURLRecipes +
          "/" +
          recipeID +
          "/similar?number=4&apiKey=" +
          process.env.VUE_APP_API_KEY
      ).then((response) => response.json());
      return res;
    },
  },
};
export default similarRecipes;
