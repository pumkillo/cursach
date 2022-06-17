<template>
  <router-link :to="{ name: 'recipe', params: { id: recipeObject.id } }">
    <div
      class="recipe d-flex flex-column"
      :style="{
        paddingLeft: leftRightPadding + 'px',
        paddingRight: leftRightPadding + 'px',
      }"
    >
      <img
        :src="recipeObject.image"
        alt=""
        :style="{ maxWidth: maxWidthImg + 'px' }"
      />
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column">
          <p>{{ recipeObject.title }}</p>
          <p>{{ kkal }}cal</p>
        </div>
        <img src="../assets/icons/likeNotFill.svg" alt="" />
      </div>
    </div>
  </router-link>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Recipes/recipeNutrition");
export default {
  name: "RecipeBlock",
  inject: ["leftRightPadding", "maxWidthImg"],
  props: ["recipeObject"],
  data() {
    return {
      kkal: 0,
    };
  },
  methods: {
    ...mapActions(["getRecipeNutrition"]),
  },
  async mounted() {
    const res = await this.getRecipeNutrition(this.recipeObject.id).then(
      (response) => response
    );
    this.kkal = res.calories;
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
img {
  border-radius: 0.5em;
  max-width: 450px;
  max-height: 300px;
  width: 65vw;
}
img:last-child {
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
