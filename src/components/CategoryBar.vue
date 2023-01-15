<template>
  <div class="category-bar">
    <div class="cate">
      <slot></slot>
    </div>
    <div class="bar"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media (min-width: 1320px) {
  .category-bar {
    .bar {
      width: 75% !important;
      flex: unset !important;
    }
  }
}
@media (max-width: 650px) {
}
.category-bar {
  color: var(--dark-bloglist-font, #8661fc);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cate {
    font-size: 24px;
    font-weight: 700;
    margin-right: 20px;
  }
  .bar {
    flex: 1;
    background-color: var(--dark-bloglist-bar, #000);
    height: 2px;
  }
}
</style>