<template>
  <div class="instruction d-flex flex-column">
    <h4>Insruction</h4>
    <div class="steps d-flex flex-column">
      <div class="step d-flex flex-column" v-for="item in 4" :key="item.id">
        <p>
          3. Using your clean hands incorporate tahini, sriracha, parsley and
          onion into the chickpea mixture.
        </p>
        <div class="step-illustrations d-flex flex-wrap justify-content-center">
          <router-link
            :to="{ name: 'ingredient', params: { id: 9 } }"
            class="step-illustration d-flex flex-column"
            v-for="item in 2"
            :key="item.id"
          >
            <img
              src="https://spoonacular.com/cdn/ingredients_100x100/chickpeas.png"
              alt="chickpeas"
            />
            <p>canned chickpeas</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeInstruction",
  props: ["recipeID"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.instruction {
  max-width: 500px;
}
p {
  font-weight: 400;
  font-size: calc(2em + 2px);
  margin-bottom: 0;
  line-height: 21px;
  color: $brown;
}
img {
  max-width: 100px;
  height: fit-content;
  margin: 0 auto;
}
.steps {
  gap: 25px;
}
.step {
  gap: 15px;
}
.step-illustrations {
  margin: 0 auto;
  gap: 30px;
  max-width: 300px;
}
.step-illustration > p {
  font-size: 2em;
}
</style>
