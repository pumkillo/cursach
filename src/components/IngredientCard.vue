<template>
  <div class="ingredientCard d-flex flex-column">
    <img
      :src="baseURLIngredients + ingredient.image"
      :alt="ingredient.name"
      v-if="ingredient.image"
    />
    <img src="@/assets/icons/ingredient.svg" alt="ingredient none" v-else />
    <RecIngrCategories :categoriesArray="categoriesArray" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Ingredients/ingredientInfo");
import RecIngrCategories from "@/components/RecIngrCategories.vue";
export default {
  name: "IngredientCard",
  components: {
    RecIngrCategories,
  },
  props: ["ingredientID"],
  data() {
    return {
      ingredient: "",
      baseURLIngredients: process.env.VUE_APP_BASE_INGREDIENT_URL,
      categoriesArray: [],
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    ...mapActions(["getAllIngredientInfo"]),
    async getInfo() {
      await this.getAllIngredientInfo(this.ingredientID).then(
        (response) => (this.ingredient = response)
      );
      this.createCategoriesArray(", ");
      this.createCategoriesArray(";");
    },
    createCategoriesArray(separator = "") {
      if (
        this.ingredient.aisle.indexOf(separator) !== -1 &&
        this.categoriesArray.length === 0
      ) {
        this.ingredient.aisle.split(separator).forEach((element) => {
          this.categoriesArray.push([element, true]);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.ingredientCard {
  padding: 20px;
  width: fit-content;
  border-radius: 1em;
  gap: 15px;
  max-width: 490px;
}
img {
  border-radius: 0.5em;
  max-width: 100px;
  max-height: 300px;
  width: 65vw;
  margin: 0 auto;
}
</style>
