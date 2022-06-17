<template>
  <div class="d-flex align-items-center justify-content-center">
    <p class="name">{{ Object.keys(obj)[0] }}</p>
    <div class="pie" :style="{ '--p': percent }"></div>
  </div>
</template>

<script>
export default {
  name: "NutritionPieDiagram",
  props: ["obj", "sum"],
  data() {
    return {};
  },
  computed: {
    percent() {
      return Math.round(
        (Object.values(this.obj)[0].replace("g", "") / this.sum) * 100
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

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
