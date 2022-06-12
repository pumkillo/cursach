<template>
  <div class="info d-flex flex-column">
    <div class="article-info d-flex flex-column">
      <h4>Nutritional Information</h4>
      <div class="d-grid">
        <p class="legend">Element</p>
        <p class="legend">Amount</p>
        <p class="legend">Day norm</p>
        <div class="d-grid column" v-for="item in 4" :key="item.id">
          <p>Calories</p>
          <p>366k</p>
          <p>18.32%</p>
        </div>
      </div>
    </div>
    <div class="article-info d-flex flex-column">
      <h4>Harmful elements</h4>
      <div class="d-grid">
        <div class="d-grid column" v-for="item in 2" :key="item.id">
          <p>Calories</p>
          <p>366k</p>
          <p>18.32%</p>
        </div>
      </div>
    </div>
    <div class="article-info d-flex flex-column">
      <h4>Healthy elements</h4>
      <div class="d-grid">
        <div class="d-grid column" v-for="item in 2" :key="item.id">
          <p>Calories</p>
          <p>366k</p>
          <p>18.32%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NutritionalInformation",
  props: ["recipeID"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.info {
  gap: 25px;
  padding: 0 20px;
  width: 100%;
}
.d-grid {
  grid-template-columns: repeat(3, auto);
  width: 100%;
  max-width: 500px;
}
p {
  font-size: calc(2em + 2px);
  line-height: 17px;
  margin-bottom: 5px;
}
.legend {
  font-weight: 600;
  margin-bottom: 12px;
  //   margin-left: 10px;
}
.column {
  grid-column-start: 1;
  grid-column-end: 4;
}
.column > p {
  color: $brown;
}
</style>
