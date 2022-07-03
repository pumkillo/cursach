<template>
  <HeaderComponent />
  <div class="body">
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
  },
  mounted() {
    if (!localStorage.getItem("liked")) {
      localStorage.setItem("liked", "");
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";
.header a.router-link-active::after {
  content: "";
  height: 2px;
  width: 100%;
  margin-top: 10px;
  background-color: $white;
  border-radius: 2px;
}
</style>
