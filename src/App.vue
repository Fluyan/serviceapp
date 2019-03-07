<template>
  <div id="app">
    <router-view></router-view>
    <bottom-nav v-if="routershop"></bottom-nav>
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
      routershop:true
    }
  },
  mounted() {
    
  },
  watch:{
    
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
