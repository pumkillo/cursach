/* eslint-disable no-unused-vars */
const recipeNutrition = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getRecipeNutrition(_ctx, recipeID) {
      const res = await fetch(
        process.env.VUE_APP_FETCH_BASE_URL +
          "/recipes/" +
          recipeID +
          "/nutritionWidget.json" +
          "?apiKey=" +
          process.env.VUE_APP_API_KEY
      ).then((response) => response.json());
      return res;
    },
  },
};
export default recipeNutrition;
