<!--
  识物: style: 0
  Home推荐
-->
<template>
  <div class="homeShow-wrapper">
    <div class="title">{{topic.title}}</div>
    
    <div class="banner">
      <img class="banner-img" v-lazy="topic.picUrl" alt="">
    </div>
    
    <div class="info">
      <div class="seeNum">
        <i class="iconfont icon-kanguo"></i>
        <span>{{readCount}}人看过</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeShow",
    props: {
      topic: Object
    },
    computed: {
      readCount () {
        // 将拿到的数字转为字符串
        const {readCount} = this.topic;
        let readCountStr = readCount.toString();
        if (readCountStr.length <= 4) {
          return readCountStr
        } else if (readCountStr.length === 5) {
          return (readCount/1000).toString().slice(0,4) + 'k'
        } else {
          return (readCount/10000).toString().split('.')[0] + 'w'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeShow-wrapper
    width: 100%
    padding: .36rem .34rem;
    box-sizing border-box
    .header
      margin-bottom: .54rem;
      font-size: .38rem;
      color: #333;
      height: .38rem;
      line-height: .38rem;
      .header-logo
        width: .56rem;
        height: .56rem;
        overflow: hidden;
        display inline-block
        border-radius: 50%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: .01rem solid #d9d9d9;
        margin-right: .12rem;
        .header-logo-img
          width: 100%;
          height: 100%;
      .header-author
        display: inline-block;
        vertical-align super
    
    
    .title
      font-size: .48rem;
      color: #333;
      line-height: .62rem;
      margin: -.08rem 0 .16rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    .banner
      width 100%
      position: relative;
      margin-bottom: .2rem;
      overflow: hidden;
      border-radius: .08rem;
      .banner-img
        display block
        width: 100%
        height: 100%
    .info
      font-size: .22rem;
      color: #999;
      line-height: .32rem;
      margin-top: .18rem;
      .seeNum
        .iconfont
          font-size .38rem
          margin-right .1rem
          vertical-align middle
        span
          display: inline-block;
          vertical-align: middle;
          font-size: .36rem
</style>

