<template>
  <div id="app">
    <!--<ContainerDemo/>-->
    <ButtonDemo/>
  </div>
</template>

<script>
  import ContainerDemo from '~/components/ContainerDemo'
  import ButtonDemo from '~/components/ButtonDemo'

  export default {
    name: 'app',
    components: {
      'ContainerDemo': ContainerDemo,
      'ButtonDemo': ButtonDemo
    }
  }
</script>

<style>
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
