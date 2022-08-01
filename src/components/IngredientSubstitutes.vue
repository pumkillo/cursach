<template>
  <div class="substitutes d-flex flex-column">
    <h4>Ingredient Substitutes</h4>
    <div class="d-flex justify-content-between flex-column">
      <p v-if="ingredientSubstitutes.status === 'failure'" class="text-center">
        Could not find any ingredient substitutes
      </p>
      <div v-else-if="ingredientSubstitutes.status === 'success'">
        <p
          v-for="ingredientSubstitute in ingredientSubstitutes.substitutes"
          :key="ingredientSubstitute.id"
        >
          {{ ingredientSubstitute }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers(
  "Ingredients/ingredientSubstitutes"
);
export default {
  name: "IngredientSubstitutes",
  props: ["ingredientID"],
  components: {},
  data() {
    return {
      ingredientSubstitutes: "",
    };
  },
  mounted() {
    this.getSubstitutes();
  },
  methods: {
    ...mapActions(["getIngredientSubstitutes"]),
    async getSubstitutes() {
      await this.getIngredientSubstitutes(this.ingredientID).then(
        (response) => {
          this.ingredientSubstitutes = response;
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.substitutes {
  width: 100%;
  max-width: 426px;
}
p {
  font-size: 2em;
  color: $green;
}
</style>
