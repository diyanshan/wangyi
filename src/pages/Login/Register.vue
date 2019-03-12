<template>
  <LoginTemplate :loginInfo="loginInfo">
    <input class="password" slot="phone" placeholder="请输入您的手机号"/>
  </LoginTemplate>
</template>

<script>
  export default {
    data(){
      return{
        loginInfo: {
          type: 'phone', // 用于表示传入的是什么数据 1代表手机登录, 2代表密码登录, 3代表邮箱登录
          accountPlace: '请输入邮箱账号',
          pwdPlace: '请输入密码',
          leftInfo: '遇到问题?',
          rightInfo: '使用密码验证登录',
          login:'注册账号'
        }
      }
    },
    name: "Register"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
