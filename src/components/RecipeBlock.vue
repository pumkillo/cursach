<template>
  <router-link :to="{ name: 'recipe', params: { id: 5 } }">
    <div
      class="recipe d-flex flex-column"
      :style="{
        paddingLeft: leftRightPadding + 'px',
        paddingRight: leftRightPadding + 'px',
      }"
    >
      <img
        src="https://spoonacular.com/recipeImages/642539-556x370.png"
        alt=""
        :style="{ maxWidth: maxWidthImg + 'px' }"
      />
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column">
          <p>falafel burger</p>
          <p>366kkal</p>
        </div>
        <img src="../assets/icons/likeNotFill.svg" alt="" />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "RecipeBlock",
  inject: ["leftRightPadding", "maxWidthImg"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.recipe {
  padding-top: 15px;
  padding-bottom: 15px;
  width: max-content;
  height: fit-content;
  background-color: $white-green;
  border-radius: 0.5em;
  gap: 15px;
}
img {
  border-radius: 0.5em;
  max-width: 450px;
  max-height: 300px;
  width: 65vw;
}
img:last-child {
  width: 32px;
  cursor: pointer;
}
p {
  font-size: calc(2em + 2px);
  text-transform: capitalize;
  font-weight: 500;
  color: $black;
  margin: 0 !important;
}
p:nth-child(2) {
  color: $green;
}
</style>
