<template>
  <div class="navbar">
    <span class="menu-text">电视直播</span>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss">
.navbar {
  width: 100%;
  height: 100%;
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
