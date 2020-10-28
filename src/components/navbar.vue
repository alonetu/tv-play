<template>
  <div class="navbar">
    <span class="menu-text">电视直播平台</span>
    <el-menu
      class="navbar-menu"
      mode="horizontal"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="activeIndex"
      router
    >
      <el-menu-item 
        v-for="item in navMenu" 
        :key="item.path" 
        :index="item.path"
      >
        {{ item.label }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      activeIndex: '/vue-player-video',
      navMenu: [
        {
          path: '/vue-player-video',
          label: 'CCTV-6'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.navbar {
  width: 100%;
  height: 100%;
  .navbar-menu {
    display: flex;
    justify-content: flex-end;
    border: none;
  }
  .menu-text {
    height: 60px;
    line-height: 60px;
    position: absolute;
    left: 0;
    color: #fff;
    font-size: 25px;
    z-index: 9;
    margin-left: 1%;
  }
  .el-submenu__title {
    font-size: 20px;
  }
}
</style>
