<template>
  <div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <hr>
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
    <hr>
    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>
    <hr/>
    <el-row>
      <el-button type="text">文件按钮</el-button>
      <el-button type="text" disabled>文字按钮</el-button>
    </el-row>
    <hr/>
    <el-row>
      <el-button type="primary" icon="el-icon-edit">编辑</el-button>
      <el-button type="success" icon="el-icon-share">共享</el-button>
      <el-button type="warning" icon="el-icon-delete">删除</el-button>
      <el-button type="danger" icon="el-icon-search">搜索</el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </el-row>
    <hr/>
    <el-row>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="success">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="warning" icon="el-icon-edit">编辑</el-button>
        <el-button type="danger" icon="el-icon-share">共享</el-button>
        <el-button type="success" icon="el-icon-delete">删除</el-button>
      </el-button-group>
    </el-row>
    <hr/>
    <el-row>
      <el-button type="primary" :loading="true">加载中</el-button>
    </el-row>
    <hr/>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小</el-button>
    </el-row>
    <el-row>
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button size="mini" round>超小</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "ButtonDemo"
  }
</script>

<style scoped>

</style>
