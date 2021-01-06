<template>
  <div class="home">
    <!-- 内容显示区 路由跳转 -->
    <div class="container-router">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
.home {
  height: 100vh;
  width: 100%;
  background-size: 100% 100%;
  .container-router {
    height: 100vh;
    overflow: hidden;
  }
}
</style>
