<!-- 短信验证登录 -->

<template>
  <div>
    <!-- 短信验证码登录 -->
    <LoginTemplate :loginInfo="loginInfo">
      <div class="getCode" slot="getCode">获取验证码</div>
      <div class="register" slot="register" @click="$router.push(`/login/register`)">注册账号></div>
    </LoginTemplate>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          loginInfo:{
            type:'email',
            accountPlace:'请输入手机号',
            pwdPlace:'请输入验证码',
            leftInfo:'遇到问题?',
            rightInfo:'使用其他密码验证登录',
            login:'登录'
          }
        }

      },
      name: "Phone",

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .getCode
    position absolute
    right 0
    top 20px
    font-size .36rem
    width: 2.3rem;
    height: 0.75rem;
    text-align: center;
    color: #333;
    background: #fff;
    line-height: 0.75rem;
    border: 1px solid #333;
    border-radius: 10px;

  .register
    font-size: .37333rem;
    line-height: .53333rem;
    color: #333;
</style>
