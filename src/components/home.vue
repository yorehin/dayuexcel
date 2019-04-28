<template>
  <div>
    <div class="topRight">
      <!--<div><router-link></router-link></div>-->
      <div></div>
      <!--倒计时-->
      <p>{{hr}}时{{min}}分{{sec}}秒</p>
      <i class="iconfont icon-gengduo-rotate-90" @click="nav_fun">
        <div v-if="nav">
          <option value="1">使用指引</option>
          <option value="2">检查更新</option>
          <option value="3">意见反馈</option>
          <option value="4">关于我们</option>
        </div>
      </i>
      <i class="iconfont icon-zuixiaohua" @click="minimize_fun"></i>
      <i class="iconfont icon-zuidahua" @click="maximize_fun"></i>
      <i class="iconfont icon-guanbi" @click="close_fun"></i>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
  var gui = require('nw.gui');
  var win = gui.Window.get();
    export default {
        name: "home",
      data() {
          return{
            nav: false,
            version:false,
            aa: 'aaaaa',
            list:[{}],
            startTime: null
          }
      },
      mounted(){
        let startTime = localStorage.getItem("startTime");
        if (!startTime)
        {
          let now = Date.now()
          localStorage.setItem("startTime",now)
          this.startTime = now;
        }
        else
          this.startTime = startTime
      },
      methods:{
        minimize_fun (){
          win.minimize()

        },
        maximize_fun (){
          win.maximize()
        },
        close_fun () {
          win.close()
        },
        nav_fun () {
          this.nav = !this.nav
          win.minimize()
        },

      },
    }
</script>

<style scoped>

  .father-left{
    display: flex;
    flex-direction: column;
  }
  #left{
    font-size: 12px;
    color: white;
    background-color: #20283c;
  }
  #right{
    text-align: center;
    color: white;
    background-color: #20283c;
  }
  #app{
    background-color: #1c2438;
    width: 100vw;
    height: 100vh;

  }
  #No2{
    border: white dashed 1px;
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  #No2 > input{
    text-align: center;
  }
  #No2 > button{
    color: white;
    background-color: #ff5f4f;
  }
  #No3{
    border: white dashed 1px;
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  #border{
    height: 202px;
    width: 1px;
    border-left: 1px solid white;
  }
  .duibi{
    margin-top: 3px;
  }
  #No1{
    border: white dashed 1px;
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 10%;
  }

  #No1 > img{
    padding: 10%;
  }

  .topRight {
    display: flex;
    flex-direction: row;
    -webkit-app-region: drag;
    border-bottom: 1px solid #ccc;}

  .topRight> div{
    flex: 1;
  }

  .topRight> i {
    cursor: pointer;
    color: #fff;
    font-size: 25px;
    margin-right: 10px;
  }
  .topRight > p{
    color: white;
    /*color: white;*/
    /*background-color: white;*/
  }



  .shaixuan{
    margin-top: 3px;
  }
  .father-left{
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    background: #1C2438;
    /*height: 1080px;*/
    height: 100vh;
    width: 220px;
    float:left;
  }
  .heard-image{
    margin-left: 53px;
    margin-top: 53px;
    height: 112px;
    width: 112px;
    color: aliceblue;
  }
  .esct-p{
    text-align: center;
    font-size: 17px;
    margin-top: 47px;
  }
  .contrast{
    margin: 0 auto;
    background-color: #1a1f2a;
    margin-top: 66px;
    height: 48px;
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: row;
  }
  .contrast-div{
    clear: both;
    margin-top: 13px;
    margin-left: 75px;
    display: flex;
    width: 170px;
  }
  .contrast>img{
    width: 16px;
    height: 16px;
  }
  .contrast-img{
    margin: auto;
    background-color: aliceblue;
    height: 24px;
    width: 19px;
  }
  .screen{
    height: 48px;
    width: 100%;
    color: #fff;
    background-color: #1a1f2a;
    display: flex;
  }
  .shaixuane{
    margin-top: 13px;
    margin-left: 75px;
    display: flex;
    /*line-height: 48px;*/
    width: 170px;
  }
  .father-right{
    margin-top: 0px;
    margin-left: 220px;
    background-color: #f5f5f5;
    height: 1080px;
    width: 1700px;
  }
  .contrast-stream{
    background-color: #fff;
    height: 60px;
    width: 1700px;

  }
  .one-file{
    background-color: #42b983;
  }
  body{
    margin: 0px;
    padding: 0px;
  }











  .iconfont {
    -webkit-app-region: no-drag;
    cursor: pointer;
    font-size: 30px;
  }
  /*li{*/
  /*margin-left: 170px;*/
  /*}*/

  .iconfont.icon-jijianzhiyin{
    font-size: 16px;
  }
  .iconfont.icon-shaixuan{
    font-size: 25px;
  }
  .iconfont.icon-tubiao-{
    font-size: 25px;
  }


  bi{
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
  }

</style>
