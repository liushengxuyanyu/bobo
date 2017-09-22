<template>
  <div id="app">
    <!-- <home></home> -->
    <div class="tabbar">
      <router-link to="/home">首页</router-link>
      <router-link to="/market">闪送超市</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/mine">我的</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

// import Home from './pages/Home'

export default {
  name: 'app',
  // components: {
  //   Home
  // }
}
</script>

<style>
  #app .tabbar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    background-color: wheat;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #app .tabbar a{
    color: black;
  }

</style>
