const recipeImage = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getRecipeImage({ rootState }, recipeID) {
      const res = await fetch(
        rootState.baseURLRecipes +
          "/" +
          recipeID +
          "/information?includeNutrition=false&apiKey=" +
          process.env.VUE_APP_API_KEY
      ).then((response) => response.json());
      return res.image;
    },
  },
};
export default recipeImage;
