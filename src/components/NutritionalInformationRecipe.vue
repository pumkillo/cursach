<template>
  <div class="info d-flex flex-column">
    <div class="article-info d-flex flex-column">
      <h4>Nutritional Information</h4>
      <div class="d-grid">
        <p class="legend">Element</p>
        <p class="legend">Amount</p>
        <p class="legend">Day norm</p>
        <div class="d-grid column" v-for="item in info" :key="item.id">
          <p>{{ item.title }}</p>
          <p>{{ item.amount }}</p>
          <p>{{ item.percentOfDailyNeeds }}%</p>
        </div>
      </div>
    </div>
    <div class="article-info d-flex flex-column">
      <h4>Harmful elements</h4>
      <div class="d-grid">
        <div class="d-grid column" v-for="item in bad" :key="item.id">
          <p>{{ item.title }}</p>
          <p>{{ item.amount }}</p>
          <p>{{ item.percentOfDailyNeeds }}%</p>
        </div>
      </div>
    </div>
    <div class="article-info d-flex flex-column">
      <h4>Healthy elements</h4>
      <div class="d-grid">
        <div class="d-grid column" v-for="item in good" :key="item.id">
          <p>{{ item.title }}</p>
          <p>{{ item.amount }}</p>
          <p>{{ item.percentOfDailyNeeds }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Recipes/recipeNutrition");
export default {
  name: "NutritionalInformationRecipe",
  props: ["recipeID"],
  data() {
    return {
      nutrition: {},
      bad: [],
      good: [],
      info: [],
    };
  },
  mounted() {
    this.getInfo();
  },
  watch: {
    recipeID() {
      this.getInfo();
    },
  },
  methods: {
    ...mapActions(["getRecipeNutrition"]),
    async getInfo() {
      const res = await this.getRecipeNutrition(this.recipeID).then(
        (response) => (this.nutrition = response)
      );
      this.bad = this.nutrition.bad;
      this.good = this.nutrition.good;
      this.info = this.parseElements();
    },
    parseElements() {
      let protein = this.good[0];
      let other = this.bad.filter((el) =>
        ["Calories", "Fat", "Carbohydrates"].includes(el.title)
      );
      return other.concat(protein);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.info {
  gap: 25px;
  padding-left: 8em;
  width: 100%;
}
.d-grid {
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 500px;
}
p {
  font-size: calc(2em + 2px);
  line-height: 17px;
  margin-bottom: 5px;
}
.legend {
  font-weight: 600;
  margin-bottom: 12px;
  //   margin-left: 10px;
}
.column {
  grid-column-start: 1;
  grid-column-end: 4;
}
.column > p {
  color: $brown;
}
</style>
