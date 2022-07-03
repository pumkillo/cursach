<template>
  <div class="d-flex justify-content-between">
    <div>
      <h2>Good as</h2>
      <p v-if="!dishTypes || dishTypes.length === 0">No dish types found</p>
      <ul class="d-flex flex-column" v-else>
        <li v-for="item in dishTypes" :key="item.id">{{ item }}</li>
      </ul>
    </div>
    <div class="stick"></div>
    <div>
      <h2>Diets</h2>
      <p v-if="!diets || diets.length === 0">No diets found</p>
      <ul class="d-flex flex-column" v-else>
        <li v-for="item in diets" :key="item.id">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DishTypesAndDiets",
  props: ["dishTypes", "diets"],
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.d-flex.justify-content-between {
  margin-left: 8px;
  width: 100%;
}
h2 {
  margin-bottom: 3px !important;
  line-height: 21px;
  color: $green;
  font-weight: 600 !important;
  font-size: calc(2em + 2px) !important;
}
.stick {
  background-color: $green;
  width: 2px;
  height: 100%;
}
li,
p {
  font-size: calc(2em + 2px);
  font-weight: 600;
  color: $brown;
  line-height: 21px;
}
.d-flex.flex-column {
  gap: 3px;
}
.justify-content-between {
  padding: 0 20px;
}
</style>
