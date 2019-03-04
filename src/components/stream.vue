<template>
  <div id="stream" class="background">
    <div class="nav">
      <div class="add">
        <div class="jizhun">
          <div class="jiziti">
            <i class="iconfont icon-daoru"></i>&nbsp;导入Excel
          </div>
        </div>
        <div class="cizhun">
          <div class="ciziti">
            <i class="iconfont icon-danbiaoxuanzelie"></i>&nbsp;选择筛选列
          </div>
        </div>
        <div class="xuanzeduibi">
          <div class="choiceContrast">
            <i class="iconfont icon-shuru"></i>&nbsp;输入筛选条件
          </div>
        </div>
        <div class="return">
          <i class="iconfont icon-duibijieguo"></i>&nbsp;筛选结果
        </div>
        <div class="banyuan"></div>
        <div class="overContrast">
          <div class="wanchengduibi">
            <i class="iconfont icon-wancheng"></i>&nbsp;完成筛选
          </div>
        </div>
      </div>
    </div>
    <!--<div>基准和次准-->
    <!--<div>基准</div>-->
    <!--<div>次准</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'stream'
  }
</script>
<style scoped>

  .iconfont {
    -webkit-app-region: no-drag;
    cursor: pointer;
    font-size: 30px;
  }

  .background {
    background-color: #f5f5f5;
    display: flex;
  }

  .nav {
    width: 100vw;
    height: 60px;
    background-color: #fff;
    margin-top: 52px;
  }
  .add{
    margin-left: 10px;
    display: flex;
  }
  .jizhun{
    background-color: #ff5f4f;
    width: 280px;
    height: 60px;
    margin-left: 10px;


  }
  .jiziti{
    margin-top: 10px;
    width: 289px;
    height: 40px;
    border-right: 1px solid #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .ciziti{
    margin-top: 10px;
    width: 289px;
    height: 40px;
    border-right: 1px solid #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .choiceContrast{
    margin-top: 10px;
    width: 289px;
    height: 40px;
    border-right: 1px solid #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .cizhun{
    background-color: #ff5f4f;
    width: 280px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-left: 20px;
  }
  .xuanzeduibi{
    background-color: #ff5f4f;
    width: 280px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-left: 20px;
  }
  .return{
    background-color: #ff5f4f;
    width: 280px;
    height: 60px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .banyuan{
    margin-left: 149px;
    height: 60px;
    width: 60px;
    background-color: #ff5f4f;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
  .wanchengduibi{
    margin-top: 10px;
    width: 250px;
    height: 40px;
    /*border-right: 1px solid #000;*/
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

  }
  .overContrast{
    background-color: #ff5f4f;
  }
  ul {
    list-style-type: none;
  }

  li {
    background-repeat: repeat-x;
    margin-left: 10px;
  }
</style>
