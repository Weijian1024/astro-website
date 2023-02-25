<template>
  <div class="blogTitle">
    <div class="tag">
      <span>{{ info.tag }}</span>
    </div>
    <div class="title">
      <h1>{{ info.title }}</h1>
    </div>
    <div class="author">
      <div class="img">
        <img src="../../public/images/headPortrait.jpg" alt="" />
      </div>
      <div class="info">
        <div class="name">Winston Zhong</div>
        <div class="time">{{ info.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      info: {},
      blogs: [
        {
          id: "2",
          tag: "Css",
          time: "31 Jan 2023",
          title: "HTML CSS JavaScript实现明暗模式切换",
          describe:
            "如何利用Css JavaScript实现网站的明暗模式切换,会使用到css自定义属性.",
          path: "switchDark",
        },
        {
          id: "3",
          tag: "JavaScript",
          time: "25 Feb 2023",
          title: "简易实现JavaScript原生拖拽功能",
          describe: "主要使用到了dragover与dragleave这两个事件.",
          path: "dragEvent",
        },
        {
          id: 1,
          tag: "other",
          time: "20 Jan 2023",
          title: "我的第一篇博客",
          describe: "主要介绍Astro框架的使用和如何利用Netlify部署项目.",
          path: "firstBlog",
        },
      ],
    };
  },
  methods: {
    //获取参数 拿到文章的id
    getUrlParam(name) {
      //构造一个含有目标参数的正则表达式对象
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      //匹配目标参数
      var r = window.location.search.substr(1).match(reg);
      //返回参数值
      if (r != null) {
        return decodeURI(r[2]);
      }
      return 0;
    },
    //发起请求
    getMd() {
      this.info = this.blogs.filter((i) => i.id == this.id)[0];
    },
  },
  mounted() {
    this.id = this.getUrlParam("id");
    this.getMd();
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 640px) {
  .blogTitle {
    padding-block: 5rem !important;
    padding: 8rem 0 2rem 0 !important;

    .img {
      width: 40px !important;
      height: 40px !important;
    }
  }
}
.blogTitle {
  color: var(--dark-bloglist-font, #373737);
  width: min(110ch, 90vw);
  margin-inline: auto;
  padding: 8rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .tag {
    margin: 10px 0;
    span {
      color: var(--dark-bloglist-font, #373737);
      font-weight: 600;
      padding: 5px 12px;
      border-radius: 15px;
      background-color: var(--dark-nav-bg, #f1f2f3);
      letter-spacing: 0.7px;
    }
  }
  .title {
    h1 {
      font-size: 30px;
    }
  }
  .author {
    display: flex;

    .img {
      width: 46px;
      height: 46px;
      border-radius: 50ch;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .info {
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .name {
        letter-spacing: 0.4px;
        padding-top: 2px;
        font-size: 14px;
        font-weight: 600;
      }
      .time {
        font-size: 14px;
        color: var(--dark-blog-title-time, #646f82);
      }
    }
  }
}
</style>