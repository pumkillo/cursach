<template>
  <div
    class="recipe d-flex flex-column"
    :style="{
      paddingLeft: leftRightPadding + 'px',
      paddingRight: leftRightPadding + 'px',
    }"
  >
    <router-link :to="{ name: 'recipe', params: { id: recipeObject.id } }">
      <img
        :src="recipeObject.image"
        alt=""
        :style="{ maxWidth: maxWidthImg + 'px' }"
        v-if="recipeObject.image"
      />
      <img
        src="@/assets/undefined.jpg"
        alt="recipe undefined"
        :style="{ maxWidth: maxWidthImg + 'px' }"
        v-else
      />
    </router-link>
    <div class="d-flex flex-row justify-content-between">
      <div class="d-flex flex-column">
        <p v-if="recipeObject.title" class="recipe-title">
          {{
            recipeObject.title.length > maxCountSymbols
              ? recipeObject.title.slice(0, maxCountSymbols - 1) + "..."
              : recipeObject.title
          }}
        </p>
        <!-- <p>{{ Math.floor(recipeObject.nutrition.nutrients[0].amount) }}kkal</p> -->
        <p>{{ kkal }}kkal</p>
        <!-- <p>fat - {{ recipeObject.nutrition.caloricBreakdown.percentFat }}%</p>
        <p>
          carbs - {{ recipeObject.nutrition.caloricBreakdown.percentCarbs }}%
        </p>
        <p>
          protein -
          {{ recipeObject.nutrition.caloricBreakdown.percentProtein }}%
        </p> -->
      </div>
      <LikeRecipe :recipeID="recipeObject.id" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Recipes/recipeNutrition");
import LikeRecipe from "./LikeRecipe.vue";

export default {
  name: "RecipeBlock",
  inject: ["leftRightPadding", "maxWidthImg", "maxWidthTitle"],
  props: ["recipeObject", "maxwidth"],
  data() {
    return {
      kkal: 0,
    };
  },
  components: { LikeRecipe },
  mounted() {
    this.getThisRecipeNutrition();
  },
  computed: {
    maxCountSymbols() {
      return Math.floor(this.maxWidthTitle / 10);
    },
  },
  methods: {
    ...mapActions(["getRecipeNutrition"]),
    async getThisRecipeNutrition() {
      await this.getRecipeNutrition(this.recipeObject.id).then(
        (response) => (this.kkal = Number(response.calories.replace("k", "")))
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.recipe {
  padding-top: 15px;
  padding-bottom: 15px;
  width: max-content;
  height: fit-content;
  background-color: $white-green;
  border-radius: 0.5em;
  gap: 15px;
}
.recipe-title {
  max-width: 400px;
}
img {
  border-radius: 0.5em;
  max-width: 450px;
  max-height: 300px;
  width: 65vw;
}
.like {
  width: 32px;
  cursor: pointer;
}
p {
  font-size: calc(2em + 2px);
  text-transform: capitalize;
  font-weight: 500;
  color: $black;
  margin: 0 !important;
}
p:nth-child(2) {
  color: $green;
}
</style>
