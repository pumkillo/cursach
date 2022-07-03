<template>
  <div class="needpad">
    <h1>Search a recipe on ingredients</h1>
    <div class="d-flex justify-content-between">
      <div class="d-flex flex-column side-panel">
        <p>Ingredients</p>
        <div class="d-flex flex-column ingredients">
          <div class="d-flex" v-for="(item, index) in ingredients" :key="index">
            <input type="text" class="input" v-model="ingredients[index]" />
            <div
              class="d-flex justify-content-center align=items-center image"
              @click="delteItem(item)"
            >
              <img src="@/assets/icons/minus.svg" alt="" />
            </div>
          </div>
          <div class="input d-flex">
            <input
              type="text"
              class="disabled"
              v-model.trim="newIngredient"
              @keyup.enter="pushItem"
            />
          </div>
        </div>
        <button class="button" @click="getResults">Search</button>
      </div>
      <RecipesBlocks :maxWidth="700" justify="start" :results="results" />
      <img src="@/assets/loading.gif" alt="loading" v-if="loading" />
      <h5 v-if="error">No recipes found for these ingredients pull</h5>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers(
  "Recipes/ingredientsSearch"
);
import RecipesBlocks from "@/components/RecipesBlocks.vue";
export default {
  components: {
    RecipesBlocks,
  },
  provide() {
    return {
      leftRightPadding: 15,
      maxWidthImg: 310,
    };
  },
  data() {
    return {
      loading: false,
      error: false,
      newIngredient: "",
      ingredients: [],
      results: [],
    };
  },
  computed: {
    ...mapGetters(["getIngredientsSearch"]),
  },
  watch: {
    ingredients() {
      this.changeIngredientsSearch(this.ingredients);
    },
    newIngredient() {},
  },
  mounted() {
    this.ingredients = Array.from(this.getIngredientsSearch);
    this.getResults();
  },
  methods: {
    ...mapMutations(["changeIngredientsSearch"]),
    ...mapActions(["getRecipes"]),
    async getResults() {
      this.results = [];
      await this.getRecipes({
        ingredients: this.ingredients,
      })
        .then((response) => (this.results = response))
        .then((this.loading = true))
        .then((this.error = false));
      if (this.results.length === 0) {
        setTimeout(() => {
          this.error = true;
          this.loading = false;
        }, 2500);
      } else {
        this.loading = false;
      }
    },
    delteItem(item) {
      this.ingredients.splice(this.ingredients.indexOf(item), 1);
    },
    pushItem() {
      if (this.newIngredient === "") {
        return;
      }
      this.ingredients.push(this.newIngredient);
      this.newIngredient = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.ingredients {
  width: calc(100vw - 40px);
  max-width: 340px;
  gap: 15px;
}
input:focus-visible,
input:focus {
  border: 0.5px solid $green;
}
.disabled {
  border: 0.5px solid $green;
  cursor: pointer;
  background-color: $white;
}
.image {
  cursor: pointer;
  margin-left: -40px;
  width: 40px;
}
.image > img {
  width: 20px;
}
.input > input {
  background-repeat: no-repeat;
  background-position-x: calc(100% - 10px);
  background-position-y: calc(100% - 19px);
  background-image: url("@/assets/icons/minus.svg");
}
.input > .disabled {
  background-position-y: calc(100% - 10px);
  background-image: url("@/assets/icons/plus.svg");
}
h5 {
  width: 100%;
}
</style>
