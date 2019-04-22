<template>
  <div>
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
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>
