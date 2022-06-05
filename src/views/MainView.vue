<template>
  <h1>Search for recipe or products</h1>
  <form method="get">
    <input type="text" />
    <img src="../assets/icons/lupa.svg" alt="sdfasd" />
  </form>
</template>

<script></script>

<style scoped lang="scss">
@import "@/assets/style.scss";
h1 {
  font-size: 4em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
}
form {
  margin: 0 auto;
  width: fit-content;
}
input {
  width: 380px;
  height: 40px;
  border: 0.5px solid $black;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 2.5em;
  font-weight: 500;
}
input:focus-visible {
  outline: none;
  border: 0.5px solid $green;
}
img {
  position: absolute;
}
</style>
