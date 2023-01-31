<template>
  <header>
    <nav>
      <a :class="active == 0 ? 'nav-item active' : 'nav-item'" href="/">博客</a>
      <a
        :class="active == 1 ? 'nav-item active' : 'nav-item'"
        href="/components"
        >组件库</a
      >
      <a :class="active == 2 ? 'nav-item active' : 'nav-item'" href="/">整活</a>
      <a :class="active == 3 ? 'nav-item active' : 'nav-item'" href="/author"
        >作者</a
      >
    </nav>
    <div class="switch">
      <input type="checkbox" id="switch" /><label @click="toggle" for="switch"
        >Toggle</label
      >
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["active"],
  mounted() {},

  methods: {
    //一键换肤
    toggle() {
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
      } else {
        document.body.classList.add("dark-mode");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 1320px) {
  //导航栏默认放顶部   >1320px放左侧
  header {
    margin-left: 10px;
    width: unset;
    position: fixed;
    left: 0;
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    nav {
      display: flex;
      flex-direction: column;
      width: 3rem;
      .nav-item {
        margin-bottom: 5px;
        padding: 1em 0.2em;
        //导航项的背景颜色
        background-color: var(--dark-nav-bg, #f1f2f3);
        //文字竖排列
        writing-mode: vertical-lr;
        &:hover {
          border-right: 3px solid #8661fc;
        }
      }
      .active {
        border-right: 3px solid #8661fc;
      }
    }
  }

  //switch按钮横或竖摆放
  .switch {
    transform: rotate(90deg) translate(40px);
    transform-origin: top;
  }
}
@media (max-width: 650px) {
  header {
    margin-top: 20px !important;
    nav {
      //文字竖排列
      .nav-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 10px;
        letter-spacing: 3px;
        writing-mode: vertical-lr;
      }
      .active {
        color: #8661fc !important;
      }
    }
    //switch按钮纵向居中
    .switch {
      display: flex;
      align-items: center;
    }
  }
}

//默认 header 在顶部
header {
  display: flex;
  justify-content: space-around;
  nav {
    width: 50%;
    display: flex;
    justify-content: space-between;
    .nav-item {
      line-height: 1;
      text-align: center;
      font-size: 2rem;
      text-decoration: none !important;
      color: var(--dark-nav-text, #7c7c7c);
      border-radius: 1em;
      letter-spacing: 3px;
      transition: background-size 0.3s ease-out;
    }
  }
  //按钮
  .switch {
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    input[type="checkbox"] {
      height: 0;
      width: 0;
      visibility: hidden;
    }

    label {
      cursor: pointer;
      text-indent: -9999px;
      width: 50px;
      height: 26px;
      background: grey;
      display: block;
      border-radius: 100px;
      position: relative;
    }

    label:after {
      content: "";
      position: absolute;
      top: 2px;
      left: 3px;
      width: 22px;
      height: 22px;
      background: #fff;
      border-radius: 22px;
      transition: 0.3s;
    }

    input:checked + label {
      background: #8661fc;
    }

    input:checked + label:after {
      left: calc(100% - 5px);
      transform: translateX(-100%);
    }

    label:active:after {
      width: 30px;
    }
  }
}
</style>