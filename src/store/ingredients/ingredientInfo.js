const ingredientInfo = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getAllIngredientInfo({ rootState }, ingredientID) {
      const res = await fetch(
        rootState.baseURLIngredints +
          "/" +
          ingredientID +
          "/information?amount=100&unit=grams&apiKey=" +
          process.env.VUE_APP_API_KEY
      ).then((response) => response.json());
      return res;
    },
  },
};
export default ingredientInfo;
