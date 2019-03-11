<template>
  <div>
    <div class="scroll-wrapper" v-if="categoryL2">
      <div class="scroll">
        <div class="banner">
          <img v-lazy="categoryL2.bannerUrl" :key='categoryL2.bannerUrl' alt="">
        </div>
        <div class="cateList">
          <ul class="list">
            <li class="item" v-for="(subCate, index) in categoryL2.subCateList" :key="index">
              <div class="img-wrapper">
                <img v-lazy="subCate.wapBannerUrl" :key='subCate.wapBannerUrl' alt="">
              </div>
              <div class="name">{{subCate.name}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import cateList from '../../mock/cateList.json'
  import BScroll from 'better-scroll'
    export default {

      mounted(){
      },
      // beforeUpdate(){
      //   const data =  cateList.find((item) => item.id === this.$route.query.categoryId*1)
      //   console.log(data.subCateList,'subCateList',this.$route.query.categoryId)
      // },
      computed: {
        categoryL2() {
            if (cateList) {
              const result =  cateList.find((item) => item.id === this.$route.query.categoryId*1)
              if (!result)  {
                return cateList[0]
              } else {
                // 初次显示
                return result
              }
            }
        }

      },
      watch:{
        categoryL2(){
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll('.scroll-wrapper', {
                probeType : 2,
                click: true,
                bounceTime: 800
              })
              console.log(this.scroll,'this.scroll')
            } else {
              this.scroll.refresh();
            }
          })
        }
      },
      name: "CateList"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .scroll-wrapper
    height 15rem
    .banner
      img
        position: relative;
        width: 100%;
        height: 2.56rem;
        display: table;
        margin-bottom: .42667rem;
        background: center no-repeat #f4f4f4;
        background-size: cover;
        border-radius: 4px;

    .cateList
      margin-bottom: 0;

      .list
        .item
          display: inline-block;
          margin-right: .42333rem;
          font-size: 0;
          width: 1.92rem;
          vertical-align: top;

          .img-wrapper
            width: 1.92rem;
            height: 1.92rem;

            img
              display: block;
              width: 100%;
              background: #fff;
              height: 100%;

          .name
            height: .96rem;
            font-size: .32rem;
            text-align: center;
            line-height: .48rem;
            display: block;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
</style>
