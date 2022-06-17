/* eslint-disable no-unused-vars */
const tasteWidget = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getRecipeTasteWidget({ rootState }, recipeID) {
      const res = await fetch(
        rootState.baseURLRecipes +
          "/" +
          recipeID +
          "/tasteWidget.json?normalize=true&apiKey=" +
          process.env.VUE_APP_API_KEY
      ).then((response) => response.json());
      return res;
    },
  },
};
export default tasteWidget;
