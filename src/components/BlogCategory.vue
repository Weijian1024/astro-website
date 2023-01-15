<template>
  <div class="blog-category">
    <ul>
      <li>
        <a href="#css"><span>Css</span></a>
      </li>
      <li>
        <a href="#js"><span>JavaScript</span></a>
      </li>
      <li>
        <a href="#vue"><span>Vue</span></a>
      </li>
      <li>
        <a href="#react"><span>React</span></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media (min-width: 1320px) {
}
.blog-category {
  margin-top: 30px;
  float: left;
  width: min(110ch, 90vw);
  margin-inline: auto;
  ul {
    display: flex;
    white-space: pre-wrap;
    li {
      cursor: pointer;
      span {
        color: var(--dark-bloglist-font, #373737);
        font-weight: 600;
        padding: 5px 12px;
        border-radius: 15px;
        background-color: var(--dark-nav-bg, #f1f2f3);
        margin-right: 10px;
      }
    }
  }
}
</style>