<template>
  <div class="home">
    <div class="container">
      <!-- 顶部导航栏 -->
      <div class="container-header">
        <navbar />
      </div>
      <!-- 内容显示区 路由跳转 -->
      <div class="container-router">
        <transition name="slide-fade">
          <!-- 地图页需要缓存 -->
          <keep-alive include="a-map">
            <router-view />
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'

export default {
  name: 'home',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
.home {
  height: 100vh;
  width: 100%;
  background-size: 100% 100%;
  .container-header {
    height: 60px;
  }
  .container-router {
    height: calc(100vh - 60px);
    overflow: hidden;
  }
}
</style>
