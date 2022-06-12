<template>
  <h1>Search for recipe or products</h1>
  <div class="search">
    <input type="text" />
    <img src="../assets/icons/lupa.svg" alt="lupa" />
  </div>
  <RecipesBlocks maxWidth="1600" justify="center" />
</template>

<script>
import RecipesBlocks from "@/components/RecipesBlocks.vue";
export default {
  components: {
    RecipesBlocks,
  },
  data() {
    return {};
  },
  provide() {
    return {
      leftRightPadding: 35,
      maxWidthImg: 450,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.search {
  max-width: 340px;
}
input:focus-visible,
input:focus {
  border: 0.5px solid $green;
}
</style>
