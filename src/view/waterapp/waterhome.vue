<template>
  <div class="home">
    <ul class="msginfos">
      <li @click="goshop">
        <div class="img fl">
          <a><img src="../../assets/waterlogo.png" width="180" height="135"></a>
        </div>
        <div class="info">
              <h3><a><b>附近的送水工</b></a></h3>
              <p class="desc">商家</p>
              <p class="from">109021浏览 <span>10km</span></p>
            </div>
      </li>
    </ul>
      
  </div>
</template>

<script>
// import listInfo from './listInfo'
export default {
  name: 'home',
  components:{
    //listInfo
  },
  data () {
    return {
      
     
    }
  },
  methods: {
   goshop(){
      this.$router.push('/shop')
    }
  },
  created: function(){
  },
}
</script>

<style lang='less'>
.home{
  font-size:16px;
  .fl{
    float: left;
  }
  .msginfos{
    li{
      width: 100%;
      height: 135px;
      padding-top: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e9e9e9;
      img{
            width: 160px;
            height: 130px;
          }
      .info {
        margin-left: 200px;
        height: 135px;
        position: relative; 
        a{
          text-decoration: none;
          outline: none;
          color: #333;
          cursor: pointer;
          font-size: 18px;
        }
        .desc {
            font-size: 14px;
            line-height: 20px;
            margin-top: 10px;
            color: #666;
        }
        .from {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 12px;
            color: #999;
            width: 95%;
            span{
              position: absolute;
              right: 0;
              bottom: 0;
              font-size: 12px;
              color: #999;
            }
        }
      }
    }
  }
}
</style>
