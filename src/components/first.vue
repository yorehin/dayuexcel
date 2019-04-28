<template>
    <div id="first">
      <div style="height: 100%; display: flex; flex-direction: row; justify-content: center; margin-top: 10%; line-height: 100%">
        <!--这里放的是3个图标按钮-->
        <div id="No1" v-if="open1 == 'a'">
          <img src="../assets/已购买-点击前.png" @click="over()" height="94" width="94"/>
          <img src="../assets/霸气购买-点击前.png" @click="game()" height="94" width="94"/>
          <router-link to="/left"><img src="../assets/理性试用.png" height="94" width="94"/></router-link>
        </div>
        <div id="No2" v-else-if="open1 === 'b'">
        <img src="../assets/已购买-点击前.png" height="94" width="94"/>
        <input placeholder="请输入激活码">
        <button style="border: 0" onclick="">激活</button>
        <!--<div>545<router-link :to="course">sdf</router-link></div>-->
        </div>
        <div id="No3" v-else>
          <img src="../assets/霸气购买-点击前.png" height="94" width="94"/>
          <div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%">
            <form >
              <div id="left">
                购买说明：一个激活码可供5台电脑使用<br>
                购买信息：<input placeholder="请输入姓名"><br>
                <input placeholder="请输入邮箱"><br>
                购买数量：<input>有优惠码 支付金额128元<br>
                支付方式：<button>支付宝支付</button><button>微信支付</button><button>淘宝网购</button><br>
                <input type="submit" value="立即提交" style="background-color: #ff5f4f"/>
              </div>
            </form>
            <div id="border"></div>
            <div id="right">
              关注公众号获取优惠码<br>
              <img src="../assets/公众号二维码.png" height="136" width="136"/><br>
              扫码关注
            </div>
          </div>
        </div>


      </div>
    </div>
</template>

<script>
    export default {
        name: "first",
      data() {
          return{
            open1:'a',
            // open2:true,
            // open3:true,
            version:false,
            aa: 'aaaaa',
            list:[{}],
            startTime: null
          }
      },
      // computed:{
      //   game () {
      //     this.open1 = 'c'
      //   },
      //   over () {
      //     this.open1 = 'b'
      //     console.log('over=============================='+ this.open1)
      //   }
      // },
      methods:{
        game: function(){
          this.open1 = 'c'
        },
        over: function(){
          this.open1 = 'b'
        },
      },
    }
</script>

<style scoped>
  #first{
    /*display: flex;*/
    /*flex-direction: row;*/
    /*justify-content: center;*/
    /*align-items: center;*/

  }
  button{
    background-color: #ff5f4f;
    /*padding: 0;*/
    /*border: 0;*/
  }
  #left{
    font-size: 12px;
    color: white;
    background-color: #20283c;
  }
  #right{
    width: 38%;
    text-align: center;
    color: white;
    background-color: #20283c;
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
    height: 80%;
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
  #No1 > a{
    padding: 10%;
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
