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
      routershop:true,
    }
  },
  mounted() {
    if(sessionStorage.getItem('vuexseller')=== null){
        sessionStorage.setItem('vuexseller','')
    }
    this.$store.state.vuexseller = JSON.parse(sessionStorage.getItem('vuexseller'))
    console.log(this.$store.state.vuexseller)
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
