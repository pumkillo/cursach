import querySearch from "./querySearch.js";
import quickAnswer from "./quickAnswer.js";
import recipeInfo from "./recipeInfo.js";
import recipeNutrition from "./recipeNutrition.js";
import randomRecipe from "./randomRecipe.js";
import recipeInstruction from "./recipeInstruction.js";
import tasteWidget from "./tasteWidget.js";
import similarRecipes from "./similarRecipes.js";
import recipeImage from "./recipeImage.js";
import recipeNutritionCPF from "./recipeNutritionCPF.js";
import ingredientsSearch from "./ingredientsSearch.js";
import ingredientsSearchFilter from "./ingredientsSearchFilter.js";

const Recipes = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    querySearch: querySearch,
    quickAnswer: quickAnswer,
    recipeInfo: recipeInfo,
    recipeNutrition: recipeNutrition,
    randomRecipe: randomRecipe,
    recipeInstruction: recipeInstruction,
    tasteWidget: tasteWidget,
    similarRecipes: similarRecipes,
    recipeImage: recipeImage,
    recipeNutritionCPF: recipeNutritionCPF,
    ingredientsSearch: ingredientsSearch,
    ingredientsSearchFilter: ingredientsSearchFilter,
  },
};
export default Recipes;
