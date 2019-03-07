<template>
<div>
    <div class="shopcar">
        <div class="content" @click="toggleList">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo" :class="{'highlight':totalCount>0}">
                        <i class="el-icon-goods"></i>
                    </div>
                    <div class="num" v-show="totalCount>0">{{totalCount}}</div>
                </div>
                <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}元</div>
                <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
            </div>
            <div class="content-right">
                <div class="pay" :class="{'enough':payClass}" @click.stop="pay">
                    {{payDesc}}
                </div>
            </div>
        </div>
        <transition name="fold">
            <div class="shopcart-list" v-show="listShow">
                <div class="list-header">
                    <h1 class="title">购物车</h1>
                    <span class="empty" @click="empty">清空</span>
                </div>
                <div class="list-content" ref="listContent">
                    <ul>
                        <li class="food" v-for="(food,index) in selectFoods" :key="index">
                            <span class="name">{{food.name}}</span>
                            <div class="price">
                                <span>￥{{food.price*food.count}}</span>
                            </div>
                            <div class="cartcontrol-wrapper">
                                <carcontrol :food="food"></carcontrol>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
    <div class="list-mask" v-show="listShow" @click="hideList">
    </div>
    <div class="order" v-show="isordershow" ref="ordershop">
        <div class="order-wrapper">
            <div class="ordertop">
                <i class="el-icon-arrow-left"  @click.stop="back"></i>
                提交订单
            </div>
            <div class="ordermain">
                <div class="address">
                    <p @click="goaddress">选择收货地址<i class="el-icon-arrow-right"></i></p>
                    <p>选择送达时间<span>尽快送达</span><i class="el-icon-arrow-right"></i></p>
                </div>
                <div class="paytype">
                    <h2>选择支付方式</h2>
                    <p><el-radio v-model="radio" label="1">微信支付</el-radio></p>
                    <p><el-radio v-model="radio" label="2">货到付款</el-radio></p>
                </div>
                <div class="moneycard">
                    <p>代金券<span>无可用代金券</span><i class="el-icon-arrow-right"></i></p>
                </div>
                <div class="moretalk">
                    <p>备注<span>（选填）</span><i class="el-icon-arrow-right"></i></p>
                </div>
                <div class="detailorder">
                    <div class="shopname">{{shopName}}<span>本单由商家配送</span></div>
                    <div class="order-content">
                        <ul>
                            <li class="food" v-for="(food,index) in selectFoods" :key="index">
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
                                <span class="ordermoney">￥{{totalPrice}}</span>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>
import carcontrol from "./carcontrol"
import BScroll from "better-scroll"
export default {
    name: 'shopcar',
    components:{
        carcontrol
    },
    props:{
        selectFoods:{
            type:Array,
            default(){
                return [
                ]
            }
        },
        shopName:{
            type:String
        },
        deliveryPrice:{
            type:Number,
            default:0
        },
        minPrice:{
            type:Number,
            default:0
        },
    },
    data () {
        return {
           radio: '1',
           fold:true,
           isordershow:false
        }
    },
    computed:{
        totalPrice(){
            let total = 0;
            this.selectFoods.forEach((food) => {
                total += food.price * food.count;
            });
            return total
        },
        totalCount(){
            let count = 0;
            this.selectFoods.forEach((food) => {
                count += food.count;
            });
            return count
        },
        payDesc(){
            if(this.totalPrice === 0 ){
                return '￥' + this.minPrice + '元起送';
            }else if (this.totalPrice < this.minPrice){
                let diffence = this.minPrice - this.totalPrice;
                return '还差'+ diffence +'元起送';
            }else{
                return '去结算'
            }
        },
        payClass(){
            if (this.totalPrice >= this.minPrice){
                return true;
            }
            return false;
        },
        listShow(){
            if(!this.totalCount){
                this.fold = true;
                return false
            }
            let show = !this.fold;
            if(show){
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll(this.$refs.listContent,{
                        click: true
                        })
                    } else {
                        this.scroll.refresh();
                    }
                })
            }
            return show
        }
    },

    methods:{
        toggleList(){
            if(!this.totalCount){
                return;
            }
            this.fold = !this.fold
        },
        empty(){
            this.selectFoods.forEach((food)=>{
                food.count = 0;
            })
        },
        hideList(){
             this.fold = true
        },
        pay(){
            if(this.totalPrice<this.minPrice){
                return;
            }
            this.isordershow = true
            this.$nextTick(() => {
                this.orderscroll = new BScroll(this.$refs.ordershop,{
                click: true
                })
            })
            console.log()
            console.log(this.selectFoods)
            this.$store.commit('vuextotal', this.totalPrice)
            this.$store.commit('vuexfoods', this.selectFoods)
        },
        back(){
            this.isordershow = false
        },
        goaddress(){
            this.$router.push("/address")
        }
    }

}
</script>

