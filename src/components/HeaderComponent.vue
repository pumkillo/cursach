<template>
  <div class="header">
    <div class="d-flex justify-content-between">
      <router-link :to="{ name: 'main' }">Main page</router-link>
      <router-link :to="{ name: 'favorites' }">Favorites</router-link>
      <router-link :to="{ name: 'filterSearch' }">Filter search</router-link>
      <router-link :to="{ name: 'quickAnswer' }">Quick answer</router-link>
      <router-link :to="{ name: 'randomReciepe' }">Random reciepe</router-link>
      <router-link :to="{ name: 'ingredientsSearch' }"
        >Ingredients search</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
a {
  font-weight: 500;
  font-size: 2.5em;
  color: $white !important;
}
</style>
