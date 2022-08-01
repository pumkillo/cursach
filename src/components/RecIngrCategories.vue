<template>
  <div class="categories d-flex justify-content-center flex-wrap">
    <div
      class="category d-flex align-items-center"
      v-for="item in categoriesArray"
      :key="item.id"
    >
      <div class="circle"></div>
      <p v-if="$route.name !== 'ingredient'">{{ toKebab(item[0]) }}</p>
      <p v-else>{{ item[0] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecIngrCategories",
  props: ["categoriesArray"],
  data() {
    return {};
  },
  methods: {
    toKebab(str) {
      return str
        .split("")
        .map((letter, idx) => {
          return letter.toUpperCase() === letter
            ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
            : letter;
        })
        .join("");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.categories {
  gap: calc(1em - 1px);
}
.circle {
  background-color: $green;
  width: 18px;
  height: 18px;
  border-radius: 100%;
}
.category {
  background-color: $brown;
  color: $white-green;
  padding: 5px 15px 5px 5px;
  border-radius: calc(2em + 1px);
  gap: 5px;
}
p {
  font-size: calc(2em + 2px);
  margin-bottom: 0;
  line-height: 21px;
  text-transform: capitalize;
}
</style>
