const ingredientsSearch = {
  namespaced: true,
  state: {
    ingredients: ["pasta", "carrot", "eggplant"],
  },
  getters: {
    getIngredientsSearch(state) {
      return state.ingredients;
    },
  },
  mutations: {
    changeIngredientsSearch(state, newIngredients) {
      state.ingredients = newIngredients;
    },
  },
  actions: {
    async getRecipes({ rootState }, { ingredients, number = 12 }) {
      const res = await fetch(
        rootState.baseURLRecipes +
          "/findByIngredients?ingredients=" +
          ingredients.join(",") +
          "&number=" +
          number +
          "&apiKey=" +
          process.env.VUE_APP_API_KEY
      ).then((response) => response.json());
      return res;
    },
  },
};
export default ingredientsSearch;
