<template>
  <div
    class="d-flex flex-wrap recipes"
    v-bind:style="{ maxWidth: maxWidth + 'px', justifyContent: justify }"
  >
    <RecipeBlock />
    <RecipeBlock />
    <RecipeBlock />
    <RecipeBlock />
    <RecipeBlock />
    <RecipeBlock />
    <RecipeBlock />
  </div>
</template>
<script>
import RecipeBlock from "@/components/RecipeBlock.vue";
export default {
  name: "RecipesBlocks",
  props: ["maxWidth", "justify"],
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
