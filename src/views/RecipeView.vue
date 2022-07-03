<template>
  <div class="needpad">
    <div class="title d-flex justify-content-center align-items-center">
      <h1>{{ recipe.title }}</h1>
      <LikeRecipe :recipeID="recipeID" />
    </div>
    <div class="full-info d-flex flex-row justify-content-between">
      <div class="d-flex flex-column align-items-center">
        <RecipeCard :needBackColor="true" :recipeID="recipeID" />
        <NutritionalInformation :recipeID="recipeID" />
        <TasteWidgetById :recipeID="recipeID" />
        <SimilarRecipes :recipeID="recipeID" />
      </div>
      <div class="d-flex flex-column align-items-center">
        <DishTypesAndDiets
          :dishTypes="recipe.dishTypes"
          :diets="recipe.diets"
        />
        <NutritionDiagrams :recipeID="recipeID" />
        <div class="description">
          <h4>Be ready in {{ recipe.readyInMinutes }} minutes</h4>
          <p v-html="recipe.summary"></p>
        </div>
        <RecipeInstruction :recipeID="recipeID" />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Recipes/recipeInfo");

import RecipeCard from "@/components/RecipeCard.vue";
import NutritionDiagrams from "@/components/NutritionDiagrams.vue";
import TasteWidgetById from "../components/TasteWidgetById.vue";
import DishTypesAndDiets from "@/components/DishTypesAndDiets.vue";
import RecipeInstruction from "@/components/RecipeInstruction.vue";
import SimilarRecipes from "@/components/SimilarRecipes.vue";
import NutritionalInformation from "@/components/NutritionalInformation.vue";
import LikeRecipe from "@/components/LikeRecipe.vue";

export default {
  name: "RecipeView",
  components: {
    RecipeCard,
    NutritionDiagrams,
    TasteWidgetById,
    DishTypesAndDiets,
    RecipeInstruction,
    SimilarRecipes,
    NutritionalInformation,
    LikeRecipe,
  },
  data() {
    return {
      recipe: {},
    };
  },
  computed: {
    recipeID() {
      return this.$route.params.id;
    },
  },
  watch: {
    recipeID() {
      this.getRecipeInfo();
      window.scrollTo(0, top);
    },
  },
  mounted() {
    this.getRecipeInfo();
  },
  methods: {
    ...mapActions(["getAllRecipeInfo"]),
    async getRecipeInfo() {
      if (this.recipeID) {
        await this.getAllRecipeInfo({ recipeID: this.recipeID }).then(
          (response) => (this.recipe = response)
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.flex-row {
  gap: 20px;
}
.full-info > .flex-column {
  max-width: 500px;
  width: 100%;
  gap: 50px;
  margin-bottom: 50px;
}
.full-info > .flex-column:nth-child(2) {
  padding-top: 65px;
}
h1 {
  margin: 0 !important;
}
.title {
  gap: 10px;
  margin: 60px 0;
}
.title > img {
  max-width: 32px;
  height: fit-content;
}
.description {
  max-width: 500px;
}
p {
  color: $brown;
  font-size: calc(2em + 2px);
  font-weight: 400;
  line-height: 21px;
  text-indent: 10px;
}
</style>
