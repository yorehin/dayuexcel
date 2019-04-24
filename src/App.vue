<template>
  <div id="app">
    <div class="topRight">
      <!--<div><router-link></router-link></div>-->
      <div></div>
      <!--倒计时-->
      <p>{{hr}}时{{min}}分{{sec}}秒</p>
      <i class="iconfont icon-gengduo-rotate-90" @click="minimized_fun">
        <select>
          <option value="1">我是下拉项目1</option>
          <option value="2">我是下拉项目2</option>
          <option value="3">我是下拉项目3</option>
          <option value="4">我是下拉项目4</option>
        </select>
      </i>
      <i class="iconfont icon-zuixiaohua" @click="close_fun"></i>
      <i class="iconfont icon-zuidahua" @click="close_fun"></i>
      <i class="iconfont icon-guanbi" @click="close_fun"></i>
    </div>
    <router-view></router-view>

    <!--<div style="height: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center">-->
      <!--&lt;!&ndash;这里放的是3个图标按钮&ndash;&gt;-->
      <!--&lt;!&ndash;<div id="No1" v-if="open != false">&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="./assets/已购买-点击前.png" @click="over()" height="94" width="94"/>&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="./assets/霸气购买-点击前.png" @click="game()" height="94" width="94"/>&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="./assets/理性试用.png" @click="times()" height="94" width="94"/>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--<div id="No2">-->
        <!--<img src="./assets/已购买-点击前.png" height="94" width="94"/>-->
        <!--<input value="请输入激活码">-->
        <!--<button onclick="">激活</button>-->
        <!--&lt;!&ndash;<div>545<router-link :to="course">sdf</router-link></div>&ndash;&gt;-->
      <!--</div>-->
      <!--&lt;!&ndash;<div id="No3">&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="./assets/霸气购买-点击前.png" @click="game()" height="94" width="94"/>&ndash;&gt;-->
        <!--&lt;!&ndash;<div style="display: flex; flex-direction: row">&ndash;&gt;-->
          <!--&lt;!&ndash;<div id="left">&ndash;&gt;-->
            <!--&lt;!&ndash;购买说明：一个激活码可供5台电脑使用<br>&ndash;&gt;-->
            <!--&lt;!&ndash;购买信息：<input value="请输入姓名"><br>&ndash;&gt;-->
            <!--&lt;!&ndash;<input value="请输入邮箱"><br>&ndash;&gt;-->
            <!--&lt;!&ndash;购买数量：<input>有优惠码 支付金额128元<br>&ndash;&gt;-->
            <!--&lt;!&ndash;支付方式：<button>支付宝支付</button><button>微信支付</button><button>淘宝网购</button><br>&ndash;&gt;-->
            <!--&lt;!&ndash;<button>立即购买</button>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div id="border"></div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div id="right">&ndash;&gt;-->
            <!--&lt;!&ndash;关注公众号获取优惠码<br>&ndash;&gt;-->
            <!--&lt;!&ndash;<img src="./assets/公众号二维码.png" height="136" width="136"/><br>&ndash;&gt;-->
            <!--&lt;!&ndash;扫码关注&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->


    <!--</div>-->
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
    open:false,
    version:false,
    aa: 'aaaaa',
    list:[{}],
    startTime: null
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
    close_fun () {
      win.close()
    },
    minimized_fun () {
      win.minimize()
    },
    game(){
      console.log('game')
    },
    over(){
      this.open = true
      console.log('over')
    },
    times(){
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
  component: {
    'course': course
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
