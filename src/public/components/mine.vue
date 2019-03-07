<template>
<div class="mineWrapper" ref="mine">
  <div class="mine">
    <div class="mine-bg">
      <div class="mineuser">
        <img src="../../assets/userpic.jpg">
        <p>VIP</p>
      </div>
      <div class="minenav">
        <ul>
          <li>
            <a>
              <p class="count">{{djq}}</p>
              <p>代金券</p>
            </a>
          </li>
          <li>
            <a>
              <p class="count">{{scdp}}</p>
              <p>收藏店铺</p>
            </a>
          </li>
          <li>
            <a>
              <p class="count">{{ye}}</p>
              <p>余额</p>
            </a>
          </li>
          <li>
            <a>
              <p class="count">{{jf}}</p>
              <p>积分</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="grid-nav">
        <ul>
          <li>
            <a>
              <img src="../../assets/mypage_vip.png">
              <p>配送会员卡</p>
            </a>
          </li>
          <li>
            <a>
              <img src="../../assets/mypage_credit.png">
              <p>余额充值</p>
            </a>
          </li>
          <li>
            <a>
              <img src="../../assets/mypage_token.png">
              <p>我的代金券</p>
            </a>
          </li>
          <li>
            <a>
              <img src="../../assets/mypage_location.png">
              <p>我的地址</p>
            </a>
          </li>
          <li>
            <a>
              <img src="../../assets/mypage_star.png">
              <p>我的收藏</p>
            </a>
          </li>
          <li>
            <a>
              <img src="../../assets/mypage_comment.png">
              <p>我的评价</p>
            </a>
          </li>
          <li>
            <a>
              <img src="../../assets/mypage_problem.png">
              <p>常见问题</p>
            </a>
          </li>
        </ul>
    </div>
    <div class="service-tel"><a>客服热线: 134****7861</a></div>
  </div>
</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import BScroll from "better-scroll"

export default {
  name: 'mine',
  components:{
  },
  data () {
    return {
     
    }
  },
  created(){
    this._mineScroll()
  },
  computed: {
    djq() {
      return this.$store.state.djq
    },
    scdp() {
      return this.$store.state.scdp
    },
    ye() {
      return this.$store.state.ye 
    },
    jf() {
      return this.$store.state.jf
    },
  },
  methods:{
      _mineScroll(){
        this.$nextTick(()=>{
            this.minescroll = new BScroll(this.$refs.mine,{
              click:true
            })
        })
      }
  }
}
</script>

<style lang="less">
.mineWrapper{
  position: fixed;
  left: 0;
  top: 0;
  bottom:65px;
  width:100%;
  background:#efeff4;
  touch-action: none;
  .mine{
  font-size:16px;

  .mine-bg{
    height: 286px;
    text-align: center;
    color: #fff;
    background: url(../../assets/bg-mypage.png) no-repeat center center;
    background-size: cover;
    position: relative;
    .mineuser{
      img{
        width: 80px;
        height: 80px;
        border-radius: 100%;
        border: 2px solid #fff;
        margin-top: 30px;
      }
      p{
        width: 60px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background:#A5A5A5;
        color:#828181;
        font-size:26px;
        border-radius: 4px;
        margin:0 auto;
        margin-top: 10px;
      }
    }
    .minenav{
      position: absolute;
      left: 0;
      bottom: 0;
      color: #fff;
      background: transparent;
      border: 0;
      font-size: 16px;
      ul{
        width: 100%;
        display: table;
        table-layout: fixed;
        width: 100%;
        margin: 0;
        padding: 0;
        li{
          display: table-cell;
          overflow: hidden;
          text-align: center;
          white-space: nowrap;
          text-overflow: ellipsis;
          vertical-align: middle;
          border-left: 1px solid rgba(255, 255, 255, .3);
          &:first-child{
            border-left: none;
          }
          a{
            display: block;
            padding-bottom: 10px;
            color:#fff;
            p{
              line-height: 40px;
            }
          }
        }
      }
    }
  }
  .grid-nav{
    margin-top: 30px;
    background: #fff;
    ul{
        width:100%;
        display: table;
        table-layout: fixed;
        width: 100%;
        margin: 0;
        padding: 0;
        color:#3d4145;
        font-size:16px;
        li{
          width: 24.8%;
          float: left;
          overflow: hidden;
          text-align: center;
          white-space: nowrap;
          text-overflow: ellipsis;
          vertical-align: middle;
          border-right: 1px solid #e0e0e0;
          border-bottom:1px solid #e0e0e0;
          padding:30px 0px;
          &:nth-child(4n){
            border-right: none;
          }
          a{
            display: block;
            p{
              line-height: 45px;
            }
          }
        }
      }
  }
  .service-tel{
    line-height: 60px;
    a{
      display: block;
      font-size: 16px;
      text-align: center;
      background-color: #fff;
      color:#f6383a;
      margin-top: 20px;
      margin-bottom: 80px;  
    }
  }
}
}

</style>
