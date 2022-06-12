<template>
  <div
    class="recipeCard d-flex flex-column"
    :class="{ backGroundColor: needBackColor }"
  >
    <img src="https://spoonacular.com/recipeImages/642539-556x370.png" alt="" />
    <RecIngrCategories :categoriesArray="['vegetarian', 'dairy-free']" />
  </div>
</template>

<script>
import RecIngrCategories from "@/components/RecIngrCategories.vue";
export default {
  name: "RecipeCard",
  props: ["needBackColor"],
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
  margin: 0 auto;
  border-radius: 0.5em;
  max-width: 450px;
  max-height: 300px;
  width: 65vw;
}
</style>
