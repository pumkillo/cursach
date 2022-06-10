<template>
  <h1>Search for recipe or products</h1>
  <form method="get" class="d-flex">
    <input type="text" class="form-control" />
    <img src="../assets/icons/lupa.svg" alt="lupa" />
  </form>
  <div class="d-flex flex-wrap justify-content-center recipes">
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
  components: {
    RecipeBlock,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style.scss";

h1 {
  font-size: 4em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
}
form {
  display: flex;
  margin: 0 auto;
  max-width: 340px;
  margin-bottom: 35px;
}
input {
  width: 100%;
  height: 40px;
  border: 0.5px solid $black;
  border-radius: 4px;
  padding: 0 40px 0 15px;
  font-size: 2.5em;
  font-weight: 500;
}
input:focus-visible,
input:focus {
  outline: none;
  border: 0.5px solid $green;
  box-shadow: none;
}
img {
  margin-left: -30px;
  width: 20px;
}
.recipes {
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
  max-width: 1600px;
  gap: 20px;
}
</style>
