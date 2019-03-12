<template>
  <footer id="footer-wrap" v-show="!$route.meta.isShow">
    <ul class="footer">
      <li class="item" :class="{active: $route.path === '/'}" @click="goTo('/')">
        <i class="u-icon" :class="$route.path === '/' ? 'u-icon-tabBar-index-active' : 'u-icon-tabBar-index'"></i>
        <span class="text">首页</span>
      </li>
      <li class="item" :class="{active: $route.path.includes('/cate')}" @click="goTo('/cate')">
        <i class="u-icon" :class="$route.path.includes('/cate') ? 'u-icon-tabBar-cate-active' : 'u-icon-tabBar-cate'"></i>
        <span class="text">分类</span>
      </li>
      <li class="item" :class="{active: $route.path.includes('/topic')}" @click="goTo('/topic')">
        <i class="u-icon" :class="$route.path.includes('/topic') ? 'u-icon-tabBar-topic-active' : 'u-icon-tabBar-topic'"></i>
        <span class="text">识物</span>
      </li>
      <li class="item" :class="{active: $route.path === '/cart'}" @click="goTo('/cart')">
        <i class="u-icon" :class="$route.path === '/cart' ? 'u-icon-tabBar-cart-active' : 'u-icon-tabBar-cart'"></i>
        <span class="text">购物车</span>
      </li>
      <li class="item" @click="$router.replace('/login')">
        <i class="u-icon u-icon-tabBar-ucenter"></i>
        <span class="text">个人</span>
      </li>
    </ul>
  </footer>
</template>

<script>
    export default {
      methods: {
        /**
         *  跳转路由
         */
        goTo (path) {
          this.$router.replace(path)
        }
      },
        name: "FooterGuide"

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  /*底部导航*/
  #footer-wrap
    position fixed
    left 0
    bottom: 0
    width 100%
    height: 97px
    background-color: #fafafa
    border-top: 1px solid #d9d9d9
    z-index 200
    .footer
      width 100%
      height: 100%
      display flex
      line-height 100%
      .item
        flex 1
        text-align center
        &.active
          color #b4282d
        .u-icon
          display inline-block
          margin-bottom 30px
          width 40px
          height 40px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png")
          background-repeat no-repeat
          background-size .53333rem 6.53333rem

        .u-icon-tabBar-index
          background-position: 0 -3.33333rem

        .u-icon-tabBar-index-active
          background-position: 0 -2.66667rem

        .u-icon-tabBar-cate
          background-position: 0 -2rem

        .u-icon-tabBar-cate-active
          background-position: 0 -1.33333rem

        .u-icon-tabBar-topic
          background-position: 0 -4.66667rem

        .u-icon-tabBar-topic-active
          background-position: 0 -4rem

        .u-icon-tabBar-cart
          background-position: 0 -.66667rem

        .u-icon-tabBar-cart-active
          background-position: 0 0

        .u-icon-tabBar-ucenter
          background-position: 0 -6rem

        .text
          display block
          font-size .32rem
          margin-top -10px
</style>
