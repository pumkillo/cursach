<template>
  <div
    class="d-flex justify-content-between"
    :class="{ 'flex-column': isColumn, 'flex-row': !isColumn }"
  >
    <img src="@/assets/mokfat.svg" alt="" />
    <img src="@/assets/mokcarbs.svg" alt="" />
    <img src="@/assets/mokprotein.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "NutritionDiagrams",
  props: ["isColumn"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.d-flex {
}
.flex-row {
  width: 100vw;
  max-width: 335px;
  height: fit-content;
}
.flex-column {
  max-height: 340px;
  height: 100vh;
  width: fit-content;
}
img {
  max-width: 90px;
}
</style>
