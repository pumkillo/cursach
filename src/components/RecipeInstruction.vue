<template>
  <div class="instruction d-flex flex-column">
    <h4>Instruction</h4>
    <h5 v-if="response.length === 0">No instruction found.</h5>
    <div class="steps d-flex flex-column" v-for="res in response" :key="res.id">
      <p>{{ res.name }}</p>
      <div
        class="step d-flex flex-column"
        v-for="step in res.steps"
        :key="step.id"
      >
        <p>
          <span>{{ step.number }}.</span>{{ step.step }}
        </p>
        <div
          class="step-illustrations d-flex flex-row flex-wrap justify-content-center align-items-end"
        >
          <router-link
            :to="{ name: 'ingredient', params: { id: ingredient.id } }"
            class="step-illustration d-flex flex-column"
            v-for="ingredient in step.ingredients"
            :key="ingredient.id"
          >
            <img
              :src="baseURLIngredients + ingredient.image"
              :alt="ingredient.name"
              v-if="ingredient.image"
            />
            <img
              src="@/assets/icons/ingredient.svg"
              alt="ingredient none"
              v-else
            />
            <p>{{ ingredient.name }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Recipes/recipeInstruction");
export default {
  name: "RecipeInstruction",
  props: ["recipeID"],
  data() {
    return {
      response: [],
      baseURLIngredients: process.env.VUE_APP_BASE_INGREDIENT_URL,
    };
  },
  mounted() {
    this.instruction();
  },
  watch: {
    recipeID() {
      this.instruction();
    },
  },
  beforeRouteUpdate() {
    this.instruction();
  },
  methods: {
    ...mapActions(["getRecipeInstruction"]),
    async instruction() {
      const res = await this.getRecipeInstruction(this.recipeID)
        .catch((this.loading = true))
        .then((response) => response);
      this.response = res;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.instruction {
  max-width: 500px;
}
p {
  font-weight: 400;
  font-size: calc(2em + 2px);
  margin-bottom: 0;
  line-height: 21px;
  text-indent: 10px;
  color: $brown;
}
p > span {
  font-size: inherit;
  margin-right: 5px;
}
img {
  max-width: 100px;
  height: fit-content;
  margin: 0 auto;
}
.steps {
  gap: 25px;
  margin-bottom: 30px;
}
.steps > p {
  font-size: 2.5em;
  font-weight: 500;
  text-indent: 0;
}
.step {
  gap: 15px;
}
.step-illustrations {
  margin: 0 auto;
  gap: 30px;
}
.step-illustration > p {
  font-size: 2em;
  text-align: center;
}
</style>
