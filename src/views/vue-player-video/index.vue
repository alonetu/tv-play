<template>
  <div class="vue-player-video">
    <vue-player-video :url="activeUrl" />
    <sidebar 
      :menuList="menuList"
      @playVideo="playVideo"
    />
  </div>
</template>

<script>
import VuePlayerVideo from '@/components/vue-player-video'
import Sidebar from '@/components/sidebar'
import { menuList } from './data'

export default {
  components: {
    VuePlayerVideo,
    Sidebar
  },
  data() {
    return {
      menuList,
      activeUrl: ''
    }
  },
  methods: {
    playVideo(url) {
      this.activeUrl = url
    }
  }
}
</script>

<style lang="scss">
.vue-player-video {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
