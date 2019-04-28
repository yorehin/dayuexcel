<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import course from './components/course'
export default {
  name: 'app',
  component: {
    // 'course': course
  }
}
</script>

<style scoped>
  @import url('../static/font/iconfont.css');
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
  #app{
    background-color: #1c2438;
    width: 100vw;
    height: 100vh;

  }
    /*background-color: white;*/
  body{
    margin: 0px;
    padding: 0px;
  }
  bi{
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
  }
</style>
