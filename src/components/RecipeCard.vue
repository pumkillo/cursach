<template>
  <div
    class="recipeCard d-flex flex-column"
    :class="{ backGroundColor: needBackColor }"
  >
    <img :src="recipe.image" alt="Recipe Image" v-if="recipe.image" />
    <img src="@/assets/undefined.jpg" alt="Recipe Image" v-else />
    <RecIngrCategories :categoriesArray="categoriesArray" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Recipes/recipeInfo");
import RecIngrCategories from "@/components/RecIngrCategories.vue";
export default {
  name: "RecipeCard",
  props: ["needBackColor", "recipeID"],
  components: {
    RecIngrCategories,
  },
  computed: {
    categoriesArray() {
      let obj = {
        vegetarian: this.recipe.vegetarian,
        vegan: this.recipe.vegan,
        glutenFree: this.recipe.glutenFree,
        dairyFree: this.recipe.dairyFree,
        veryHealthy: this.recipe.veryHealthy,
        cheap: this.recipe.cheap,
        veryPopular: this.recipe.veryPopular,
        sustainable: this.recipe.sustainable,
        lowFodmap: this.recipe.lowFodmap,
      };
      let arr = Object.entries(obj);
      const res = arr.filter((pair) => pair[1] === true);
      return res;
    },
  },
  data() {
    return {
      recipe: {},
    };
  },
  watch: {
    recipeID() {
      this.getRecipeCard();
    },
  },
  mounted() {
    this.getRecipeCard();
  },
  methods: {
    ...mapActions(["getAllRecipeInfo"]),
    async getRecipeCard() {
      if (this.recipeID) {
        const res = await this.getAllRecipeInfo({
          recipeID: this.recipeID,
        }).then((response) => response);
        this.recipe = res;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.backGroundColor {
  background-color: $white-green;
}
.recipeCard {
  padding: 20px;
  width: fit-content;
  border-radius: 1em;
  gap: 15px;
  max-width: 490px;
}
img {
  width: auto;
  margin: 0 auto;
  border-radius: 0.5em;
  max-width: 450px;
  max-height: 300px;
}
</style>
