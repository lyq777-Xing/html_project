<template>
  <div>
    <!-- 页头 -->
    <el-menu ref="menu" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
      @select="handleSelect">
      <el-menu-item>
        <img style="width: 100px" src="https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/logo-2.png" alt="logo" />
      </el-menu-item>
      <div class="flex-grow"></div>
      <el-menu-item index="index">主页</el-menu-item>
      <el-menu-item index="shop">商城</el-menu-item>
      <el-menu-item index="login">登录</el-menu-item>
      <el-menu-item index="register">注册</el-menu-item>
      <el-menu-item index="aboout">关于我们</el-menu-item>
    </el-menu>
    <!-- 轮播 -->
    <el-carousel style="margin-top: 30px;" :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in barList" :key="item.key">
        <img :src=item.url alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 回到顶部按钮 -->
    <el-backtop :right="100" :bottom="100" />
    <!-- 中间部分 -->
    <div style="text-align: center;margin-top: 100px;">
      <div>
        <span style="font-size: 60px;font-weight: 700;color: rgb(65, 192, 150);">家居商城</span>
      </div>
      <div style="margin-top: 30px;">
        <span style="font-size: 35px;">舒适的家具，让我们的生活更加温馨惬意。</span>
      </div>
      <div style="margin-top: 30px;">
        <span style="font-size: 35px;">精美的家具，为我们的家居增添了独特的韵味。</span>
      </div>
      <div style="margin-top: 80px;">
        <img src="https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/index%2Fcenter-1.png" alt="">
      </div>
      <div style="margin-top: 150px;">
        <span style="font-size: 50px;font-weight: 600;text-decoration: underline;">以匠心，致生活</span>
      </div>
      <div style="margin-top: 30px;">
        <span style="font-size: 35px;">家具，是家的灵魂。用心选择，为爱居家。</span>
      </div>
      <div style="margin-top: 150px;display: flex;justify-content: center;align-items: center;">
        <img src="https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/index%2Findex_footer.png" alt="" style="margin: 0 auto;width: 1000px;height: 500px;">
      </div>
      <div style="width: 100%;height: 900px;margin-top: 70px;">
        <div style="width: 100%;">
          <span style="font-size: 40px;font-weight: 600;">从混乱到平静</span><br><br>
          <span style="font-size: 25px;font-weight: 500;">让小孩子参与整理并不是一件容易的事，但家具的一点帮助有助于加快工作进度。</span>
        </div>
        <div style="width: 100%;height: 100%;margin: auto;margin-top: 70px;">
            <img src="https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/index%2Fcenter-2.jpg" alt="" style="width: auto;height:700px;">
            <img src="https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/index%2Fcenter-3.jpg" alt="" style="width: auto;height:700px;margin-left: 20px;">
        </div>
      </div>
    </div>
    <!-- 统计组件 -->
    <div style="width: 70%;margin: auto;margin-top: 30px;">
      <el-row :gutter="16">
        <el-col :span="8">
          <div class="statistic-card" style="background-color: rgb(218, 246, 237);">
            <el-statistic :value="98500">
              <template #title>
                <div style="display: inline-flex; align-items: center;">
                  回购次数
                  <el-tooltip effect="dark" content="Repurchase frequency" placement="top">
                    <el-icon style="margin-left: 4px" :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>
            <div class="statistic-footer">
              <div class="footer-item">
                <span>than yesterday</span>
                <span class="green">
                  24%
                  <el-icon>
                    <CaretTop />
                  </el-icon>
                </span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="statistic-card" style="background-color: rgb(237, 243, 211);">
            <el-statistic :value="693700">
              <template #title>
                <div style="display: inline-flex; align-items: center;">
                  总销量
                  <el-tooltip effect="dark" content="total sales" placement="top">
                    <el-icon style="margin-left: 4px" :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>
            <div class="statistic-footer">
              <div class="footer-item">
                <span>month on month</span>
                <span class="red">
                  12%
                  <el-icon>
                    <CaretBottom />
                  </el-icon>
                </span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="statistic-card" style="background-color: rgb(211, 235, 238);">
            <el-statistic :value="72000" title="Number of positive reviews">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  好评人数
                </div>
              </template>
            </el-statistic>
            <div class="statistic-footer">
              <div class="footer-item">
                <span>than yesterday</span>
                <span class="green">
                  16%
                  <el-icon>
                    <CaretTop />
                  </el-icon>
                </span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 页脚部分 -->
    <el-footer style="background-color: rgb(231, 231, 231);margin-top: 70px;text-align: center;line-height: 60px;">
      <span style="color: inherit;">制作人：lyq</span>
    </el-footer>
    <!-- 粒子效果 -->
    <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" :options="{
      background: {
        color: {
          value: '#F6F6EF'
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#88989C'
        },
        links: {
          color: '#88989C',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'bounce',
          random: false,
          speed: 6,
          straight: false
        },
        number: {
          density: {
            enable: true,
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 5 }
        }
      },
      detectRetina: true
    }" />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { ref, onMounted, onUnmounted } from "vue";
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'

// const menu = ref();
// onMounted(() => {
//   // menu.value
//   console.log("mounted");
// });
// onUnmounted(() => {
//   console.log("unmounted");
// });

// 页头导航栏
const activeIndex = ref("index");

// 选择不同的导航栏，跳转到不同的页面
function handleSelect(key: string, keyPath: Array<string>) {
  console.log(key, keyPath);
  router.push({
    path: `/${key}`,
  });

};

// 轮播图的图片列表
const barList = [
  {
    url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/index%2Fbar-1.png",
    key: 1,
  },
  {
    url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/index%2Fbar-2.png",
    key: 2,
  },
  {
    url: "https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/index%2Fbar-3.png",
    key: 3,
  },
];

// 粒子效果
const particlesLoaded = async (container: any) => {
  console.log("Particles container loaded", container);
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

#tsparticles {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -8;
}

:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}

.red {
  color: var(--el-color-error);
}
</style>
