<template>
  <div class="similar d-flex flex-column">
    <h4>Similar recipes</h4>
    <h5 v-if="similarRecipes.length === 0">No similar recipes found.</h5>
    <div class="d-flex justify-content-between" v-else>
      <div
        class="recipe d-flex flex-column"
        v-for="recipe in similarRecipes"
        :key="recipe.id"
      >
        <router-link
          class="decoration"
          :to="{ name: 'recipe', params: { id: recipe.id } }"
        >
          <img :src="recipe.image" alt="recipe image" />
          <h3>{{ recipe.title }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Recipes");
export default {
  name: "SimilarRecipes",
  props: ["recipeID"],
  data() {
    return {
      similarRecipes: [],
    };
  },
  watch: {
    recipeID() {
      this.getSimilar();
    },
  },
  mounted() {
    this.getSimilar();
  },
  methods: {
    ...mapActions({
      getSimilarRecipes: "similarRecipes/getSimilarRecipes",
      getRecipeImage: "recipeImage/getRecipeImage",
    }),
    async getSimilar() {
      const res = await this.getSimilarRecipes(this.recipeID).then(
        (response) => response
      );
      if (res.length != 3) {
        res.splice(-1, 1);
        this.similarRecipes = res;
      }
      this.similarRecipes.forEach((recipe) => {
        const recipeImage = this.getImage(recipe.id).then(
          (response) => (recipe.image = response)
        );
      });
    },
    async getImage(id) {
      const image = await this.getRecipeImage(id).then((response) => response);
      return image;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.similar {
  width: 100%;
  max-width: 426px;
}
img {
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 4px;
}
.recipe {
  max-width: 130px;
  gap: 5px;
}
.decoration > h3 {
  font-weight: 400;
  font-size: calc(2em + 2px);
  line-height: 21px;
  color: $green;
}
</style>
