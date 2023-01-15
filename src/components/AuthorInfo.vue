<template>
  <div class="info">
    <div class="title"><h1>嗨,I'm Winston</h1></div>
    <div class="introduce">
      <div class="img">
        <img src="../../public/images/headPortrait.jpg" alt="" />
      </div>
      <div class="text">
        <ul>
          <li>200X/XX/XX</li>
          <li>前端爱好者</li>
          <li>无工作经验有Apex经验</li>
        </ul>
      </div>
    </div>
    <div class="contact">
      <ul>
        <li><i class="iconfont icon-weixin"></i>_WeiJianZhong</li>
        <li><i class="iconfont icon-shouji"></i>147xxxx6766</li>
        <li>
          <i class="iconfont icon-24gl-mailboxEmpty"></i>z3349181728@163.com
        </li>
        <li><i class="iconfont icon-github-fill"></i>https://github.com/</li>
      </ul>
    </div>
    <div class="skill">
      <div class="title">
        <h1>Skill</h1>
      </div>
      <ul>
        <li>Vue.js</li>
        <li>Js</li>
        <li>Node</li>
      </ul>
    </div>
  </div>
</template>

<script>
import "../css/iconfont.css";
export default {};
</script>

<style lang="scss" scoped>
.info {
  color: var(--dark-bloglist-font, #535353);
  width: min(110ch, 90vw);
  margin-inline: auto;
  padding: 8rem 0 4rem 0;
  .title {
    h1 {
      font-size: 40px;
      margin-top: 10px;
      letter-spacing: 1px;
    }
  }
  .introduce {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    .img {
      width: 70px;
      height: 70px;
      border-radius: 50ch;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .text {
      ul {
        padding: 0;
        display: flex;
        flex-direction: column;
        li {
          font-size: 15px;
          text-align: center;
          letter-spacing: 0.5px;
          padding-top: 2px;
          font-weight: 600;
        }
      }
    }
  }
  .contact {
    margin-top: 50px;
    ul {
      padding: 0;
      li {
        margin-bottom: 20px;
        font-size: 20px;
        i {
          font-size: 25px;
          margin-right: 10px;
        }
      }
    }
  }
  .skill {
    margin-top: 70px;
    .title {
      h1 {
        font-size: 40px;
        margin-bottom: 15px;
      }
    }
    ul {
      li {
        list-style-type: disc;
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>