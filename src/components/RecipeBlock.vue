<template>
  <div class="d-flex flex-column recipe">
    <img src="https://spoonacular.com/recipeImages/642539-556x370.png" alt="" />
    <div class="d-flex flex-row justify-content-between">
      <div class="d-flex flex-column">
        <p>falafel burger</p>
        <p>366kkal</p>
      </div>
      <img src="../assets/icons/likeNotFill.svg" alt="" />
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
@import "@/assets/style.scss";
.d-flex .recipe {
  padding: 15px 35px;
  width: fit-content;
  height: fit-content;
  background-color: $white-green;
  border-radius: 0.5em;
  gap: 15px;
}
img {
  border-radius: 0.5em;
  max-width: 450px;
  max-height: 300px;
}
img:last-child {
  width: 32px;
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
