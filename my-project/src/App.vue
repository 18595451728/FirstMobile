<template>
  <div id="app">
    <img src="./assets/logo.png" class="logo">
    <router-view/>
    <div class="footer">
      <router-link tag="div" to="/">首页</router-link>
      <router-link tag="div" to="/store">商城</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .logo{
    width: 100px;
  }
</style>
