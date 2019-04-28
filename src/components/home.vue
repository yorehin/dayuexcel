<template>
  <div>
    <div class="topRight">
      <!--<div><router-link></router-link></div>-->
      <div></div>
      <!--倒计时-->
      <!--<p>{{hr}}时{{min}}分{{sec}}秒</p>-->
      <i class="iconfont icon-gengduo-rotate-90" @click="nav_fun">
        <div v-if="nav">
          <router-link to="contrast"><option value="1">使用指引</option></router-link>
          <router-link to="stream"><option value="2">检查更新</option></router-link>
          <router-link to="contrast"><option value="3">意见反馈</option></router-link>
          <router-link to="contrast"><option value="4">关于我们</option></router-link>
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
  console.log('------home')
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
        },
        times: function(){
          let startTime = this.startTime
          let startDate = new Date()
          startDate.setTime(startTime)
          console.log('------>>>>',startDate)
          startDate.setDate(startDate.getDate()+1)
          let myDate = startDate
          var end = myDate.getTime();
          console.log(end + 'end')
          console.log(startTime + 'now')
//时间差
          var msec = end - Date.now();
          console.log(msec + 'msec')
          var day = parseInt(msec / 1000 / 60 / 60 / 24)
          var hr = parseInt(msec / 1000 / 60 / 60 % 24)
          var min = parseInt(msec / 1000 / 60 % 60)
          var sec = parseInt(msec / 1000 % 60)
          this.day = day
          this.hr = hr > 9 ? hr : '0' + hr
          this.min = min > 9 ? min : '0' + min
          this.sec = sec > 9 ? sec : '0' + sec
          console.log(`${day}天 ${hr}小时 ${min}分钟 ${sec}秒`)
          const that = this
          setTimeout(function () {
            that.times()
          }, 1000)
        },
      },
    }
</script>

<style scoped>
  #No2 > input{
    text-align: center;
  }
  #No2 > button{
    color: white;
    background-color: #ff5f4f;
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
