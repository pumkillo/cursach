<template>
  <div class="needpad">
    <h1 class="sticky">Filter search</h1>
    <div class="d-flex justify-content-between">
      <div class="d-flex flex-column side-panel">
        <p>Filters</p>
        <div class="filters d-flex flex-column">
          <div class="input d-flex align-items-center justify-content-between">
            <p>Carbs</p>
            <div class="minmax d-flex align-items-center">
              <p>min</p>
              <input type="text" value="0" pattern="[0-9]{0,3}" min="0" />
              <p>max</p>
              <input type="text" value="100" pattern="[0-9]{0,3}" max="800" />
            </div>
          </div>
        </div>
        <button class="button">Search</button>
      </div>
      <RecipesBlocks :maxWidth="700" justify="start" />
    </div>
  </div>
</template>

<script>
import RecipesBlocks from "@/components/RecipesBlocks.vue";
export default {
  components: {
    RecipesBlocks,
  },
  provide() {
    return {
      leftRightPadding: 15,
      maxWidthImg: 310,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.filters {
  width: calc(100vw - 40px);
  max-width: 340px;
  gap: 15px;
}
input {
  min-width: 50px;
  max-width: 60px;
  height: 30px;
  border: 0.5px solid $green;
  color: $green;
  padding: 5px 10px;
  font-size: 2em;
}
.input {
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 0.5px solid $brown;
  border-radius: 0.5em;
}
input:focus-visible,
input:focus {
  border: 0.5px solid $green;
}
.minmax > p {
  margin-right: 10px;
}
.minmax > input:nth-child(2) {
  margin-right: 20px;
}
</style>
