const recipeInfo = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getAllRecipeInfo({ rootState }, { recipeID, nutrition = false }) {
      const res = await fetch(
        rootState.baseURLRecipes +
          "/" +
          recipeID +
          "/information?includeNutrition=" +
          nutrition +
          "&apiKey=" +
          process.env.VUE_APP_API_KEY
      ).then((response) => response.json());
      return res;
    },
  },
};
export default recipeInfo;
