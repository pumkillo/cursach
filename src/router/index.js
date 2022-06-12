import { createRouter, createWebHistory } from "vue-router";
import MainPageView from "@/views/MainPageView.vue";
import FavoritesView from "@/views/FavoritesView.vue";
import FilterSearchView from "@/views/FilterSearchView.vue";
import QuickAnswerView from "@/views/QuickAnswerView.vue";
import IngredientsSearchView from "@/views/IngredientsSearchView.vue";
import RandomReciepeView from "@/views/RandomReciepeView.vue";
import IngredientView from "@/views/IngredientView.vue";
import RecipeView from "@/views/RecipeView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPageView,
  },
  {
    path: "/search/filters",
    name: "filterSearch",
    component: FilterSearchView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesView,
  },
  {
    path: "/quick-answer",
    name: "quickAnswer",
    component: QuickAnswerView,
  },
  {
    path: "/search/ingredients",
    name: "ingredientsSearch",
    component: IngredientsSearchView,
  },
  {
    path: "/reciepes/random",
    name: "randomReciepe",
    component: RandomReciepeView,
  },
  {
    path: "/ingredients/:id",
    name: "ingredient",
    component: IngredientView,
  },
  {
    path: "/recipes/:id",
    name: "recipe",
    component: RecipeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
