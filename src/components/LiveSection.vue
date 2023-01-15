<template>
  <div class="section">
    <!-- 一行 -->
    <div class="row">
      <div class="item fireworks">
        <div class="img">
          <img src="../../public/images/p11.png" alt="" />
        </div>
        <div class="info">
          <div class="title">跨年</div>
          <div class="location">玉林</div>
        </div>
      </div>
      <div class="item travelCard">
        <div class="img">
          <img src="../../public/images/p10.png" alt="" />
        </div>
        <div class="info">
          <div class="title">行程卡</div>
          <div class="location">佛山</div>
        </div>
      </div>
      <div class="item seeSnow">
        <div class="img">
          <img src="../../public/images/p9.png" alt="" />
        </div>
        <div class="info">
          <div class="title">好冷</div>
          <div class="location">十堰</div>
        </div>
      </div>
    </div>
    <!-- 二行 -->
    <div class="row">
      <div class="item birthday">
        <div class="img">
          <img src="../../public/images/p8.png" alt="" />
        </div>
        <div class="info">
          <div class="title">生日快乐</div>
          <div class="location">十堰</div>
        </div>
      </div>
      <div class="item easyGame">
        <div class="img">
          <img src="../../public/images/p12.png" alt="" />
        </div>
        <div class="info">
          <div class="title">真用脚打的</div>
          <div class="location">玉林</div>
        </div>
      </div>
    </div>
    <!-- 3行 -->
    <div class="row">
      <div class="item earnMoney">
        <div class="img">
          <img src="../../public/images/p6.png" alt="" />
        </div>
        <div class="info">
          <div class="title">攒钱买房</div>
          <div class="location">佛山</div>
        </div>
      </div>
      <div class="item freeMovie">
        <div class="img">
          <img src="../../public/images/p7.png" alt="" />
        </div>
        <div class="info">
          <div class="title">我谢谢你</div>
          <div class="location">十堰</div>
        </div>
      </div>
      <div class="item firstBall">
        <div class="img">
          <img src="../../public/images/p4.png" alt="" />
        </div>
        <div class="info">
          <div class="title">第一个学期的踢皮球</div>
          <div class="location">十堰</div>
        </div>
      </div>
    </div>
    <!-- 4行 -->
    <div class="row">
      <div class="item luxun">
        <div class="img">
          <img src="../../public/images/p5.png" alt="" />
        </div>
        <div class="info">
          <div class="title">过去的日子如轻烟</div>
          <div class="location">玉林</div>
        </div>
      </div>
      <div class="item bigBuilding">
        <div class="img">
          <img src="../../public/images/p1.png" alt="" />
        </div>
        <div class="info">
          <div class="title">宿舍什么时候般进去</div>
          <div class="location">十堰</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media (min-width: 1320px) {
  .section {
    padding: 10rem 11rem !important;
    .row {
      width: 100%;
      display: flex;
      flex-direction: row !important;
      justify-content: space-between;
      margin-bottom: 50px;
      .item {
        .info {
          margin-top: 10px !important;
          .title {
            font-size: 22px !important;
          }
          .location {
            font-size: 15px !important;
          }
        }
      }
      .fireworks {
        width: 45% !important;
      }
      .travelCard {
        width: 22% !important;
      }
      .seeSnow {
        width: 26% !important;
      }
      .birthday {
        width: 28% !important;
      }
      .easyGame {
        width: 67% !important;
      }
      .earnMoney {
        width: 29% !important;
      }
      .freeMovie {
        width: 33% !important;
      }
      .firstBall {
        width: 29% !important;
      }
      .luxun {
        width: 49% !important;
      }
      .bigBuilding {
        width: 47% !important;
      }
    }
  }
}
.section {
  padding: 3rem 1rem;
  .row {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .item {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin-bottom: 25px;
      .img {
        filter: grayscale(0.8);
      }
      .info {
        margin-top: 5px;
        text-align: right;
        color: var(---dark-bloglist-font, #6f6f6f);
        .title {
          font-size: 18px;
        }
        .location {
          font-size: 11px;
        }
      }
    }
    img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
    }
  }
}
</style>