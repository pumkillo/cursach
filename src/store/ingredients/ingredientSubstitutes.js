const ingredientSubstitutes = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getIngredientSubstitutes({ rootState }, ingredientID) {
      const res = await fetch(
        rootState.baseURLIngredints +
          "/" +
          ingredientID +
          "/substitutes?apiKey=" +
          process.env.VUE_APP_API_KEY
      ).then((response) => response.json());
      return res;
    },
  },
};
export default ingredientSubstitutes;
