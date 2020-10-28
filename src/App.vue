<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  font-size: 18px;
  background-color: #2d3436;
  font-family: "HelveticaNeue", Helvetica, "PingFangSC", "HiraginoSansGB",
    "MicrosoftYaHei", "微软雅黑", Arial, sans-serif;
}
</style>
