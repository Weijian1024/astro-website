<template>
  <div class="blog-list">
    <div class="type">
      <!-- 其他博客  -->
      <div class="blog-list-item" v-for="item in otherBlogs" :key="item.id">
        <div class="time">{{ item.time }}</div>
        <div class="info">
          <div class="title">
            <a :href="'/post/' + item.path + '?id=' + item.id">
              <h2>{{ item.title }}</h2></a
            >
          </div>
          <div class="describe">
            <a :href="'/post/' + item.path + '?id=' + item.id">
              {{ item.describe }}</a
            >
          </div>
          <div class="tag">
            <span>{{ item.tag }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="type">
      <!-- css博客 -->
      <CategoryBar id="css">CSS</CategoryBar>
      <div class="blog-list-item" v-for="item in cssBlogs" :key="item.id">
        <div class="time">{{ item.time }}</div>
        <div class="info">
          <div class="title">
            <a :href="'/post/' + item.path + '?id=' + item.id">
              <h2>{{ item.title }}</h2></a
            >
          </div>
          <div class="describe">
            <a :href="'/post/' + item.path + '?id=' + item.id">
              {{ item.describe }}</a
            >
          </div>
          <div class="tag">
            <span>{{ item.tag }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="type">
      <!-- js博客 -->
      <CategoryBar id="js">JavaScript</CategoryBar>
      <div class="blog-list-item" v-for="item in jsBlogs" :key="item.id">
        <div class="time">{{ item.time }}</div>
        <div class="info">
          <div class="title">
            <a :href="'/post/' + item.path + '?id=' + item.id">
              <h2>{{ item.title }}</h2></a
            >
          </div>
          <div class="describe">
            <a :href="'/post/' + item.path + '?id=' + item.id">
              {{ item.describe }}</a
            >
          </div>
          <div class="tag">
            <span>{{ item.tag }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="type">
      <!-- vue博客 -->
      <CategoryBar id="vue">Vue</CategoryBar>
      <div class="blog-list-item" v-for="item in vueBlogs" :key="item.id">
        <div class="time">{{ item.time }}</div>
        <div class="info">
          <div class="title">
            <a :href="'/post/' + item.path + '?id=' + item.id">
              <h2>{{ item.title }}</h2></a
            >
          </div>
          <div class="describe">
            <a :href="'/post/' + item.path + '?id=' + item.id">
              {{ item.describe }}</a
            >
          </div>
          <div class="tag">
            <span>{{ item.tag }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="type">
      <!-- react博客 -->
      <CategoryBar id="react">React</CategoryBar>
      <div class="blog-list-item" v-for="item in reactBlogs" :key="item.id">
        <div class="time">{{ item.time }}</div>
        <div class="info">
          <div class="title">
            <a :href="'/post/' + item.path + '?id=' + item.id">
              <h2>{{ item.title }}</h2></a
            >
          </div>
          <div class="describe">
            <a :href="'/post/' + item.path + '?id=' + item.id">
              {{ item.describe }}</a
            >
          </div>
          <div class="tag">
            <span>{{ item.tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import CategoryBar from "../components/CategoryBar.vue";
export default {
  data() {
    return {
      cssBlogs: [
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
          tag: "Css",
          time: "6 Feb 2022",
          title: "为伪元素添加点击事件pointer-event等.",
          describe: "Css是门玄学,这篇博客总结了我在开发过程中碰到的问题.",
          path: "switchDark",
        },
      ],
      jsBlogs: [
        // {
        //   id: "3",
        //   tag: "JavaScript",
        //   time: "6 Feb 2022",
        //   title: "title",
        //   describe:
        //     " In this CSS beginner tutorial,we'll be creating a hamburger menu.",
        //   path: "switchDark",
        // },
      ],
      vueBlogs: [
        // {
        //   id: "4",
        //   tag: "Vue",
        //   time: "6 Feb 2022",
        //   title: "title",
        //   describe:
        //     " In this CSS beginner tutorial,we'll be creating a hamburger menu.",
        //   path: "switchDark",
        // },
      ],
      reactBlogs: [],
      otherBlogs: [
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
  components: { CategoryBar },
  methods: {
    //从json文件夹中提前数据 并分类
    // async getBlogs() {
    //   await axios.get("../../public/json/blogs.json").then((res) => {
    //     let { data } = res;
    //     data.forEach((e) => {
    //       switch (e.tag) {
    //         case "Css":
    //           this.cssBlogs.push(e);
    //           break;
    //         case "JavaScript":
    //           this.jsBlogs.push(e);
    //           break;
    //         case "Vue":
    //           this.vueBlogs.push(e);
    //           break;
    //         case "other":
    //           this.otherBlogs.push(e);
    //           break;
    //         default:
    //           break;
    //       }
    //     });
    //   });
    //   //反转数组  让最新的出现在前面
    //   this.cssBlogs.reverse();
    //   this.jsBlogs.reverse();
    //   this.vueBlogs.reverse();
    //   this.otherBlogs.reverse();
    // },
    //跳转至博客页
    // gotoBlog() {
    //   history.push("/blog");
    // },
  },
  mounted() {
    // this.getBlogs();
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 1320px) {
  .blog-list {
    padding-block: 10rem !important;
    .blog-list-item {
      padding-block: 3rem !important;
      flex-direction: row !important;
      .time {
        font-size: 16px !important;
        width: 25%;
        padding-top: 10px;
      }
      .info {
        width: 75%;
        h2 {
          font-size: 22px !important;
          margin-top: 0 !important;
        }
        .describe {
          font-size: 16px;
        }
      }
    }
  }
}
.blog-list {
  color: var(--dark-bloglist-font, #373737);
  width: min(110ch, 90vw);
  margin-inline: auto;
  padding-block: 7rem;
  .type .blog-list-item:last-child {
    border: 0 !important;
  }
  .blog-list-item {
    border-bottom: 1px solid var(--dark-nav-bg, #ccc);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-block: 2rem;
    .time {
      font-size: 13px;
      color: #606060;
    }
    .info {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        h2 {
          margin: 15px 0;
        }
      }
      .tag {
        margin-top: 15px;
        span {
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 15px;
          background-color: var(--dark-nav-bg, #f1f2f3);
        }
      }
    }
  }
}
</style>