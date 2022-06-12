<template>
  <div class="substitutes d-flex flex-column">
    <h4>Ingredient Substitutes</h4>
    <div class="d-flex justify-content-between flex-column">
      <p>1 cup = 7/8 cup shortening and 1/2 tsp salt</p>
      <p>1 cup = 7/8 cup vegetable oil + 1/2 tsp salt</p>
      <p>1/2 cup = 1/4 cup buttermilk + 1/4 cup unsweetened applesauce</p>
      <p>1 cup = 1 cup margarine</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IngredientSubstitutes",
  props: ["recipeID"],
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.substitutes {
  width: 100%;
  max-width: 426px;
}
p {
  font-size: 2em;
  color: $green;
}
</style>
