<template>
  <div id="app">
    <router-view/>
    <div class="footer">
      <router-link tag="div" to="/">首页</router-link>
      <router-link tag="div" to="/store">商城</router-link>
      <router-link tag="div" to="/tiku?aaa=112">题库</router-link>
      <router-link tag="div" to="/mine">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    outline: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

  .footer{
    width: 750px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 100px;
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: 30px;
    border-top: 1px solid #eee;
  }
  .footer>div{
    width: 25%;
    text-align: center;
  }
</style>
