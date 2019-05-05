<template>
  <el-row>
    <el-col :span="12">
      <h5>默认颜色</h5>
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">

          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>

          <el-menu-item-group>
            <template slot="title">分组1</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>

          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>

        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "NavMenu",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>

</style>
