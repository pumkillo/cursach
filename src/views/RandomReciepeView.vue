<template>
  <div class="needpad">
    <h1>Random a recipe</h1>
    <!-- <h1>{{ categoriesArray }}</h1> -->
    <img src="@/assets/loading.gif" alt="loading" v-if="loading" />
    <button class="button" v-else @click="getRandomRecipe">Random again</button>
    <div
      class="briefInfo d-flex justify-content-between align-items-center"
      v-if="recipeID"
    >
      <div class="d-flex flex-column">
        <div class="brief d-flex justify-content-center align-items-center">
          <router-link
            v-if="!loading"
            class="decoration"
            :to="{ name: 'recipe', params: { id: recipe.id } }"
            ><h3>
              {{
                recipe.title.length > 17
                  ? recipe.title.slice(0, 16) + "..."
                  : recipe.title
              }}
            </h3></router-link
          >
          <h3>{{ calories }}kcal</h3>
        </div>
        <RecipeCard :needBackColor="false" :recipeID="recipe.id" />
      </div>
      <NutritionDiagrams
        :isColumn="true"
        :nutrition="recipeNutrition"
        v-if="recipeID"
      />
      <TasteWidgetById :recipeID="recipeID" v-if="recipeID" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Recipes");
import RecipeCard from "@/components/RecipeCard.vue";
import NutritionDiagrams from "@/components/NutritionDiagrams.vue";
import TasteWidgetById from "@/components/TasteWidgetById.vue";

export default {
  name: "RandomReciepe",
  components: {
    RecipeCard,
    NutritionDiagrams,
    TasteWidgetById,
  },
  data() {
    return {
      loading: true,
      recipe: {},
      recipeNutrition: [],
      calories: 0,
    };
  },
  computed: {
    recipeID() {
      return this.recipe.id;
    },
  },
  mounted() {
    this.getRandomRecipe();
  },
  methods: {
    ...mapActions({
      randomRecipe: "randomRecipe/randomRecipe",
      getAllRecipeInfo: "recipeInfo/getAllRecipeInfo",
    }),
    async getRandomRecipe() {
      const res = await this.randomRecipe()
        .catch((this.loading = true))
        .then((response) => response);
      if (res.recipes) {
        this.recipe = res.recipes[0];
        this.loading = false;
        this.getNutrition();
      }
    },
    async getNutrition() {
      await this.getAllRecipeInfo({
        recipeID: this.recipe.id,
        nutrition: true,
      }).then((response) => {
        this.recipeNutrition = response.nutrition.caloricBreakdown;
        this.calories = Math.round(
          response.nutrition.nutrients.find(
            (el) => el.name.toLowerCase() === "calories"
          ).amount
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.briefInfo {
  margin-top: 60px;
  gap: 70px;
}
.brief {
  padding: 0 20px;
}
.button {
  font-size: 3em;
  padding: 15px 20px;
  margin: 0 auto;
  margin-top: 60px;
}
h3 {
  font-weight: 500;
  font-size: 4em;
  color: $green;
  margin-bottom: 0;
  line-height: 38px;
}
h3:first-child {
  margin-right: 20px;
}
</style>
