<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src='seller.avatar'>
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
            <span class="icon"></span>
            <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail()">
        <span>{{seller.supports.length}}个</span>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail()">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
    </div>
    <div class="background">
      <img width="100%" height="100%" :src='seller.avatar'>
    </div>
    <transition name="fade">
      <div class="detail" v-show="detailShow">
          <div class="detail-wrapper clearfix">
            <div class="detail-main">
              <h1 class="name">{{seller.name}}</h1>
              <div class="star-wrapper">
                <star :size="48" :score="seller.score"></star>
              </div>
              <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>
              <ul v-if="seller.supports" class="supports">
                <li class="supports-item" v-for="(item,index) in seller.supports" :key="index">
                  <span class="icon" ></span>
                  <span class="text">{{seller.supports[index].description}}</span>
                </li>
              </ul>
              <div class="title">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>
              <div v-if="seller.bulletin" class="bulletin">
                <p class="content">{{seller.bulletin}}</p>
              </div>
            </div>
          </div>
          <div class="detail-close" @click="hideDetail()">
            <i class="el-icon-close"></i>
          </div>
      </div>
    </transition> 
  </div>
</template>

<script>
import star from "./star"
export default {
  name: 'vHeader',
  
  props:{
    seller:{
      type:Object
    }
  },
  data () {
    return {
      detailShow:false,
    }
  },
  components:{
    star,
  },
  methods:{
    showDetail(){
        this.detailShow = true
    },
    hideDetail(){
      this.detailShow = false
    },
  }
}
</script>

<style lang="less">
.header{
  color:#fff;
  position: relative;
  background: rgba(7,17,27,.5);
  overflow: hidden;
  .content-wrapper{
    padding:24px 12px 18px 24px;
    font-size: 0;
    position: relative;
    .avatar{
      display: inline-block;
      img{
        border-radius: 8px;
      }
    }
    .content{
      display: inline-block;
      margin-left:16px;
      font-size: 14px;
      .title{
        margin:2px 0px 8px 0px;
        .brand{
          display: inline-block;
          width: 30px;
          height: 18px;
          background: #fcc;
          vertical-align: bottom;
        }
        .name{
          margin-left: 6px;
          font-size: 16px;
          color:#fff;
          font-weight: bold;
          line-height: 18px;
          display: inline-block;
        }
      }
      .description{
        font-size: 12px;
        font-weight: 100;
        line-height: 12px;
        color:#fff;
        margin-bottom: 12px;
      }
      .support{
        font-size: 12px;
        font-weight: 100;
        line-height: 12px;
        color:#fff;
      }
    }
    .support-count{
      position: absolute;
      right:12px;
      bottom:18px;
      padding:0px 8px;
      color:#fff;
      font-size:12px;
      line-height: 24px;
      height: 24px;
      background: rgba(0,0,0,.2);
      text-align: center;
      border-radius: 24px;
    }
  }
  .bulletin-wrapper{
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(0,0,0,.3);
    font-size: 14px;
    .bulletin-title{
      display: inline-block;
      width: 30px;
      height: 18px;
      line-height: 28px;
      background: #fcc;
      vertical-align: middle;
    }
  }
  .background{
    position: absolute;
    z-index: -1;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    filter: blur(10px)
  }
  .detail{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    overflow: auto;
    top: 0;
    left: 0;
    background: rgba(7,17,27,0.8);
    transition: all 0.5s;
    &.fade-enter, &.fade-leave-active{
        opacity: 0;
        background: rgba(7,17,27,0);
    }
        
    .detail-wrapper{
      min-height: 100%;
      width: 100%;
      .detail-main{
        margin-top: 64px;
        padding-bottom: 64px;
        .name{
          line-height: 16px;
          text-align: center;
          font-size: 16px;
          font-weight:700; 
        }
        .star-wrapper{
            margin-top: 18px;
            padding: 2px 0;
            text-align: center;
            .star-item{
              margin-right: 20px;
            }
        }
        .title{
          width: 80%;
          margin:30px auto 24px auto;
          display:flex;
          .line{
            flex: 1;
            position: relative;
            top:-6px;
            border-bottom: 1px solid rgba(255,255,255.2);
          }
          .text{
            padding:0 12px;
            font-size: 14px;
          }
        }
        .supports{
          margin: 0 auto;
          width: 80%;
          .supports-item{
            padding: 0 12px;
            margin-bottom: 12px;
            font-size: 0;
            &:last-child{
              margin-bottom: 0;
            }
            .text{
              font-size: 12px;
              line-height: 16px;
              font-weight: 200;
            }
          }
        }
        .bulletin{
          width: 80%;
          margin: 0 auto;
          .content{
            margin-bottom: 16px;
            padding: 0 12px;
            line-height: 24px;
            font-size: 12px;  
          }
        }
      }
    }
    .detail-close{
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      clear: both;
      font-size: 32px;
      i{
        width: 32px;
        height: 32px;
        display: block;
      }
    }
  }
}
</style>
