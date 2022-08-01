<template>
  <div class="needpad">
    <div class="title d-flex justify-content-center align-items-center">
      <h1>{{ ingredient.originalName }}</h1>
    </div>
    <div class="full-info d-flex flex-row justify-content-between">
      <div class="d-flex flex-column align-items-center">
        <NutritionalInformationIngredient
          v-if="ingredient.nutrition"
          :nutrients="ingredient.nutrition.nutrients"
        />
      </div>
      <div class="d-flex flex-column align-items-center">
        <IngredientCard :ingredientID="ingredientID" />
        <NutritionDiagrams
          v-if="ingredient.nutrition && ingredient.nutrition.caloricBreakdown"
          :isColumn="false"
          :nutrition="ingredient.nutrition.caloricBreakdown"
        />
        <IngredientSubstitutes :ingredientID="ingredientID" />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Ingredients/ingredientInfo");
import NutritionDiagrams from "@/components/NutritionDiagrams.vue";
import NutritionalInformationIngredient from "@/components/NutritionalInformationIngredient.vue";
import IngredientCard from "@/components/IngredientCard.vue";
import IngredientSubstitutes from "@/components/IngredientSubstitutes.vue";

export default {
  name: "IngredienteView",
  components: {
    NutritionDiagrams,
    NutritionalInformationIngredient,
    IngredientCard,
    IngredientSubstitutes,
  },
  data() {
    return {
      ingredient: {},
    };
  },
  computed: {
    ingredientID() {
      return this.$route.params.id;
    },
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
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.flex-row {
  gap: 20px;
}
.full-info > .flex-column {
  max-width: 500px;
  width: 100%;
  gap: 50px;
  margin-bottom: 50px;
}
h1 {
  margin: 0 !important;
}
.title {
  gap: 10px;
  margin: 60px 0;
}
.title > img {
  max-width: 32px;
  height: fit-content;
}
.description {
  max-width: 500px;
}
p {
  color: $brown;
  font-size: calc(2em + 2px);
  font-weight: 400;
  line-height: 21px;
  text-indent: 10px;
}
</style>
