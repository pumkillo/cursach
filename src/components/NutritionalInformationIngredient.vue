<template>
  <div class="info d-flex flex-column">
    <div class="article-info d-flex flex-column">
      <h4>Nutritional Information</h4>
      <div class="d-grid">
        <p class="legend">Element</p>
        <p class="legend">Amount</p>
        <p class="legend">Day norm</p>
        <div class="d-grid column" v-for="item in nutrients" :key="item.id">
          <p>{{ item.name }}</p>
          <p>{{ item.amount }}{{ item.unit }}</p>
          <p>{{ item.percentOfDailyNeeds }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NutritionalInformationIngredient",
  props: ["nutrients"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.info {
  gap: 25px;
  padding-left: 8em;
  width: 100%;
}
.d-grid {
  grid-template-columns: 220px 120px 120px;
  width: 100%;
  max-width: 500px;
}
p {
  font-size: calc(2em + 2px);
  line-height: 17px;
  margin: 5px 0;
}
.legend {
  font-weight: 600;
  margin-bottom: 12px;
}
.column {
  grid-column-start: 1;
  grid-column-end: 4;
}
.column::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  opacity: 0.5;
}
.column > p {
  color: $brown;
}
</style>
