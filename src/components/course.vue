<template>
  <div id="course">
    <div class="background">
      <div class="using-tutorials">

        <div class="shiyongzhiyin">
          <div class="feiji">
            <i class="iconfont icon-jijianzhiyin"></i>&nbsp;&nbsp;
            使用指引
          </div>

        </div>
      </div>


      <div class="page">
        <!--<div class="line"></div>-->
        <div class="duibigongneng">对比功能</div>
        <ul>
          <li class="li-class"><i class="iconfont icon-dianji"></i></li>
          <li class="li-icon"><i class="iconfont icon-daoru"></i></li>
          <li class="li-icon"><i class="iconfont icon-daoru"></i></li>
          <li class="li-icon"><i class="iconfont icon-danbiaoxuanzelie"></i></li>
          <li class="li-icon"><i class="iconfont icon-duibijieguo"></i></li>
          <li class="li-icon"><i class="iconfont icon-wancheng1"></i></li>
        </ul>
        <br>
        <ul>
          <li class="li-font">点击"对比"</li>
          <li class="li-font1">导入基准Excel</li>
          <li class="li-font2">导入次准Excel</li>
          <li class="li-font3">选择对比列</li>
          <li class="li-font4">点击"对比结果"</li>
          <li class="li-font5">完成</li>
        </ul>
        <br>
        <div class="line"></div>
        <div class="circular0">1</div>
        <div class="circular1">2</div>
        <div class="circular2">3</div>
        <div class="circular3">4</div>
        <div class="circular4">5</div>
        <div class="circular5">6</div>
        <div class="shaixuangongneng">筛选功能</div>
        <ul>
          <li class="li-class"><i class="iconfont icon-dianji"></i></li>
          <li class="li-icon"><i class="iconfont icon-daoru"></i></li>
          <li class="li-icon"><i class="iconfont icon-danbiaoxuanzelie"></i></li>
          <li class="li-icon"><i class="iconfont icon-shuru"></i></li>
          <li class="li-icon"><i class="iconfont icon-duibijieguo"></i></li>
          <li class="li-icon"><i class="iconfont icon-wancheng1"></i></li>
        </ul>
        <br>
        <ul>
          <li class="li-font6">点击"筛选"</li>
          <li class="li-font7">导入Excel</li>
          <li class="li-font8">选择筛选列</li>
          <li class="li-font9">输入筛选条件</li>
          <li class="li-font10">点击"筛选结果"</li>
          <li class="li-font11">完成</li>
        </ul>
        <div class="line2"></div>
        <div class="circular6">1</div>
        <div class="circular7">2</div>
        <div class="circular8">3</div>
        <div class="circular9">4</div>
        <div class="circular10">5</div>
        <div class="circular11">6</div>
        <div class="duibigongneng">隐藏功能</div>
        <ul>
          <li class="li-class"><i class="iconfont icon-dianji"></i></li>
          <li class="li-icon"><i class="iconfont icon-daoru"></i></li>
          <li class="li-icon"><i class="iconfont icon-danbiaoxuanzelie"></i></li>
          <li class="li-icon"><i class="iconfont icon-shuru"></i></li>
          <li class="li-icon"><i class="iconfont icon-duibijieguo"></i></li>
          <li class="li-icon"><i class="iconfont icon-wancheng1"></i></li>
        </ul>
        <br>
        <ul>
          <li class="li-font">点击"隐藏"</li>
          <li class="li-font7">导入Excel</li>
          <li class="li-font8">选择身份证列</li>
          <li class="li-font9">输入隐藏模板</li>
          <li class="li-font10">点击"导出"</li>
          <li class="li-font11">完成</li>
        </ul>
        <br>
        <div class="line"></div>
        <div class="circular0">1</div>
        <div class="circular1">2</div>
        <div class="circular2">3</div>
        <div class="circular3">4</div>
        <div class="circular4">5</div>
        <div class="circular5">6</div>
        <div class="duibigongneng">模板功能</div>
        <ul>
          <li class="li-class"><i class="iconfont icon-dianji"></i></li>
          <li class="li-icon"><i class="iconfont icon-daoru"></i></li>
          <li class="li-icon"><i class="iconfont icon-daoru"></i></li>
          <li class="li-icon"><i class="iconfont icon-duibijieguo"></i></li>
          <li class="li-icon"><i class="iconfont icon-wancheng1"></i></li>
        </ul>
        <br>
        <ul>
          <li class="li-font">点击"模板"</li>
          <li class="li-font1">导入模板Excel</li>
          <li class="li-font2">导入需修改Excel</li>
          <li class="li-font3">点击"导出"</li>
          <li class="li-font5"></li>
        </ul>
        <br>
        <div class="line3"></div>
        <div class="circular0">1</div>
        <div class="circular1">2</div>
        <div class="circular2">3</div>
        <div class="circular3">4</div>
        <div class="circular4">5</div>
      </div>

    </div>



  </div>
</template>

<script>
    export default {
      name: 'course'
    }
</script>

