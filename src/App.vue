<template>
  <div id="app">
    <router-view></router-view>
    <bottom-nav v-if="routershop"></bottom-nav>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import bottomNav from './public/components/bottomNav'
export default {
  name: 'App',
  components:{
    bottomNav,
  },
  data(){
    return {
      routershop:true,
      list:[]
    }
  },
  mounted() {
    for(var i=0;i<10;i++){
        this.list.push(i)
        
      }
      console.log(this.list)
  },
  watch:{
    
  },
  computed:{
      
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  width: 100%;
  margin:0 auto;
  height: 100%;
  background: #efeff4;
  position: absolute;
}

</style>
