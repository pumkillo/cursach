<template>
  <div
    class="d-flex flex-wrap recipes"
    v-bind:style="{ maxWidth: maxWidth + 'px', justifyContent: justify }"
  >
    <RecipeBlock v-for="item in results" :key="item.id" :recipeObject="item" />
  </div>
</template>
<script>
import RecipeBlock from "@/components/RecipeBlock.vue";
export default {
  name: "RecipesBlocks",
  props: ["maxWidth", "justify", "results"],
  components: {
    RecipeBlock,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.recipes {
  gap: 20px;
}
</style>
