<template>
  <div class="vue-video-player">
    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ready="playerReadied"
    >
    </video-player>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'

export default {
  components: {
    videoPlayer,
  },
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      playerOptions: {
        autoplay: false, //如果true,浏览器准备好时开始播放
        sources: [
          {
            withCredentials: false,
            type: 'application/x-mpegURL',
            src: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
          }
        ],
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
        },
        flash: {
          hls: {
            withCredentials: false,
          },
        },
        html5: {
          hls: {
            withCredentials: false,
          },
        },
        poster: '',
      },
    }
  },
  watch: {
    url(val) {
      this.playerOptions.sources[0].src = val
    },
  },
  methods: {
    onPlayerPlay() {
      console.log('player')
    },
    onPlayerPause() {
      console.log('Pause')
    },
    playerReadied(player) {
      var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
      player.tech_.hls.xhr.beforeRequest = function (options) {
        return options
      }
    },
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
  },
  beforeDestroy() {
    this.$refs.videoPlayer.dispose()
  },
}
</script>

<style lang="scss">
.vue-video-player {
  width: 100%;
  height: 100%;
  background-color: #efefef;
  .video-player {
    width: 100%;
    height: 100%;
  }
}
.video-js {
  height: 100%;
}
</style>
