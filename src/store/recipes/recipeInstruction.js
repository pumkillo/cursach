/* eslint-disable no-unused-vars */
const recipeInstruction = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getRecipeInstruction({ rootState }, recipeID) {
      const res = await fetch(
        rootState.baseURLRecipes +
          "/" +
          recipeID +
          "/analyzedInstructions?stepBreakdown=true&apiKey=" +
          process.env.VUE_APP_API_KEY
      ).then((response) => response.json());
      return res;
    },
  },
};
export default recipeInstruction;
