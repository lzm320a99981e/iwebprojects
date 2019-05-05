<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>
          <navmenu></navmenu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import NavMenu from '~/components/NavMenu'

  export default {
    name: 'app',
    components: {
      'navmenu': NavMenu
    }
  }
</script>

<style>
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
</style>
