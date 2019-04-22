<template>
  <div id="stream" class="background">
    <div class="nav">
      <div class="add">
        <div class="jizhun" @click="importExcel_1">
          <div class="jiziti">
            <i class="iconfont icon-daoru"></i>&nbsp;导入Excel
            <input class="importInput" type="file" ref="importFile1"/>
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

<!--<script>-->
  <!--export default {-->
    <!--name: 'stream'-->
  <!--}-->
<!--</script>-->

<script>
  // import './Nothing.css'
  import xlsx from 'node-xlsx'
  import child_process from 'child_process'
  import fs from 'fs'
  export default {
    name: 'stream',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        fullscreenLoading: false,
        cExcel: {
          path: '',
          file: ''
        },
        dataList: [],
        pageIndex: 0,
        dataHead: [],
        cindex: 0,
        params:{
          maxYear: ''
        },
        datas:[]
      }
    },
    methods: {
      checkNumber(data){
        let numb = this.dataList[0][this.cindex] + ''
        if (numb.length!=18)
          return false
        let str = numb.substr(6,8)
        if (isNaN(str))
          return false

        return true
      },
      getResult(){
        let fN = this.cExcel.file.name.split(".")[0]
        let pathstr = this.cExcel.path.substring(0, this.cExcel.path.lastIndexOf('\\') + 1)
        if (!this.checkNumber()) {
          this.$notify({
            title: '警告',
            message: '选择的列非身份证号',
            type: 'warning'
          });
          return;
        }

        let w = new Worker('static/threads/distinct_ww.js');
        w.onmessage = (event) => {
          let data = event.data;
          if (data.res.length==0)
          {
            this.fullscreenLoading = false;
            this.$message({
              showClose: true,
              message: '没有'+this.params.maxYear+'之前的数据',
              type: 'error',
              duration: 2000
            })
            return
          }
          let buffer = xlsx.build([{name: "mySheetName", data:data.res}])
          fs.writeFile(pathstr +
            fN + this.params.maxYear+
            "之前.xlsx", buffer, (err)=> {
            console.log('----->>aaa')
            this.fullscreenLoading = false;
            child_process.exec('start ' + pathstr);
            this.$notify({
              title: '成功',
              message: '完成任务',
              type: 'success'
            });
          })
          let buffer_err = xlsx.build([{name: "mySheetName", data:data.errors}])
          fs.writeFile(pathstr +
            fN + this.params.maxYear+
            "之前-有误数据.xlsx", buffer_err, (err)=> {})
        }

        this.fullscreenLoading = true;
        w.postMessage({datas: this.datas, index: this.cindex,maxYear:this.params.maxYear});
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.getResult()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      toPageOne(){
        this.pageIndex = 0;
        this.dataList = []
        this.dataHead = []
        this.cindex = 0
        this.cExcel = {
          path: '',
          file: ''
        }
        this.params = {
          maxYear: ''
        }
        this.datas = []
      },
      importExcel_1(){
        let finput = this.$refs.importFile1;
        if (!finput.onchange)
          finput.onchange = (() => {
            console.log('----->>',finput.value)
            if (finput.value.match(/\.(xls|xlsx|xlsm)(\?.*)?$/)) {
              let file = finput.files[0];
              this.cExcel.file = file;
              this.cExcel.path = file.path;
              this.Loading = true;
              setTimeout(()=>{
                let content = xlsx.parse(fs.readFileSync(this.cExcel.path));
                this.Loading = false;
                let f1 = content[0].data;
                this.datas = f1;
                this.dataHead = f1[0];
                this.dataList = this.getExcelData(f1, 10);
                this.pageIndex = 1
              },200)
            } else {
              this.$message({
                showClose: true,
                message: '请选择正确的Excel格式文件！',
                type: 'error',
                duration: 2000
              })
            }
          });
      },
      getExcelData(list, size){
        let arr = [];
        let i = 1;
        while (i < size) {
          let it = list[i++];
          if (it)
            arr.push(it);
        }
        return arr;
      },setCindex(i){
        console.log('-----------', i);
        this.cindex = i;
      },
    }
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
