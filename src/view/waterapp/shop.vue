<template>
  <div id="waterapp">
    <v-header :seller='seller'></v-header>
    <div class="tab">
        <div class="tab-item" v-for="(tab,index) in tablist" :key='index'>
          <router-link :to="tab.url">{{tab.name}}</router-link>
        </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import vHeader from "./vHeader"
export default {
  name: 'App',
  components:{
    vHeader
  },
  data(){
    return{
      tablist:[
        {
          name:'商品',
          url:'/shop/goods'
        },
        {
          name:'评价',
          url:'/shop/rataing'
        },
        {
          name:'商家',
          url:'/shop/seller'
        },
      ],
      seller:{}
    }
  },
  methods:{

  },
  created() {
    let self = this;
    //this.$axios.get('/api/seller')
    this.$axios.get('./static/data.json').then(function (response) {
        self.seller = response.data.seller;
        console.log(response.data)
    }, response => {
      console.log('error,no data');
    });
  },
}
</script>

<style lang='less'>
#waterapp{
  .tab{
    display: flex;
    width: 100%;
    line-height: 40px;
    height: 40px;
    border-bottom:1px solid rgba(7,17,27,.1);
    .tab-item{
      flex: 1;
      text-align: center;
      a{
        display: block;
        font-size: 14px;
        color:rgba(77,85,93,1);
      }
        .router-link-active{
        color:rgba(240,20,29);
      }
    }
  }
}
</style>
