<template>
  <HeaderComponent />
  <router-view />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
  },
};
</script>
<style lang="scss">
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  src: url("@/assets/fonts/Raleway/Raleway-Regular.ttf");
}
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  src: url("@/assets/fonts/Raleway/Raleway-SemiBold.ttf");
}
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  src: url("@/assets/fonts/Raleway/Raleway-Bold.ttf");
}
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  src: url("@/assets/fonts/Raleway/Raleway-Medium.ttf");
}
* {
  font-size: 8px;
  font-family: "Raleway";
  padding: 0;
  margin: 0;
  text-decoration: none !important;
}
body {
  margin: 0 auto;
}
</style>
