<template>
<div class="ticketwrapper" ref="ordercontent">
    <div class="ticket" >
      <div class="tickettop">
          <i class="el-icon-arrow-left"  @click.stop="back"></i>
          我的订单
      </div>
      <div class="ordermiss" v-if="vuextotal<=0">
        <img src="../../assets/order_no_con.png">
        <p>您还没有订单，赶紧点一份！</p>
        <div class="btn" @click="gofood"><a>现在点一份</a></div>
      </div>
      <div class="ticketmain" v-if="vuextotal>0">
        <div class="test-box">
          <div class="test-tab">
            <input type="radio" class="test-radio" id="radio1" name="test-radio" checked>
              <label for="radio1" class="test-label">订单详情</label>
              <div class="content">
                <div class="ordersure">
                  
                </div>
                <div class="ordermsg">
                  订单明细
                </div>
                <div class="detailorder" >
                    <div class="shopname">1213123<span>本单由商家配送</span></div>
                    <div class="order-content">
                        <ul>
                            <li class="food" v-for="(food,index) in vuexfoods" :key="index">
                                <p>
                                    {{food.name}}
                                    <span class="ordercount">×{{food.count}}</span>
                                    <span class="ordermoney">￥{{food.price*food.count}}</span>
                                </p>
                            </li>
                            <li class="sendmoney">
                                <p>包装费<span>￥0.00</span></p>
                            </li>
                            <li class="sendmoney">
                                <p>配送费<span>￥0.00</span></p>
                            </li>
                            <li class="sendmoney">
                                <span class="ordercount">总计</span>
                                <span class="ordermoney">￥{{vuextotal}}</span>
                            </li>
                        </ul>
                        
                    </div>
                </div>
              </div>
          </div>
          <div class="test-tab">
              <input type="radio" class="test-radio" id="radio2" name="test-radio">
              <label for="radio2" class="test-label">订单状态</label>
              <div class="content"><P>asdasdsad2</P></div>
          </div>
        </div>
      </div>
    </div>
</div>
  
</template>

<script>
import BScroll from "better-scroll"
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'ticket',
  components:{
  },
  
  data () {
    return {
      activeName: 'second',
      ticketablist:[
        {
          name:'订单详情'
        },
        {
          name:'订单状态'
        }
      ]
    }
  },
  created(){
    
  },
  methods:{
    gofood(){
      this.$router.push('/shop/goods')
    },
    back() {
     console.log("1")
    },
  },
  computed:{
    ...mapState([
      'vuexfoods','vuextotal'
    ]),
  },
}
</script>

<style lang="less">
.ticketwrapper{
  .ticket{
    font-size:16px;
    .tickettop{
      text-align: center;
      height:40px;
      line-height: 40px;
      color:#fff;
      background: #ff2d4b;
      position: relative;
      i{
          position: absolute;
          left: 30px;
          padding: 12px;
      }
    }
    .ordermiss{
      text-align: center;
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%,-50%);
      img{
        width: 100px;
        height: 100px;
      }
      p{
        margin-top: 30px;
        font-size: 16px;
        color:#768491;
        margin-bottom: 30px;
      }
      .btn{
          display: inline-block;
          height:40px;
          line-height: 40px;
          color: #fff;
          background: #ff2d4b;
          padding: 0 35px;
          border-radius: 30px;
          font-size:14px;
          a{
            color:#fff;
          }
      }
    }
  }
  .ticketmain{
    .test-box{width: 100%;padding-top: 40px;position: relative;}
    .test-box>.test-tab{width:100%;}
    .test-box .test-label{background-color: #fff;display: inline-block;width: 50%;text-align: center;font-size: 16px;line-height: 40px;box-sizing: border-box;border-bottom: 1px solid #e0e0e0}
    .test-label{position: absolute;top: 0;;border: none}
    .test-tab:nth-child(1) .test-label{left: 0;}
    .test-tab:nth-child(2) .test-label{left: 50%;}
    .test-tab:last-child .test-label{border-bottom: 1px solid #e0e0e0}
    .test-box .content{background-color: #fff;;display: none;padding-bottom: 50px;}
    .test-box input.test-radio{display: none;}
    .test-box input:checked~.test-label{background-color: #fff;border-bottom: 1px solid #ff2d4b;color:#ff2d4b}    
    .test-box input:checked~.content{display: block;}
    .ordermsg{
      height:40px;
      line-height: 40px;
      padding-left: 20px;
      background: #efeff4;
    }
    .detailorder{
        background: #fff;
        .shopname{
            line-height: 60px;
            height: 60px;
            font-size: 18px;
            border-bottom: 1px solid #e0e0e0;
            padding-left: 20px;
            span{
                position: absolute;
                right: 60px;
                line-height: 60px;
            }
        }
        .order-content{
            ul{
                border-bottom: 1px solid #e0e0e0;
                li{
                    line-height: 40px;
                    height: 40px;
                    font-size: 14px;
                    padding-left: 20px;
                    .ordercount{
                        position: absolute;
                        right: 120px;
                        line-height: 40px;
                        color:#999;
                    }
                    .ordermoney{
                        position: absolute;
                        right: 60px;
                        line-height: 40px;
                    }
                }
                .sendmoney{
                    line-height: 40px;
                    height: 40px;
                    font-size: 18px;
                    padding-left: 20px;
                    span{
                        position: absolute;
                        right: 60px;
                        line-height: 40px;
                    }
                    .ordercount{
                        position: absolute;
                        right: 120px;
                        line-height: 40px;
                        color:#000;
                    }
                    .ordermoney{
                        position: absolute;
                        right: 60px;
                        line-height: 40px;
                    }
                }
            }
        }
    }
  }
}

</style>
