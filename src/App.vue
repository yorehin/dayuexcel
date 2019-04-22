<template>
  <div id="app">
    <div class="topRight">
      <div></div>
      <!--倒计时-->
      <div>{{time}}</div>
      <i class="iconfont icon-guanbi" @click="minimized_fun">wer</i>
      <i class="iconfont icon-zhedie" @click="close_fun">wer</i>
      <i class="iconfont icon-zhedie" @click="close_fun">wer</i>
      <i class="iconfont icon-zhedie" @click="close_fun">wer</i>
    </div>
    <div>
      <!--这里放的是3个图标按钮-->
      <div id="No1">
        <img src="./assets/已购买-点击前.png" height="94" width="94"/>
        <img src="./assets/霸气购买-点击前.png" height="94" width="94"/>
        <img src="./assets/理性试用.png" @click="times()" height="94" width="94"/></div>
    </div>
    <div class="father-left">
      <div class="heard-image">
        <img src="static/ESCT.ico" width="112px" height="112px">
      </div>
      <router-link to="/contrast" tag="bi" exact>
        <div class="contrast" >
          <div class="contrast-div">
            <i class="iconfont icon-tubiao-"></i>&nbsp;
            <div class="duibi">对比</div>
          </div>
        </div>
      </router-link>
      <router-link to="/stream" tag="bi" exact>
        <div class="screen" ><router-link to="/"></router-link>
          <div class="shaixuane">
          <i class="iconfont icon-shaixuan"></i>&nbsp;
          <div class="duibi">筛选</div>
          </div>
        </div>
      </router-link>
      <router-link to="/contrast" tag="bi" exact>
        <div class="contrast" >
          <div class="contrast-div">
            <i class="iconfont icon-tubiao-"></i>&nbsp;
            <div class="duibi">隐藏</div>
          </div>
        </div>
      </router-link>
      <router-link to="/contrast" tag="bi" exact>
        <div class="contrast" >
          <div class="contrast-div">
            <i class="iconfont icon-tubiao-"></i>&nbsp;
            <div class="duibi">对比</div>
          </div>
        </div>
      </router-link>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import bllosev from './service/bllosev'
import course from './components/course'
export default {
  name: 'app',
  // components: {Course},
  //   ratio:false,
  //   preparation:false

  data: {
    version:false,
    aa: 'aaaaa',
    list:[{}],
  },
  methods:{
    close_fun () {
      win.close()
    },
    minimized_fun () {
      win.minimize()
    },
    times(){
      var date = new Date()
      var now = date.getTime();
      var myDate=new Date()
      myDate.setDate(myDate.getDate()+1)
      var end = myDate.getTime();
      console.log(end + 'end')
      console.log(now + 'now')
//时间差
      var msec = end - now;
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
  component: {
    'course': course
  }
}
  function countdown () {
    // 目标日期时间戳
    const end = Date.parse(new Date('2017-12-01'))
    // 当前时间戳
    const now = Date.parse(new Date())
    // 相差的毫秒数
    const msec = end - now
    // 计算时分秒数
    let day = parseInt(msec / 1000 / 60 / 60 / 24)
    let hr = parseInt(msec / 1000 / 60 / 60 % 24)
    let min = parseInt(msec / 1000 / 60 % 60)
    let sec = parseInt(msec / 1000 % 60)
    // 个位数前补零
    hr = hr > 9 ? hr : '0' + hr
    min = min > 9 ? min : '0' + min
    sec = sec > 9 ? sec : '0' + sec
    // 控制台打印
    console.log(`${day}天 ${hr}小时 ${min}分钟 ${sec}秒`)
    // 一秒后递归
    setTimeout(function () {
      countdown()
    }, 1000)
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


  .duibi{
    margin-top: 3px;
  }
  #No1{
    width: 100%;
    height: 100%;
  }

  .topRight {
    display: flex;
    flex-direction: row;
    -webkit-app-region: drag;
    border-bottom: 1px solid #ccc;

    div{
      flex: 1;
    }

    i {
      cursor: pointer;
      color: #fff;
      font-size: 25px;
      margin-right: 10px;
    }

  }

  .shaixuan{
    margin-top: 3px;
  }
  .father-left{
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
