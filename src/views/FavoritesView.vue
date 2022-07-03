<template>
  <div class="needpad">
    <h1>Favorites</h1>
    <div class="d-flex flex-column filter-block">
      <p v-if="!inverseSortBy">
        Filter by {{ activeFilter }} from {{ low }} to {{ high }}
      </p>
      <p v-else>Filter by {{ activeFilter }} from {{ high }} to {{ low }}</p>
      <div class="d-flex filters flex-wrap align-items-center">
        <p
          @click="changeGetParametrFilter(filter)"
          v-for="filter in filters"
          :key="filter.id"
          :class="{ active: filter === activeFilter }"
        >
          {{ filter }}
        </p>
        <svg
          width="50"
          height="50"
          viewBox="0 0 138 138"
          fill="none"
          :class="{ inverseTrue: inverseSortBy, inverseFalse: !inverseSortBy }"
          @click="inverseSort"
        >
          <rect width="138" height="138" rx="5" fill="none" />
          <path
            d="M44.4749 34.5251C43.108 33.1583 40.892 33.1583 39.5251 34.5251L17.2513 56.799C15.8844 58.1658 15.8844 60.3819 17.2513 61.7487C18.6181 63.1156 20.8342 63.1156 22.201 61.7487L42 41.9497L61.799 61.7487C63.1658 63.1156 65.3819 63.1156 66.7487 61.7487C68.1156 60.3819 68.1156 58.1658 66.7487 56.799L44.4749 34.5251ZM38.5 102C38.5 103.933 40.067 105.5 42 105.5C43.933 105.5 45.5 103.933 45.5 102H38.5ZM38.5 37V102H45.5V37H38.5Z"
            fill="none"
          />
          <path
            d="M99.5 37C99.5 35.067 97.933 33.5 96 33.5C94.067 33.5 92.5 35.067 92.5 37H99.5ZM93.5251 104.475C94.892 105.842 97.108 105.842 98.4749 104.475L120.749 82.201C122.116 80.8342 122.116 78.6181 120.749 77.2513C119.382 75.8844 117.166 75.8844 115.799 77.2513L96 97.0503L76.201 77.2513C74.8342 75.8844 72.6181 75.8844 71.2513 77.2513C69.8844 78.6181 69.8844 80.8342 71.2513 82.201L93.5251 104.475ZM92.5 37V102H99.5V37H92.5Z"
            fill="none"
          />
        </svg>
      </div>
    </div>
    <img src="@/assets/loading.gif" alt="loading" v-if="loading" id="loading" />
    <RecipesBlocks maxWidth="1060" justify="center" :results="results" />
    <h5 v-if="results.length === 0">No favorite recipes found</h5>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Recipes/recipeInfo");
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
  data() {
    return {
      inverseSortBy: false,
      low: "low",
      high: "high",
      results: [],
      constRes: [],
      filters: [
        "date",
        "name",
        "calorires",
        "fat (%)",
        "protein (%)",
        "carbs (%)",
      ],
    };
  },
  async mounted() {
    await this.getResults();
    this.checkActiveFilter();
  },
  computed: {
    favorites() {
      let fav = localStorage.getItem("liked").split(";");
      fav.pop();
      return fav;
    },
    loading() {
      return !(this.results.length === this.favorites.length);
    },
    activeFilter() {
      return this.$route.query.filter;
    },
  },
  watch: {
    activeFilter() {
      this.checkActiveFilter();
      switch (this.activeFilter) {
        case this.filters[0]:
          this.low = "last";
          this.high = "first";
          break;
        case this.filters[1]:
          this.low = "A";
          this.high = "Z";
          break;
        default: {
          this.low = "low";
          this.high = "high";
        }
      }
    },
    favorites() {
      this.getResults();
    },
  },
  methods: {
    ...mapActions(["getAllRecipeInfo"]),
    async getResults() {
      this.constRes = [];
      for (let recipeID of this.favorites) {
        await this.getAllRecipeInfo({
          recipeID: recipeID,
          nutrition: true,
        }).then((response) => this.constRes.push(response));
      }
      this.results = Array.from(this.constRes);
    },
    changeGetParametrFilter(filter) {
      this.$router.replace({ query: { filter: filter } });
      this.inverseSortBy = false;
    },
    inverseSort() {
      this.inverseSortBy = !this.inverseSortBy;
      this.results.reverse();
    },
    checkActiveFilter() {
      switch (this.activeFilter) {
        case this.filters[0]:
          this.results = Array.from(this.constRes);
          break;
        case this.filters[1]:
          this.results.sort(function (a, b) {
            return a.title < b.title ? -1 : 1;
          });
          break;
        case this.filters[2]:
          this.results.sort(function (a, b) {
            return (
              a.nutrition.nutrients[0].amount - b.nutrition.nutrients[0].amount
            );
          });
          break;
        case this.filters[3]:
          this.results.sort(function (a, b) {
            return (
              a.nutrition.caloricBreakdown.percentFat -
              b.nutrition.caloricBreakdown.percentFat
            );
          });
          break;
        case this.filters[4]:
          this.results.sort(function (a, b) {
            return (
              a.nutrition.caloricBreakdown.percentProtein -
              b.nutrition.caloricBreakdown.percentProtein
            );
          });
          break;
        case this.filters[5]:
          this.results.sort(function (a, b) {
            return (
              a.nutrition.caloricBreakdown.percentCarbs -
              b.nutrition.caloricBreakdown.percentCarbs
            );
          });
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.filter-block {
  gap: 20px;
  margin-bottom: 60px;
}
#loading {
  margin-bottom: 20px;
}
.d-flex p {
  font-weight: 600;
  font-size: 2.75em;
  line-height: 17px;
  color: $green;
  margin-bottom: 0;
}
.active {
  background-color: $green !important;
  color: $white !important;
}
.filters {
  column-gap: 40px;
  row-gap: 15px;
}
.filters p {
  cursor: pointer;
  font-weight: 500;
  text-transform: capitalize;
  padding: 10px 25px;
  background-color: $white-green;
  border-radius: 3px;
}
svg {
  cursor: pointer;
}
.inverseFalse > path,
.inverseTrue > rect {
  fill: $green;
}
.inverseFalse > rect,
.inverseTrue > path {
  fill: $white-green;
}
</style>
