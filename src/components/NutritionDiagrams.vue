<template>
  <div
    class="d-flex justify-content-between"
    :class="{ 'flex-column': isColumn, 'flex-row': !isColumn }"
  >
    <NutritionPieDiagram
      v-for="el in Object.entries(nutrition)"
      :key="el.id"
      :obj="el"
    />
  </div>
</template>

<script>
import NutritionPieDiagram from "@/components/NutritionPieDiagram.vue";
export default {
  name: "NutritionDiagrams",
  props: ["isColumn", "nutrition"],
  components: { NutritionPieDiagram },
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
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
.name {
  position: absolute;
  font-size: calc(2em);
  margin-top: 10px;
  color: $brown;
  font-weight: 600;
  line-height: 21px;
}
.pie {
  --wh: 90px;
  width: var(--wh);
  height: var(--wh);
  border-radius: 100%;
  display: inline-grid;
  place-content: center;
  background-color: $white-green !important;
  background: conic-gradient($green calc(var(--p) * 1%), #0000 0);
  mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - 6px),
    #000 calc(100% - 6px)
  );
}
</style>
