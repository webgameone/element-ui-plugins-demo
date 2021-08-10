//固定宽度
<template>
  <div class="page-container">
    <div class="header clearfix">
      <p class="titleComp">form设置每个组件的固定宽度</p>
      <ui-form
        ref="uiForm1"
        :formObj="dataForm1"
        @searchList="searchList"
        @formBtnClick="formBtnClick"
        @formVisibleChange="formVisibleChange"
      ></ui-form>
      <br>
      <hr>
      <p class="titleComp">form自适应浏览器宽度(4列排序)</p>
      <ui-form
        ref="uiForm2"
        :formObj="dataForm2"
        @searchList="searchList"
        @formBtnClick="formBtnClick"
        @formVisibleChange="formVisibleChange"
      ></ui-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'defaultPage',
  data () {
    return {
      // form组件库1
      dataForm1:{
        id:'testForm1',
        labelWidth:100,// 自定义label的宽度
        fixedWidth:true,
        noButton:true,
        // 下拉列表的options
        selectData:{
          selectA:[],
          selectC:[],
          selectB:[],
          selectD:[],
          selectF:[]
        },
        // form表单组件
        formArr:[
          {
            type:'inputComp',
            title:'宽度100',
            key:'inputA',
            maxlength: 50,
            width:100,
            clearable:true,
            autocomplete:'on'
          },
          {
            type: "bigDataSelectComp",
            title: "宽度150",
            key: "selectA",
            width:150,
            isHand:true,
            placeholder: "支持巨量数据"
          },
          {
            type: "bigDataSelectComp",
            title: "宽度220",
            key: "selectC",
            width:220,
            isHand:true,
            multiple:true,
            placeholder: "支持巨量数据"
          },
          {
            type: "bigDataSelectComp",
            title: "宽度300",
            key: "selectB",
            width:300,
            isHand:true,
            selectType:'selectShowIdComp',
            placeholder: "支持巨量数据和自定义标题",
            custText:'text',
            custValue:'value',
            options:[
              {
                title:'标题1',
                str:'text',
                mstyle:{width:'20%'}
              },
              {
                title:'标题2',
                str:'value',
                mstyle:{width:'40%',textAlign:'center',}
              },
              {
                title:'标题3',
                str:'value',
                mstyle:{width:'40%',textAlign:'center',}
              },
            ]
          },
          {
            type:'selectComp',
            title:'宽度500',
            key:'selectD',
            width:500,
            custText:'content',
            custValue:'content',
            placeholder:'不支持巨量数据'
          },
          {
            type:'selectShowIdComp',
            title:'宽度250',
            width:250,
            key:'selectF',
            placeholder:'不支持巨量数据',
            custText:'orgName',
            custValue:'orgName',
            options:[
              {
                title:'城市',
                str:'orgName',
                mstyle:{width:'50%'}
              },
              {
                title:'编码',
                str:'orgCode',
                mstyle:{textAlign:'center',width:'50%'}
              },
            ]
          }
        ],
        model:{
        }
      },
      // form组件库2
      dataForm2:{
        id:'testForm2',
        col:4,// 自定义列数
        labelWidth:100,// 自定义label的宽度
        btnInline:true,//查询按钮默认在右侧
        btnArrPos:'left',//下方按钮组默认位置
        noButton:true,
        // 下拉列表的options
        selectData:{
          selectA:[],
          selectC:[],
          selectB:[],
          selectD:[],
          selectF:[]
        },
        // form表单组件
        formArr:[
          {
            type:'inputComp',
            title:'1列宽度',
            key:'inputA',
            maxlength: 50,
            clearable:true,
            autocomplete:'on',
            outAdvanced:true
          },
          {
            type: "bigDataSelectComp",
            title: "2列宽度",
            key: "selectA",
            isHand:true,
            col:2,
            placeholder: "支持巨量数据"
          },
          {
            type: "bigDataSelectComp",
            title: "1列宽度",
            key: "selectC",
            isHand:true,
            multiple:true,
            placeholder: "支持巨量数据"
          },
          {
            type: "bigDataSelectComp",
            title: "3列宽度",
            key: "selectB",
            col:3,
            isHand:true,
            selectType:'selectShowIdComp',
            placeholder: "支持巨量数据和自定义标题",
            custText:'text',
            custValue:'value',
            options:[
              {
                title:'标题1',
                str:'text',
                mstyle:{width:'20%'}
              },
              {
                title:'标题2',
                str:'value',
                mstyle:{width:'40%',textAlign:'center',}
              },
              {
                title:'标题3',
                str:'value',
                mstyle:{width:'40%',textAlign:'center',}
              },
            ]
          },
          {
            type:'selectComp',
            title:'1列宽度',
            key:'selectD',
            custText:'content',
            custValue:'content',
            placeholder:'不支持巨量数据'
          },
          {
            type:'selectShowIdComp',
            title:'4列宽度',
            key:'selectF',
            col:4,
            placeholder:'不支持巨量数据',
            custText:'orgName',
            custValue:'orgName',
            options:[
              {
                title:'城市',
                str:'orgName',
                mstyle:{width:'50%'}
              },
              {
                title:'编码',
                str:'orgCode',
                mstyle:{textAlign:'center',width:'50%'}
              },
            ]
          }
        ],
        model:{
        }
      }
    }
  },
  created() {
    //创建下拉列表大数据测试
    this.getList();
  },
  mounted() {
    this.$nextTick(()=>{
    })
  },
  methods: {
    //查询按钮事件
    searchList() {
      this.$message.success('查询按钮被触发')
    },
    //创建下拉列表大数据测试
    getList(){
      let tempArr = []
      for(let i = 0; i < 10000; i++){
          tempArr.push({
            text: "menu" + i,
            value: "menu" + i
          })
          this.dataForm.selectData.selectA = tempArr;
          this.dataForm.selectData.selectC = tempArr;
          this.dataForm.selectData.selectB = tempArr;
      }
    },
    //按钮触发事件
    formBtnClick(event,item){
      if(item=='btn1'){
        this.$message.success('按钮1被触发')
      }else if(item=='btn2'){
        this.$message.success('按钮2被触发')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  label{
    font-weight:normal;
  }
</style>
