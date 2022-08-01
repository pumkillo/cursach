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
    async getRecipeNutritionCPF(_ctx, { recipeObject }) {
      let res = recipeObject.nutrition.nutrients
        .filter(
          (nutr) =>
            ["carbohydrates", "fat", "protein"].indexOf(nutr.toLowerCase()) !==
            0
        )
        .sort();
      return [{ fat: res[1] }, { carbs: res[0] }, { protein: res[2] }];
    },
  },
};
export default recipeInfo;
