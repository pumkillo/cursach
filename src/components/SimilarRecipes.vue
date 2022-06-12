<template>
  <div class="similar d-flex flex-column">
    <h4>Similar recipes</h4>
    <div class="d-flex justify-content-between">
      <div class="recipe d-flex flex-column" v-for="item in 3" :key="item.id">
        <img
          src="https://spoonacular.com/recipeImages/1063020-556x370.jpg"
          alt=""
        />
        <router-link
          class="decoration"
          :to="{ name: 'recipe', params: { id: 98 } }"
          ><h3>Clean eating falafel burger</h3></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimilarRecipes",
  props: ["recipeID"],
  components: {},
  data() {
    return {};
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
