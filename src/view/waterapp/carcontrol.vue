<template>
  <div class="carcontrol">
      <div class="car-decrease el-icon-remove-outline" v-show="food.count>0" @click.stop.prevent="decreaseCart($event)"></div>
      <div class="car-count" v-show="food.count>0">{{food.count}}</div>
      <div class="car-add el-icon-circle-plus" @click.stop.prevent="addCart($event)"></div>
  </div>
</template>

<script>
export default {
  name: 'carcontrol',
  props:{
      food:{
          type:Object
      }
  },
  data () {
    return {
      
    }
  },
  methods:{
      addCart(event){

          if(!this.food.count){
            //   this.food.count = 1
              this.$set(this.food,'count',1)
          }else{
              this.food.count++
          }
      },
      decreaseCart(event) {
      if (this.food.count) {
        this.food.count--;
      }
    }
  }
}
</script>

<style lang="less">
.carcontrol{
    font-size:0;
    .car-decrease{
        display: inline-block;
        padding: 6px;
        font-size: 24px;
        line-height: 24px;
        color:rgb(0,160,260)
    }
    .car-count{
        display: inline-block;
        vertical-align: top;
        width: 12px;
        padding-top: 6px;
        line-height: 24px;
        text-align: center;
        font-size: 10px;
        color: rgb(147,153,159);
    }
    .car-add{
        display: inline-block;
        padding: 6px;
        font-size: 24px;
        line-height: 24px;
        color:rgb(0,160,260)
    }
}
</style>
