import { createStore } from "vuex";
import Ingredients from "./ingredients/Ingredients.js";
import Recipes from "./recipes/Recipes.js";

export default createStore({
  state: {
    baseURLRecipes: process.env.VUE_APP_FETCH_BASE_URL + "/recipes",
    baseURLIngredints: process.env.VUE_APP_FETCH_BASE_URL + "/food/ingredients",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Ingredients: Ingredients,
    Recipes: Recipes,
  },
});
