<template>
  <div
    class="d-flex justify-content-between"
    :class="{ 'flex-column': isColumn, 'flex-row': !isColumn }"
  >
    <NutritionPieDiagram v-for="el in info" :key="el.id" :obj="el" :sum="sum" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Recipes/recipeNutritionCPF");

import NutritionPieDiagram from "@/components/NutritionPieDiagram.vue";
export default {
  name: "NutritionDiagrams",
  props: ["isColumn", "recipeID"],
  components: { NutritionPieDiagram },
  data() {
    return {
      info: [],
      sum: 0,
    };
  },
  mounted() {
    this.getRecipeNutritionForDiagrams();
  },
  watch: {
    recipeID() {
      this.sum = 0;
      this.getRecipeNutritionForDiagrams();
    },
  },
  methods: {
    ...mapActions(["getRecipeNutritionCPF"]),
    async getRecipeNutritionForDiagrams() {
      await this.getRecipeNutritionCPF(this.recipeID).then(
        (response) => (this.info = response)
      );
      Object.values(this.info).forEach((element) => {
        this.sum += Number(Object.values(element)[0].replace("g", ""));
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.flex-row {
  width: 100vw;
  max-width: 335px;
  height: fit-content;
}
.flex-column {
  max-height: 340px;
  height: 100vh;
  width: fit-content;
}
img {
  max-width: 90px;
}
.name {
  position: absolute;
  font-size: calc(2em);
  margin-top: 10px;
  color: $brown;
  font-weight: 600;
  line-height: 21px;
}
.pie {
  --wh: 90px;
  width: var(--wh);
  height: var(--wh);
  border-radius: 100%;
  display: inline-grid;
  place-content: center;
  background-color: $white-green !important;
  background: conic-gradient($green calc(var(--p) * 1%), #0000 0);
  mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - 6px),
    #000 calc(100% - 6px)
  );
}
</style>
