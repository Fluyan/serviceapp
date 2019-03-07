<template>
  <div class="bottomNav">
    <div class="tab">
        <div class="tab-item" v-for="(tab,index) in navlist" :key='index'>
          <router-link :to="tab.url">
            <i :class="tab.class"></i>
            <span>{{tab.name}}</span>
          </router-link>
        </div>
    </div>
  </div>
</template>


<script>

export default {
  components:{

  },
  data () {
    return {
      navlist:[{
        name:'首页',
        class:'el-icon-goods',
        url:'/villageservice'
      },
      {
       name:'订单',
       class:'el-icon-tickets',
       url:'/ticket'
      },
      {
       name:'我的',
       class:'el-icon-menu',
       url:'/mine'
      }]
    }
  },



}
</script>

<style lang="less">
.bottomNav{
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: #f7f7f8;
  .tab{
    display: flex;
    width: 100%;
    border-bottom:1px solid rgba(7,17,27,.1);
    .tab-item{
      display: block;
      -webkit-flex: 1;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      text-align: center;
      a{
        font-size: 14px;
        color:rgba(77,85,93,1);
        display: block;
        -webkit-flex: 1;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        padding: 6px 12px;
        i{
          font-size: 16px;
          display: block;
          margin-bottom: 6px;
        }
        span{
           display: block;
        }
      }
        .router-link-active{
        color:rgba(240,20,29);
      }
    }
  }
}
</style>
