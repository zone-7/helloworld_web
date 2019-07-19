<template>
  <div class="top navbar-fixed-top">
    <div class="container">
      <div class="row">
        <div class="col-xs-2"></div>
        <div class="col-xs-8 text-center">
          <router-link :to="{name:'Main'}"><strong>首页</strong></router-link>
          <router-link :to="{name:'About'}"><strong>关于</strong></router-link>

        </div>
        <div class="col-xs-2"></div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'Top',
    data(){
      return {
        message: '欢迎使用zone7 框架'
      }
    }

  }

</script>
