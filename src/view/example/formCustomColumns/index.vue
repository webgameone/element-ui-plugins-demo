<template>
  <div class="page-container">
    <div class="header clearfix">
      <p class="titleComp">form组件默认每个都是一样的宽度(4列排序)</p>
      <ui-form
        ref="uiForm1"
        :formObj="dataForm1"
        @searchList="searchList"
        @formBtnClick="formBtnClick"
        @formVisibleChange="formVisibleChange"
      ></ui-form>
      <br>
      <hr>
      <p class="titleComp">通过配置非常简单的自定义每个组件的列宽(4列排序)</p>
      <ui-form
        ref="uiForm2"
        :formObj="dataForm2"
        @searchList="searchList"
        @formBtnClick="formBtnClick"
        @formVisibleChange="formVisibleChange"
      ></ui-form>
      <br>
      <hr>
      <p class="titleComp">label在顶部，也可以通过配置非常简单的自定义每个组件的列宽(5列排序)</p>
      <ui-form
        ref="uiForm3"
        :formObj="dataForm3"
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
            title:'输入框',
            key:'inputA',
            maxlength: 50,
            clearable:true,
            autocomplete:'on'
          },
          {
            type: "bigDataSelectComp",
            title: "巨量单选",
            key: "selectA",
            isHand:true,
            placeholder: "支持巨量数据"
          },
          {
            type: "bigDataSelectComp",
            title: "巨量多选",
            key: "selectC",
            isHand:true,
            multiple:true,
            placeholder: "支持巨量数据"
          },
          {
            type: "bigDataSelectComp",
            title: "巨量带标题",
            key: "selectB",
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
            title:'普通下拉',
            key:'selectD',
            custText:'content',
            custValue:'content',
            placeholder:'不支持巨量数据'
          },
          {
            type:'selectShowIdComp',
            title:'普通带标题',
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
      },
      // form组件库3
      dataForm3:{
        id:'testForm3',
        col:5,// 自定义列数
        labelWidth:10,// 自定义label的宽度
        btnInline:true,//查询按钮默认在右侧
        labelTop: true,
        labelPosition: 'left',
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
            title:'2分之一列宽',
            key:'inputA',
            col:0.5,
            maxlength: 50,
            clearable:true,
            autocomplete:'on',
            outAdvanced:true
          },
          {
            type: "bigDataSelectComp",
            title: "2分之一列宽",
            key: "selectA",
            col:0.5,
            isHand:true,
            placeholder: "支持巨量数据"
          },
          {
            type: "bigDataSelectComp",
            title: "3分之一列宽",
            key: "selectC",
            col:0.33,
            isHand:true,
            multiple:true,
            placeholder: "支持巨量数据"
          },
          {
            type: "bigDataSelectComp",
            title: "3分之一列宽",
            col:0.33,
            key: "selectB",
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
            title:'3分之一列宽',
            col:0.33,
            key:'selectD',
            custText:'content',
            custValue:'content',
            placeholder:'不支持巨量数据'
          },
          {
            type:'selectShowIdComp',
            title:'2列宽度',
            key:'selectF',
            col:2,
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
          },
          {
            type: 'timeHMSComp',
            key: 'hms',
            title: '1列宽度', //标题
            editable: false, //是否允许输入编辑
          },
          {
            type: 'cascader',
            title: '2列宽度',
            key: 'cascaderKey',
            col:2,
            clearable: true,
            collapseTags: true,
          },
          {
            type: 'timeRangeComp',
            title: '3列宽度', //label名称
            key: 'queryTime', //key值，唯一值
            col:3,
            valueFormat: 'yyyy-MM-dd HH:mm:ss', //时间格式
            disabled: false, //是否允许禁用
            defaultTime: ['12:00:00', '23:59:59'], //默认时间，如果不设置默认['00:00:00', '23:59:59']
            outAdvanced: true,
            clearable: false,
            pickerOption: {},
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
