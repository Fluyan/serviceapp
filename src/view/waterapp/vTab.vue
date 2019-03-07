<template>
  <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">商家</div>
      <div class="tab-item">评论</div>
  </div>
</template>

<script>
export default {
  name: 'vTab',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less">
.tab{
  display: flex;
  width: 100%;
  line-height: 40px;
  height: 40px;
  background: #fcc;
  .tab-item{
    flex: 1;
    text-align: center;
  }
}
</style>
