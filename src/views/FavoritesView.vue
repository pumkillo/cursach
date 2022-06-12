<template>
  <div class="needpad">
    <h1>Favorites</h1>
    <div class="d-flex flex-column filter-block">
      <p>Filter by</p>
      <div class="d-flex filters flex-wrap">
        <p @click="changeGetParametrFilter($event)" ref="name">name</p>
        <p @click="changeGetParametrFilter($event)" ref="calories">calories</p>
        <p>fat</p>
        <p>protein</p>
        <p>carbs</p>
      </div>
    </div>
    <RecipesBlocks maxWidth="1060" justify="center" />
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
      maxWidthImg: 450,
    };
  },
  methods: {
    changeGetParametrFilter() {},
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.filter-block {
  gap: 20px;
  margin-bottom: 60px;
}
.d-flex p {
  font-weight: 600;
  font-size: 3em;
  line-height: 17px;
  color: $green;
}
.filters {
  gap: 40px;
}
.filters p {
  cursor: pointer;
  font-weight: 500;
  text-transform: capitalize;
  padding: 10px 25px;
  background-color: $white-green;
  border-radius: 3px;
}
</style>
