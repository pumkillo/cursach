const ingredientsSearchFilter = {
  namespaced: true,
  state: {
    itemsToFilter: [
      { name: "Calories", min: "0", max: "800" },
      { name: "Protein", min: "0", max: "800" },
      { name: "Carbs", min: "0", max: "800" },
      { name: "Fat", min: "0", max: "800" },
      // { name: "Sugar", min: "0", max: "800" },
      // { name: "Cholesterol", min: "0", max: "800" },
      // { name: "Sodium", min: "0", max: "800" },
      // { name: "Vitamin B12", min: "0", max: "800" },
      // { name: "Zinc", min: "0", max: "800" },
      // { name: "Vitamin B3", min: "0", max: "800" },
      // { name: "Selenium", min: "0", max: "800" },
      // { name: "Phosphorus", min: "0", max: "800" },
      // { name: "Vitamin B6", min: "0", max: "800" },
      // { name: "Vitamin K", min: "0", max: "800" },
      // { name: "Iron", min: "0", max: "800" },
      // { name: "Vitamin B2", min: "0", max: "800" },
      // { name: "Vitamin E", min: "0", max: "800" },
      // { name: "Potassium", min: "0", max: "800" },
      // { name: "Manganese", min: "0", max: "800" },
      // { name: "Vitamin B1", min: "0", max: "800" },
      // { name: "Vitamin A", min: "0", max: "800" },
      // { name: "Vitamin B5", min: "0", max: "800" },
      // { name: "Magnesium", min: "0", max: "800" },
      // { name: "Copper", min: "0", max: "800" },
      // { name: "Folate", min: "0", max: "800" },
      // { name: "Vitamin C", min: "0", max: "800" },
      // { name: "Fiber", min: "0", max: "800" },
      // { name: "Calcium", min: "0", max: "800" },
      // { name: "Vitamin D", min: "0", max: "800" },
    ],
  },
  getters: {
    getItemsToFilter(state) {
      return state.itemsToFilter;
    },
  },
  mutations: {
    changeItemsToFilter(state, newItemsToFilter) {
      state.itemsToFilter = newItemsToFilter;
    },
  },
  actions: {
    async getRecipes({ rootState, state }, number = 12) {
      const res = await fetch(
        rootState.baseURLRecipes +
          "/findByNutrients?apiKey=" +
          process.env.VUE_APP_API_KEY +
          "&" +
          "number=" +
          number +
          "&" +
          Array.from(
            state.itemsToFilter,
            (el) =>
              `min${el.name.replace(" ", "")}=${el.min}` +
              `&` +
              `max${el.name.replace(" ", "")}=${el.max}`
          ).join("&")
      ).then((response) => response.json());
      return res;
    },
  },
};
export default ingredientsSearchFilter;
