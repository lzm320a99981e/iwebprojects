<template>
  <div class="page">
    <div class="login-box">
      <el-form :model="model" :rules="rules"
               ref="loginForm" label-position="left" label-width="0px"
               class="login-container" status-icon>

        <h3 class="title">系统登录</h3>

        <el-form-item prop="username">
          <el-input type="text" v-model="model.username" placeholder="用户名/邮箱/手机号码"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input type="password" v-model="model.password" placeholder="密码" show-password></el-input>
          <router-link to="/" style="float: right; color: #bbbbbb">忘记密码？</router-link>
        </el-form-item>

        <el-form-item style="width: 100%">
          <el-button type="primary" style="width: 100%;" @click.native.prevent="handleSubmit" :loading="loading">
            登录
          </el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        loading: false,
        model: {
          username: 'admin',
          password: 'admin'
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        checked: false
      }
    },
    methods: {
      handleSubmit(event) {
        this.$refs.loginForm.validate(
          valid => {
            if (valid) {
              this.loading = true
            }
          }
        )
      }
    }
  }
</script>

<style scoped>
  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .page {
    background-color: #eff3f4;
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: block;
    width: 100%;
    max-width: 400px;
    background-color: #FFF;
    margin: 0;
    padding: 2.25em;
    box-sizing: border-box;
    border: solid 1px #DDD;
    border-radius: .5em;
    font-family: 'Source Sans Pro', sans-serif;
  }

</style>
