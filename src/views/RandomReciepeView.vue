<template>
  <div class="needpad">
    <h1>Random a recipe</h1>
    <button class="button">Random again</button>
    <div class="briefInfo d-flex justify-content-between align-items-center">
      <div class="d-flex flex-column">
        <div class="d-flex justify-content-center">
          <router-link
            class="decoration"
            :to="{ name: 'recipe', params: { id: 5 } }"
            ><h3>Falafel Burger</h3></router-link
          >
          <h3>336k</h3>
        </div>
        <RecipeCard :needBackColor="false" />
      </div>
      <NutritionDiagrams :isColumn="true" />
      <TasteWidgetById />
    </div>
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";
import NutritionDiagrams from "@/components/NutritionDiagrams.vue";
import TasteWidgetById from "../components/TasteWidgetById.vue";
export default {
  name: "RandomReciepe",
  components: {
    RecipeCard,
    NutritionDiagrams,
    TasteWidgetById,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.briefInfo {
  margin-top: 60px;
  gap: 90px;
}
.button {
  font-size: 3em;
  padding: 15px 20px;
  margin: 0 auto;
}
h3 {
  font-weight: 500;
  font-size: 4em;
  color: $green;
  margin-bottom: 0;
  line-height: 38px;
}
h3:first-child {
  margin-right: 20px;
}
</style>
