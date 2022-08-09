<template>
  <div class="needpad">
    <h1>Filter search</h1>
    <div class="d-flex justify-content-between">
      <div class="d-flex flex-column side-panel">
        <p>Filters (in grams)</p>
        <div class="filters d-flex flex-column">
          <div
            class="input d-flex align-items-center justify-content-between"
            v-for="item in filters"
            :key="item.id"
          >
            <p class="d-title">{{ item.name }}</p>
            <div class="minmax d-flex align-items-center">
              <p>min</p>
              <input
                type="text"
                v-model="item.min"
                @input="checkNumbers(item, 'min')"
              />
              <p>max</p>
              <input
                type="text"
                v-model="item.max"
                @input="checkNumbers(item, 'max')"
              />
            </div>
          </div>
        </div>
        <button class="button" @click="getResultRecipes">Search</button>
      </div>
      <RecipesBlocks :maxWidth="700" justify="start" :results="results" />
      <img src="@/assets/loading.gif" alt="loading" v-if="loading" />
      <h5 v-if="error">No recipes found for these filters</h5>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers(
  "Recipes/ingredientsSearchFilter"
);
import RecipesBlocks from "@/components/RecipesBlocks.vue";
export default {
  components: {
    RecipesBlocks,
  },
  provide() {
    return {
      leftRightPadding: 15,
      maxWidthImg: 310,
      maxWidthTitle: 270,
    };
  },
  data() {
    return {
      results: [],
      loading: false,
      error: false,
      filters: [],
    };
  },
  mounted() {
    this.getResultRecipes();
    this.filters = Array.from(this.getItemsToFilter);
  },
  computed: {
    ...mapGetters(["getItemsToFilter"]),
  },
  methods: {
    ...mapActions(["getRecipes"]),
    ...mapMutations(["changeItemsToFilter"]),
    async getResultRecipes() {
      this.results = [];
      await this.getRecipes()
        .then((response) => (this.results = response))
        .then((this.loading = true))
        .then((this.error = false));
      if (this.results.length === 0) {
        setTimeout(() => {
          this.error = true;
          this.loading = false;
        }, 2500);
      } else {
        this.loading = false;
      }
    },
    checkNumbers(item, key) {
      item[key] = item[key].replace(/\D/, "");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.filters {
  width: calc(100vw - 40px);
  max-width: 360px;
  gap: 15px;
}
input {
  min-width: 50px;
  max-width: 65px;
  height: 30px;
  border: 0.5px solid $green;
  color: $green;
  padding: 5px 10px;
  font-size: 2em;
}
.input {
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 0.5px solid $brown;
  border-radius: 0.5em;
}
input:focus-visible,
input:focus {
  border: 0.5px solid $green;
}
.minmax > p {
  margin-right: 10px;
}
.minmax > input:nth-child(2) {
  margin-right: 20px;
}
.d-title {
  text-transform: capitalize;
}
h5 {
  margin-top: 40px;
  width: 100%;
}
</style>
