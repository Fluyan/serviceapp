<template>
<div class="addresscontain">
  <div class="addressall" v-if="!addressdiv">
    <div class="addresstop">
        <i class="el-icon-arrow-left"  @click.stop="addressback"></i>
        我的地址
    </div>
    <div class="addressmiss">
      <ul>
        <li>
          <label>收货地址</label><input v-model="getlocation" type="text" placeholder="点击添加地址(必填)">
        </li>
         <li>
          <label>门牌号</label><input v-model="getdoornumber" type="text" placeholder="请输入门牌号等详细信息">
        </li>
         <li>
          <label>联系人</label><input v-model="getcontectname" type="text" placeholder="您的姓名">
        </li>
         <li>
          <label>手机号</label><input v-model="getphonenumber" type="text" placeholder="配送人员联系您的电话">
        </li>
      </ul>
      <div class="btn" @click="saveaddress"><a>保存</a></div>
    </div>
  </div>
  <div class="addressmain" v-if="addressdiv">
    <div class="addressmaintop">
        <i class="el-icon-arrow-left"  @click="back"></i>
        我的地址
    </div>
    <div class="ordermiss">
      <img src="../../assets/address_no_con.png">
      <p>您还没有送货地址，赶紧添加吧！</p>
      <div class="btn" @click="addnewdress"><a>现在新增地址</a></div>
    </div>
  </div>
</div>
  
</template>

<script>

export default {
  name: 'newaddress',
  components:{
  },
  data () {
    return {
      addressdiv:true,
      getlocation:'',
      getdoornumber:'',
      getcontectname:'',
      getphonenumber:'',
    }
  },
  methods:{
    addnewdress(){
     this.addressdiv = false
    },
    saveaddress(){
        console.log("保存")
    },
    addressback(){
      this.addressdiv = true
    },
    back() {
       this.$router.back(-1)
    },
  },
  computed: {
    
   
  },
  mounted() {
    
  }
}
</script>

<style lang="less">
.addresscontain{
  .addressall{
    font-size:16px;
    .addresstop{
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
    .addressmiss{
      background: #fff;
      margin-top: 20px;
      padding-bottom: 20px;
      ul{
        li{
          line-height: 60px;
          height: 60px;
          font-size: 16px;
          border-bottom: 1px solid #e0e0e0;
          padding-left: 20px;
          label{
            width: 80px;
            display: inline-block;
          }
          input{
            margin-left: 40px;
            line-height: 38px;
            height: 38px;
            font-size: 16px;
            padding-left: 10px;
            outline:none;
            width: 50%;
          }
        }
      }
      .btn{
          display: block;
          height: 40px;
          line-height: 40px;
          color: #fff;
          background: #ff2d4b;
          padding: 0 35px;
          border-radius: 30px;
          font-size: 14px;
          margin: 20px auto 0px auto;
          text-align: center;
          width: 80px;
          a{
            color:#fff;
          }
      }
    }
  }
  .addressmain{
    font-size:16px;
    .addressmaintop{
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
}

</style>
