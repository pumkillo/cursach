<template>
  <img
    @click.capture="likeTheRecipe"
    src="@/assets/icons/likeNotFill.svg"
    alt="like"
    class="like"
    v-if="!isLiked"
  />
  <img
    @click.capture="likeTheRecipe"
    src="@/assets/icons/likeFill.svg"
    alt="like"
    class="like"
    v-if="isLiked"
  />
</template>

<script>
export default {
  name: "LikeRecipe",
  data() {
    return {
      isLiked: false,
    };
  },
  props: ["recipeID"],
  emits: ["onLike"],
  mounted() {
    this.isLiked =
      localStorage.getItem("liked").search(`${this.recipeID};`) === -1
        ? false
        : true;
  },
  methods: {
    likeTheRecipe() {
      this.isLiked = !this.isLiked;
      this.isLiked
        ? localStorage.setItem(
            "liked",
            `${this.recipeID};`.concat(localStorage.getItem("liked"))
          )
        : localStorage.setItem(
            "liked",
            localStorage.getItem("liked").replaceAll(`${this.recipeID};`, "")
          );
      this.$emit("onLike");
    },
  },
};
</script>

<style scoped>
img {
  cursor: pointer;
}
</style>
