<template>
  <div class="needpad">
    <h1 class="sticky">Search a recipe on ingredients</h1>
    <div class="d-flex justify-content-between">
      <div class="d-flex flex-column side-panel">
        <p>Ingredients</p>
        <div class="d-flex flex-column ingredients">
          <div class="input d-flex">
            <input type="text" />
          </div>
          <div class="input d-flex">
            <input type="text" disabled />
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
.ingredients {
  width: calc(100vw - 40px);
  max-width: 340px;
  gap: 15px;
}
input:focus-visible,
input:focus {
  border: 0.5px solid $green;
}
input:disabled {
  border: 0.5px solid $green;
  cursor: pointer;
}
.input > input {
  background-repeat: no-repeat;
  background-position-x: calc(100% - 10px);
  background-position-y: calc(100% - 19px);
  background-image: url("@/assets/icons/minus.svg");
}
.input > input:disabled {
  background-position-y: calc(100% - 10px);
  background-image: url("@/assets/icons/plus.svg");
}
</style>
