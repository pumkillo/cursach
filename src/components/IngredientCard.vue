<template>
  <div class="ingredientCard d-flex flex-column">
    <img
      src="https://spoonacular.com/cdn/ingredients_100x100/chickpeas.png"
      alt=""
    />
    <RecIngrCategories :categoriesArray="['Canned and Jarred']" />
  </div>
</template>

<script>
import RecIngrCategories from "@/components/RecIngrCategories.vue";
export default {
  name: "IngredientCard",
  components: {
    RecIngrCategories,
  },
  data() {
    return {};
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
  align-self: flex-start;
}
img {
  border-radius: 0.5em;
  max-width: 100px;
  max-height: 300px;
  width: 65vw;
  margin: 0 auto;
}
</style>
