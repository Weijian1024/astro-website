<template>
  <div class="footer">
    © WinSton Zhong.Built with <a href="https://astro.build/">Astro</a>,deployed
    on <a href="https://www.netlify.com/">Netlify</a>.
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media (max-width: 650px) {
  .footer {
    margin-top: 0 !important;
    font-size: 13px !important;
  }
}
.footer {
  width: 90%;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--dark-bloglist-font, #000);
  padding: 5px 0;
  margin-top: 5rem;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 1px;
  a {
    text-decoration: underline;
  }
}
</style>