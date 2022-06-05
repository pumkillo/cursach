<template>
  <div class="header">
    <div class="d-flex justify-content-between">
      <router-link :to="{ name: 'main' }">Main page</router-link>
      <!-- <router-link :to="{ name: 'about' }">Favorites</router-link> -->
      <!-- <router-link :to="{ name: 'home' }">Filter search</router-link> -->
      <!-- <router-link :to="{ name: 'home' }">Quick answer</router-link> -->
      <!-- <router-link :to="{ name: 'home' }">Random reciepe</router-link> -->
      <!-- <router-link :to="{ name: 'home' }">Ingredients search</router-link> -->

      <a href="#">Favorites</a>
      <a href="#">Filter search</a>
      <a href="#">Quick answer</a>
      <a href="#">Random reciepe</a>
      <a href="#">Ingredients search</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped lang="scss">
@import "@/assets/style.scss";
.header {
  background-color: $green;
  padding: 25px 0 20px 0;
  margin-bottom: 60px;
}
.header > .d-flex {
  margin: 0 auto;
  max-width: 1100px !important;
}
a {
  font-weight: 500;
  font-size: 2.5em;
  color: $white !important;
}
</style>
