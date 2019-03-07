<template>
  <div class="villageservice">
    <service-nav></service-nav>
  </div>
</template>

<script>
// import searchtop from '../public/components/searchtop'
import serviceNav from './village/serviceNav'
export default {
  name: 'villageservice',
  components:{
    //searchtop
    serviceNav
  },
  data () {
    return {
      navlist:[{
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
      },
      {
        name:'送水',
        class:'el-icon-warning',
        url:'/waterhome'
      },
      {
       name:'维修',
       class:'el-icon-question',
       url:'/ticket'
      },
      {
       name:'家教',
       class:'el-icon-remove',
       url:'/mine'
      },
      {
        name:'送水',
        class:'el-icon-circle-plus',
        url:'/waterhome'
      },
      {
       name:'维修',
       class:'el-icon-circle-check',
       url:'/ticket'
      },
      {
       name:'家教',
       class:'el-icon-location',
       url:'/mine'
      },
      {
        name:'送水',
        class:'el-icon-upload',
        url:'/waterhome'
      }]
    }
  },
  methods: {
    
  },
}
</script>

<style lang="less">
.villageservice{

}
</style>
