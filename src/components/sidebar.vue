<template>
  <div :style="{ width, height }" style="padding: 8px 0;">
    <el-input 
      v-model="keyword" 
      placeholder="请输入关键字查询" 
      @keyup.enter.native="searchSidebar"
    >
      <i slot="suffix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-menu
      class="common-sidebar"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="curIndex"
    >
      <template v-for="menu in menuSide">
        <el-submenu
          v-if="menu.children && menu.children.length !== 0"
          :index="menu.url"
          :key="menu.id"
        >
          <template slot="title">
            <span slot="title" style="font-size: 18px" v-html="getMenuName(menu.name)"></span>
          </template>
          <el-menu-item
            v-for="childMenu in menu.children"
            :key="childMenu.id"
            :index="childMenu.url"
            @click="activePage(childMenu)"
          >
            <span slot="title" style="font-size: 18px" v-html="getMenuName(childMenu.name)"></span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item 
          v-else 
          :index="menu.url" 
          :key="menu.id" 
          @click="activePage(menu)"
        >
          <span slot="title" style="font-size: 18px" v-html="getMenuName(menu.name)"></span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array,
    },
    width: {
      type: String,
      default: '20%',
    },
    height: {
      type: String,
      default: '100%',
    }
  },
  data() {
    return {
      curIndex: '',
      keyword: '',
      menuSide: [],
    }
  },
  mounted() {
    this.menuSide = this.menuList
    this.curIndex = this.menuList[0].url
  },
  methods: {
    // 点击侧边栏
    activePage(node) {
      this.$emit('playVideo', node.url)
    },
    // 处理侧边栏搜索
    searchSidebar() {
      if (!this.keyword) {
        this.menuSide = this.menuList
      }
      let keyArr = []
      this.menuList.forEach(item => {
        if (item.name.indexOf(this.keyword) !== -1) {
          keyArr.push(item)
        }
      })
      this.menuSide = keyArr
    },
    // 搜索高亮
    getMenuName(name = '') {
      return name.replace(this.keyword, `<span style="color: red;">${ this.keyword }</span>`)
    }
  },
}
</script>

<style lang="scss">
.common-sidebar {
  overflow: auto;
  border: none;
}
.el-input__inner {
  background-color: #2d3436;
  color: #fff;
}
</style>
