<template>
  <h1>Search for recipe</h1>
  <div class="search">
    <input type="text" v-model.lazy="querySearch" placeholder="Burger" />
    <img src="@/assets/icons/lupa.svg" alt="lupa" />
  </div>
  <h5 v-if="querySearch === ''">Type a query to find recipes</h5>
  <img src="@/assets/loading.gif" alt="loading" v-else-if="loading" />
  <RecipesBlocks
    maxWidth="1600"
    justify="center"
    v-else-if="results"
    :results="results"
  />
  <h5 v-if="error">No recipes found for this query</h5>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers(
  "Recipes/querySearch"
);
import RecipesBlocks from "@/components/RecipesBlocks.vue";

export default {
  components: {
    RecipesBlocks,
  },
  data() {
    return {
      querySearch: "",
      response: {},
      loading: false,
      error: false,
    };
  },
  provide() {
    return {
      leftRightPadding: 35,
      maxWidthImg: 450,
    };
  },
  computed: {
    ...mapGetters(["getSearchQuery"]),
    results() {
      return this.response.results;
    },
  },
  mounted() {
    this.querySearch = this.getSearchQuery;
  },
  watch: {
    querySearch(newValue) {
      newValue === "" ? (this.loading = true) : this.getResult();
    },
  },
  methods: {
    ...mapActions(["getQuerySearch"]),
    async getResult() {
      await this.getQuerySearch({
        query: this.querySearch,
        addRecipeNutrition: true,
      })
        .then((this.loading = true))
        .then((this.error = false))
        .then((response) => (this.response = response));
      if (this.results.length === 0) {
        setTimeout(() => {
          this.error = true;
          this.loading = false;
        }, 2500);
      } else {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.search {
  max-width: 490px;
}
input:focus-visible,
input:focus {
  border: 0.5px solid $green;
}
</style>
