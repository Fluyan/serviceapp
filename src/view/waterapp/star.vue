<template>
  <div class="star" :class="starType">
      <span v-for="(itemClass,index) in itemClasses" :class="itemClass" :key="index" class="star-item"></span>
  </div>
</template>

<script>
let LENGTH = 5;
let CLS_ON = 'on';
let CLS_HALF = 'half';
let CLS_OFF ='off';

export default {
    name: 'star',
    props:{
        size:{
            type:Number
        },
        score:{
            type:Number
        }
    },
    data () {
        return {
        
        }
    },
    computed:{
        starType(){
            return 'star-' + this.size
        },
        itemClasses(){
            let result=[];
            let score = Math.floor(this.score*2)/2;
            let hasDecimal = score % 1 !== 0;//半星
            let integer = Math.floor(score);//全星
            for(let i=0; i<integer; i++){
                result.push(CLS_ON);
            }
            if(hasDecimal){
                result.push(CLS_HALF);
            }
            while(result.length<LENGTH){
                result.push(CLS_OFF);  
            }
            console.log(result)
            return result;
        }
    }
}
</script>

<style lang="less">
.star{
    font-size: 0;
    .start-item{
        display: inline-block;
        background-repeat: no-repeat;
    }
    &.star-48{
        .star-item{
            width: 30px;
            height: 30px;
            margin-right: 12px;
            background-size: 30px 30px;
            display: inline-block;
            &:last-child{
                margin-right: 0px;
            }
            &.on{
                background-image:url('../../assets/star48_on@2x.png');
            }
            &.half{
                background-image:url('../../assets/star48_half@2x.png');
            }
            &.off{
               background-image:url('../../assets/star48_off@2x.png');
            }
        }
    }
}
</style>
