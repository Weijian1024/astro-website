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
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      info: {},
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
      return null;
    },
    //发起请求
    async getMd() {
      await axios.get("../../public/json/blogs.json").then((res) => {
        let { data } = res;
        this.info = data.filter((i) => i.id == this.id)[0];
      });
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