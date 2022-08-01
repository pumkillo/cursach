/* eslint-disable no-unused-vars */
const recipeNutritionCPF = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getRecipeNutritionCPF(_ctx, recipeID) {
      const res = await fetch(
        process.env.VUE_APP_FETCH_BASE_URL +
          "/recipes/" +
          recipeID +
          "/nutritionWidget.json" +
          "?apiKey=" +
          process.env.VUE_APP_API_KEY
      )
        .then((response) => response.json())
        .then((response) => [
          { fat: response.fat },
          { carbs: response.carbs },
          { protein: response.protein },
        ]);
      return res;
    },
  },
};
export default recipeNutritionCPF;
