<template>
  <div class="hello">
    <el-button @click="reg">按钮</el-button>
    <h1>{{ msg }} -> {{username}}</h1>
  </div>
</template>

<script>
  import api from '@/api'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '起步',
        username: ''
      }
    },
    methods: {
      reg() {
        api.reg({username: 'xxx'}).then(res => {
          this.username = res.data.username;
          this.$message(JSON.stringify(res.data))
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
