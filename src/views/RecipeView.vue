<template>
  <div class="needpad">
    <div class="title d-flex justify-content-center align-items-center">
      <h1>Falafel Burger</h1>
      <img src="@/assets/icons/likeNotFill.svg" alt="" />
    </div>
    <div class="full-info d-flex flex-row justify-content-between">
      <div class="d-flex flex-column align-items-center">
        <RecipeCard :needBackColor="true" />
        <NutritionalInformation />
        <TasteWidgetById />
        <SimilarRecipes />
      </div>
      <div class="d-flex flex-column align-items-center">
        <DishTypesAndDiets
          :dishTypes="['lunch', 'main course', 'main dish', 'dinner']"
          :diets="['dairy free', 'lacto ovo vegetaria']"
        />
        <NutritionDiagrams />
        <div class="description">
          <h4>Be ready in 45 minutes</h4>
          <p>
            You can never have too many middl eastern recipes, so give Falafel
            Burger a try. For $1.37 per serving, this recipe covers 19% of your
            daily requirements of vitamins and minerals. One portion of this
            dish contains around 12g of protein, 20g of fat, and a total of 402
            calories. This recipe serves 4. It is brought to you by Foodista. 4
            people were impressed by this recipe. Head to the store and pick up
            onion, garlic, sriracha sauce, and a few other things to make it
            today. Only a few people really liked this main course. From
            preparation to the plate, this recipe takes about about 45 minutes.
            It is a good option if you're following a dairy free and lacto ovo
            vegetarian diet. With a spoonacular score of 81%, this dish is
            spectacular.
          </p>
        </div>
        <RecipeInstruction />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";
import NutritionDiagrams from "@/components/NutritionDiagrams.vue";
import TasteWidgetById from "../components/TasteWidgetById.vue";
import DishTypesAndDiets from "@/components/DishTypesAndDiets.vue";
import RecipeInstruction from "@/components/RecipeInstruction.vue";
import SimilarRecipes from "@/components/SimilarRecipes.vue";
import NutritionalInformation from "@/components/NutritionalInformation.vue";

export default {
  name: "RecipeView",
  props: [""],
  components: {
    RecipeCard,
    NutritionDiagrams,
    TasteWidgetById,
    DishTypesAndDiets,
    RecipeInstruction,
    SimilarRecipes,
    NutritionalInformation,
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
