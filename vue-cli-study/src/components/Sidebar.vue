<template>
  <div class="sidebar">
    <!-- 菜单组件 -->
    <!--
    router (boolean) : 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
    collapse (boolean) : 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
    -->
    <el-menu class="sidebar-el-menu" :collapse="collapse" :default-active="currentRoute" router unique-opened>
      <!-- 渲染菜单 -->
      <template v-for="item in menus">
        <!-- 子菜单 -->
        <template v-if="item.children">
          <el-submenu :index="item.index" :key="item.index">
            <!-- 一级(含子菜单) -->
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{item.title}}</span>
            </template>
            <template v-for="child in item.children">
              <!-- 二级(含子菜单) -->
              <el-submenu v-if="child.children">
                <template slot="title">{{child.title}}</template>
                <el-menu-item v-for="(child2,i) in child.children" :key="i" :index="child2.index">
                  {{child2.title}}
                </el-menu-item>
              </el-submenu>
              <!-- 二级 -->
              <el-menu-item v-else :index="child.index" :key="child.index">
                {{child.title}}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 一级 -->
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  // el-icon-s-grid el-icon-s-data el-icon-s-order el-icon-s-platform
  export default {
    name: "Sidebar",
    data() {
      return {
        collapse: false,
        menus: [
          {
            index: 'dashboard',
            title: '系统首页',
            icon: 'el-icon-s-home'
          },
          {
            index: 'table',
            title: '基础表格',
            icon: 'el-icon-s-grid'
          },
          {
            index: 'multi-menus',
            title: '多级菜单',
            icon: 'el-icon-menu',
            children: [
              {
                index: '1-1',
                title: '二级菜单-1',
                icon: 'el-icon-menu'
              },
              {
                index: '1-2',
                title: '二级菜单-2',
                icon: 'el-icon-menu',
                children: [
                  {
                    index: '1-2-1',
                    title: '三级菜单-1',
                    icon: 'el-icon-menu',
                  },
                  {
                    index: '1-2-2',
                    title: '三级菜单-2',
                    icon: 'el-icon-menu',
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    /**
     * 计算属性：加载完页面后立即执行，相关变量花生改变时会立即执行，否则就获取上次计算的值
     */
    computed: {
      currentRoute() {
        return this.$route.path.replace('/', '');
      }
    }
  }
</script>


<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
  }

  .sidebar::-webkit-scrollbar {
    width: 0;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }

  .sidebar > ul {
    height: 100%;
  }
</style>
