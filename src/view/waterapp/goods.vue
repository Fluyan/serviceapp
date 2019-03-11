<template>
<div>
  <div class="goods">
    <div class="menu-wrapper" ref='menuWrapper'>
      <ul>
        <li v-for="(item,index) in goods" :key="index" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index)">
          <span class="text">
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref='foodsWrapper'>
      <ul>
         <li v-for="(item,index) in goods" :key="index" class="food-list food-list-hook">
           <h1 class="title">{{item.name}}</h1>
           <ul>
             <li v-for="(food,index) in item.foods" :key="index" class="food-item" @click="selectFood(food,$event)">
               <div class="icon">
                 <img width="57" height="57" :src="food.icon">
               </div>
               <div class="content">
                 <h2 class="name">{{food.name}}</h2>
                 <p class="desc">{{food.description}}</p>
                 <div class="extra">
                   <span class="count">月售{{food.sellCount}}份</span>
                   <span>好评率{{food.rating}}%</span>
                 </div>
                 <div class="price">
                    ￥
                    <span class="now">{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                 </div>
                 <div class="carcontrol-wrapper">
                   <carcontrol :food="food"></carcontrol>
                 </div>
               </div>
             </li>
           </ul>
        </li>
      </ul>
    </div>
    <shopcar :select-foods="selectorderFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice" :shopName="seller.name"></shopcar>
  </div>
  <food :food="selectedFood" ref="food"></food>
</div>
</template>

<script>

import BScroll from "better-scroll"
import shopcar from "./shopcar"
import carcontrol from "./carcontrol"
import food from "./food"
let ERR_OK = 0;
export default {
  name: 'goods',
  props:{
    seller:{
      type:Object
    }
  },
  components:{
    shopcar,
    carcontrol,
    food,
  },
  data () {
    return {
      goods:[],
      listHeight:[],
      scrollY:0,
      selectedFood:{},
      isordershow:false
    }
  },
  computed:{
    currentIndex(){
      for (let i = 0; i < this.listHeight.length - 1; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        //判断currentY当前所在的区间
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    },
    selectorderFoods(){
      let foods = [];
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
            if(food.count){
              foods.push(food)
            }
        })
      })
     console.log(foods)
      return foods
    }
  },
  created(){
    let self = this;
    //this.$axios.get('/api/goods')
    this.$axios.get('./static/data.json').then(function (response) {
      self.goods = response.data.goods;
      console.log(response.data)
      self.$nextTick(() => {
        self._initScroll();
        self._calculateHeight()
      });
      sessionStorage.setItem('goodsobject',self.goods)
      self.$store.commit("goodsobject",self.goods)   
    }, response => {
      console.log('error,no data');
    });
  },
  methods:{
    selectMenu(index){
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el,300)
    },
    selectFood(food,event){
      
      this.selectedFood = food
      this.$refs.food.show()
    },
    _initScroll(){
      this.menuScroll = new BScroll(this.$refs.menuWrapper,{
        click:true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
        probeType:3,
        click:true
      });
      let self = this;
      this.foodsScroll.on("scroll",(pos)=>{
        self.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight(){
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let height = 0;
      this.listHeight.push(height);
      for(let i=0;i<foodList.length;i++){
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height)
      }
    },
    getData:function(data){
      this.isordershow = data; 
    } 
  }
}
</script>

<style lang="less">
.goods{
  position: absolute;
  width: 100%;
  top:174px;
  bottom:46px;
  display: flex;
  overflow: hidden;
  background: #fcc;
  .menu-wrapper{
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .menu-item{
      display: table;
      height: 54px;
      width: 56px;
      line-height: 14px;
      padding: 0 12px;
      &.current{
        position: relative;
        margin-top: -1px;
        background: #fff;
        z-index: 10;
        .text{
          border-bottom:none;
        }
      }
      .text{
        font-size: 12px;
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        border-bottom:1px solid rgba(7,17,27,.1);
      }
    }
  }
  .foods-wrapper{
    flex: 1;
    background: #fff;
    .food-list{
      .title{
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color:rgba(147,153,159);
        background: #f3f5f7;
      }
      .food-item{
        display: flex;
        margin: 18px 18px 0px 18px;
        padding-bottom:18px;
        border-bottom:1px solid rgba(7,17,27,.1);
        &:last-child{
          border-bottom:none;
        }
        .icon{
          flex: 0 0 57px;
          margin-right: 10px;
        }
        .content{
          flex: 1;
          position: relative;
          .name{
            font-size: 14px;
            margin: 2px 0px 8px 0px;
            height:14px;
            color:rgba(7,17,27,1);
          }
          .desc{
            margin-bottom: 8px;
            line-height: 10px;
            font-size: 10px;
            color:rgba(147,153,159,1);
          }
          .extra{
            line-height: 20px;
            font-size: 10px;
            color:rgba(147,153,159,1);
            .count{
              margin-right: 12px;
            }
          }
          .price{
            line-height: 24px;
            font-size: 10px;
            font-weight: 700;
            color: rgb(240,20,20);
            .now{
              margin-right: 8px;
              font-size: 14px;
            }
            .old{
              text-decoration: line-through;
              color: rgb(147,153,159);
            }
          }
          .carcontrol-wrapper{
            position: absolute;
            right: 0;
            bottom: -6px;

          }
        }
      }
    }
  }
}
</style>
