<template>
  <div class="servicenav">
    <div class="tab">
        <div class="tab-item" v-for="(tab,index) in navlist1" :key='index'>
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
  name: 'servicenav',
  components:{
  },
  data () {
    return {
      navlist1:[{
        name:'送水',
        class:'el-icon-info',
        url:'/waterhome'
      },
      {
       name:'维修',
       class:'el-icon-setting',
       url:'/ticket'
      },
      {
       name:'家教',
       class:'el-icon-star-on',
       url:'/mine'
      }],
    }
  },
  methods: {
  },
}
</script>

<style lang="less">
.servicenav{
  font-size:16px;
  height: auto;
  .tab{
    display: flex;
    width: 100%;
    border-bottom:1px solid rgba(7,17,27,.1);
    .tab-item{
      -webkit-flex: 1;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      text-align: center;
      a{
        font-size: 16px;
        color:rgba(77,85,93,1);
        -webkit-flex: 1;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        padding: 10px 12px;
        
        i{
          font-size: 20px;
          display: block;
          margin-bottom: 8px;
          color:rgba(240,20,29);
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