<style scoped>
  .background{
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-left: 220px;
    background-color: #f5f5f5;
  }
  .using-tutorials{

    margin-top: 52px;
    background-color:#ffffff;
  }
  .shiyongzhiyin{
    margin-left: 20px;
    color: #fff;
    background-color: #ff5f4f;
    width: 280px;
    height: 60px;
  }
  .feiji{
    font-size: 14px;
    float: left;
    margin-top: 24px;
    margin-left: 73px;
    margin-bottom: 23px;
  }
  .page{
    list-style-type:none;
    background-color: #fff;
    margin-left: 20px;
    margin-top: 20px;
    flex: 1;
    width: 1660px;
    /*background-repeat:repeat-x;*/
  }
  .shaixuangongneng{
    font-size: 19px;
    padding-left: 12px;
    margin-left: 20px;
    margin-top: 20px;
    width: 100px;
    height: 40px;
    color: #ff5f4f;
    line-height: 40px;
    border-left:1px solid #ff5f4f;
    display: flex;
  }
  .duibigongneng{
    font-size: 19px;
    padding-left: 12px;
    margin-left: 20px;
    margin-top: 20px;
    width: 100px;
    height: 40px;
    color: #ff5f4f;
    line-height: 40px;
    border-left:1px solid #ff5f4f;
  }
  ul{
    list-style-type:none;
    /*padding: 0px;*/
    /*margin: 0px;*/
    width: auto;

  }
  li{
    float: left;
    /*margin-left: 100px;*/
  }

  li{
    background-repeat: repeat-x;
  }
  .li-class{
    margin-left: 80px;
  }
  .li-icon{
    margin-left: 185px;
  }
  .li-font{
    margin-top: 6px;
    display: flex;
    margin-left: 50px;
  }
  .li-font1{
    margin-top: 6px;
    margin-left: 108px;
  }
  .li-font2{
    margin-top: 6px;
    margin-left: 100px;
  }
  .li-font3{
    margin-top: 6px;
    margin-left: 111px;
  }
  .li-font4{
    margin-top: 6px;
    margin-left: 101px;
  }
  .li-font5{
    margin-top: 6px;
    margin-left: 127px;
  }
  .li-font6{
    margin-top: 6px;
    margin-left: 50px;
  }
  .li-font7{
    margin-top: 6px;
    margin-left: 124px;
  }
  .li-font8{
    margin-top: 6px;
    margin-left: 127px;
  }
  .li-font9{
    margin-top: 6px;
    margin-left: 113px;
  }
  .li-font10{
    margin-top: 6px;
    margin-left: 97px;
  }
  .li-font11{
    margin-top: 6px;
    margin-left: 127px;
  }
  .circular0{
    line-height: 20px;
    text-align-last: center;
    margin-left: 120px;
    margin-top: -10px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #1c2438;
    border-radius:50%;
  }
  .circular1{
    line-height: 20px;
    text-align-last: center;
    margin-left: 315px;
    margin-top: -20px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #1c2438;
    border-radius:50%;
  }
  .circular2{
    line-height: 20px;
    text-align-last: center;
    margin-left: 525px;
    margin-top: -20px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #1c2438;
    border-radius:50%;
  }
  .circular3{
    line-height: 20px;
    text-align-last: center;
    margin-left: 730px;
    margin-top: -20px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #1c2438;
    border-radius:50%;
  }
  .circular4{
    line-height: 20px;
    text-align-last: center;
    margin-left: 925px;
    margin-top: -20px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #1c2438;
    border-radius:50%;
  }
  .circular5{
    line-height: 20px;
    text-align-last: center;
    margin-left: 1125px;
    margin-top: -20px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #1c2438;
    border-radius:50%;
  }
  .circular6{
    line-height: 20px;
    text-align-last: center;
    margin-left: 120px;
    margin-top: -10px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #1c2438;
    border-radius:50%;
  }
  .circular7{
    line-height: 20px;
    text-align-last: center;
    margin-left: 315px;
    margin-top: -20px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #1c2438;
    border-radius:50%;
  }
  .circular8{
    line-height: 20px;
    text-align-last: center;
    margin-left: 525px;
    margin-top: -20px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #1c2438;
    border-radius:50%;
  }
  .circular9{
    line-height: 20px;
    text-align-last: center;
    margin-left: 730px;
    margin-top: -20px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #1c2438;
    border-radius:50%;
  }
  .circular10{
    line-height: 20px;
    text-align-last: center;
    margin-left: 925px;
    margin-top: -20px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #1c2438;
    border-radius:50%;
  }
  .circular11{
    line-height: 20px;
    text-align-last: center;
    margin-left: 1125px;
    margin-top: -20px;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #1c2438;
    border-radius:50%;
  }
  .line{
    margin-top: 23px;
    border-top: 1px solid;
    width: 1182px;
    margin-left: 20px;
  }
  .line2{
    margin-top: 62px;
    border-top: 1px solid;
    width: 1182px;
    margin-left: 20px;
  }
  .line3{
    margin-top: 23px;
    border-top: 1px solid;
    width: 990px;
    margin-left: 20px;
  }
</style>