<style lang="less">
.shopcar{
  position: fixed;
  left: 0;
  bottom:0px;
  z-index: 60;
  width: 100%;
  height: 48px;
  .content{
    display: flex;
    background: #141d27;
    height: 48px;
    font-size: 0;
    .content-left{
        flex:1;
        .logo-wrapper{
            display: inline-block;
            vertical-align: top;
            position: relative;
            top: -10px;
            margin: 0 12px;
            padding: 6px;
            width: 56px;
            height: 56px;
            box-sizing: border-box;
            border-radius: 50%;
            background: #141d27;
            .logo{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: #2b343c;
                text-align: center;
                
                .el-icon-goods{
                    font-size: 24px;
                    color: #80858a;
                    line-height: 44px;
                }
                &.highlight{
                    background: rgba(0,160,220);
                    .el-icon-goods{
                        color:#fff;
                    }
                }
            }
            .num{
                position: absolute;
                top:0;
                right: 0;
                height: 16px;
                line-height: 16px;
                width: 24px;
                text-align: center;
                border-radius: 16px;
                font-size: 9px;
                background:rgb(240,20,20);
                color:#fff;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,.4);
            }
        }
        .price{
            display: inline-block;
            vertical-align: top;
            margin-top: 12px;
            line-height: 24px;
            padding-right: 12px;
            box-sizing: border-box;
            border-right: 1px solid rgba(255,255,255,0.1);
            font-size: 16px;
            font-weight: 700;
            color: rgba(255,255,255,0.4);
            &.highlight{
                color:#fff;
            }
        }
        .desc{
            display: inline-block;
            vertical-align: top;
            margin: 12px 0 0 12px;
            line-height: 26px;
            color: rgba(255,255,255,0.4);
            font-size: 10px;
        }
    }   
    .content-right{
        flex:0 0 105px;
        width: 105px;
        .pay{
            height:48px;
            line-height: 48px;
            text-align: center;
            font-size: 12px;
            color:rgba(255,255,255,0.4);
            font-weight: 700;
            background: #2b333b;
            &.enough{
                background: #00b43c;
                color: #fff
            }
        }
    }
  }
  .shopcart-list{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    transition: all 0.5s;
    transform: translate3d(0,-100%,0);
    &.fold-enter-active{
        transition: all 0.5s;
        transform: translate3d(0,-100%,0);
    }
    &.fold-enter,&.fold-leave{
        transform: translate3d(0,0,0);
    }
    .list-header{
        height: 40px;
        line-height: 40px;
        padding: 0 18px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        background: #f3f5f7;
        .title{
            float: left;
            font-size: 14px;
            color: rgb(7,17,27);
        }
        .empty{
            float: right;
             font-size: 12px;
            color: rgb(0,160,220);
        }
    }
    .list-content{
        touch-action: none;
        padding: 0 18px;
        max-height: 217px;
        overflow: hidden;
        background: #fff;
        .food{
            position: relative;
            padding: 12px 0;
            box-sizing: border-box;
            border-bottom:1px solid rgba(7,17,27,0.1);
        }
        .name{
            line-height: 24px;
            font-size: 12px;
            color: rgb(7,17,27);
        }
        .price{
            position: absolute;
            right: 90px;
            bottom: 12px;
            line-height: 24px;
            font-size: 14px;
            font-weight: 700;
            color: rgb(240,20,20);
        }
        .cartcontrol-wrapper{
            position: absolute;
            right: 0;
            bottom: 6px;
        }
            
    }
  }

}
.list-mask{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    background:rgba(0,0,0,.5);
    backdrop-filter:blur(10px);
}
.order{
    font-size:16px;
    background: #f8f8f8;
    position: fixed;
    left: 0;
    top: 0;
    bottom:48px;
    z-index: 40;
    width:100%;
    touch-action: none;
    .ordertop{
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
    .ordermain{
        margin-top: 20px;
        position: relative;
        .address{
            background: #fff;
            p{
                line-height: 40px;
                height: 40px;
                font-size: 16px;
                border-bottom: 1px solid #e0e0e0;
                padding-left: 20px;
                span{
                    position: absolute;
                    right: 60px;
                    line-height: 40px;
                }
                
            }
            i{
                position: absolute;
                right: 30px;
                line-height: 40px;
            }
            
        }
        .paytype{
            background: #fff;
            h2{
                font-size: 18px;
                font-weight: normal;
                line-height: 60px;
                background: #f8f8f8;
                color:#666;
                padding-left: 20px;
            }
            p{
                line-height: 40px;
                height: 40px;
                font-size: 16px;
                border-bottom: 1px solid #e0e0e0;
                padding-left: 20px;
                position: relative;
                
                span{
                    font-size: 16px;
                }
                .el-radio{
                    width: 100%;
                }
                .el-radio__input{
                    position: absolute;
                    right: 30px;
                    top:-4px;
                }
                .el-radio__inner{
                    width: 20px;
                    height: 20px;
                   
                }
                .el-radio__inner::after{
                    width: 10px;
                    height: 10px;
                }
                .el-radio__inner:hover{
                    border-color: #ff2d4b;
                }
                .el-radio__input.is-checked .el-radio__inner {
                    border-color: #ff2d4b;
                    background: #ff2d4b;
                }
                .el-radio__input.is-checked+.el-radio__label{
                    color:#ff2d4b;
                }
            }
        }
        .moneycard{
            background: #fff;
            margin-top: 30px;
            p{
                line-height: 40px;
                height: 40px;
                font-size: 16px;
                border-bottom: 1px solid #e0e0e0;
                padding-left: 20px;
                span{
                    position: absolute;
                    right: 60px;
                    line-height:40px;
                    color:#ff2d4b;
                }
                
            }
            i{
                position: absolute;
                right: 30px;
                line-height: 40px;
            }
        }
        .moretalk{
            background: #fff;
            p{
                line-height: 40px;
                height: 40px;
                font-size: 16px;
                border-bottom: 1px solid #e0e0e0;
                padding-left: 20px;
                span{
                    position: absolute;
                    right: 60px;
                    line-height: 40px;
                }
                
            }
            i{
                position: absolute;
                right: 30px;
                line-height: 40px;
            }
        }
        .detailorder{
            background: #fff;
            margin-top: 20px;
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
