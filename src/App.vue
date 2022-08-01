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
