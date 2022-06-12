<template>
  <div class="needpad">
    <div class="title d-flex justify-content-center align-items-center">
      <h1>Canned garbanzo beans</h1>
    </div>
    <div class="full-info d-flex flex-row justify-content-between">
      <div class="d-flex flex-column align-items-center">
        <IngredientCard />
        <NutritionalInformation />
      </div>
      <div class="d-flex flex-column align-items-center">
        <NutritionDiagrams />
        <TasteWidgetById />
        <IngredientSubstitutes />
      </div>
    </div>
  </div>
</template>

<script>
import NutritionDiagrams from "@/components/NutritionDiagrams.vue";
import TasteWidgetById from "../components/TasteWidgetById.vue";
import NutritionalInformation from "@/components/NutritionalInformation.vue";
import IngredientCard from "@/components/IngredientCard.vue";
import IngredientSubstitutes from "@/components/IngredientSubstitutes.vue";

export default {
  name: "RecipeView",
  props: [""],
  components: {
    NutritionDiagrams,
    TasteWidgetById,
    NutritionalInformation,
    IngredientCard,
    IngredientSubstitutes,
  },
  data() {
    return {};
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
.full-info > .flex-column:nth-child(2) {
  padding-top: 65px;
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
