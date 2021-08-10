<template>
  <div class="page-container">
    <div class="header clearfix">
      <p class="titleComp">label宽度统一设置为100px</p>
      <ui-form
        ref="uiForm1"
        :formObj="dataForm1"
        @searchList="searchList"
        @formBtnClick="formBtnClick"
        @formVisibleChange="formVisibleChange"
      ></ui-form>
      <br>
      <hr>
      <p class="titleComp">label宽度统一设置为150px</p>
      <ui-form
        ref="uiForm2"
        :formObj="dataForm2"
        @searchList="searchList"
        @formBtnClick="formBtnClick"
        @formVisibleChange="formVisibleChange"
      ></ui-form>
      <br>
      <hr>
      <p class="titleComp">label顶部显示,label宽度统一设置为100px,因为左边没有了label,组件居中显示更加合理，此时label的宽度将会变成每个组件的左右各50px间距</p>
      <ui-form
        ref="uiForm3"
        :formObj="dataForm3"
        @searchList="searchList"
        @formBtnClick="formBtnClick"
        @formVisibleChange="formVisibleChange"
      ></ui-form>
      <br>
      <hr>
      <p class="titleComp">label顶部显示,label宽度统一设置为0，所有的组件将会平均宽度分布</p>
      <ui-form
        ref="uiForm4"
        :formObj="dataForm4"
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
        labelWidth:150,// 自定义label的宽度
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
            autocomplete:'on',
            outAdvanced:true
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
      // form组件库3
      dataForm3:{
        id:'testForm3',
        col:4,// 自定义列数
        labelWidth:100,// 自定义label的宽度
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
            title:'输入框',
            key:'inputA',
            maxlength: 50,
            clearable:true,
            autocomplete:'on',
            outAdvanced:true
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
      // form组件库4
      dataForm4:{
        id:'testForm4',
        col:4,// 自定义列数
        labelWidth:0,// 自定义label的宽度
        labelTop: true,
        labelPosition: 'left',
        noButton:true,//不显示查询和重置按钮
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
            autocomplete:'on',
            outAdvanced:true
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
      // form组件库5
      dataForm5:{
        id:'testForm5',
        col:4,// 自定义列数
        labelWidth:100,// 自定义label的宽度
        btnInline:false,//查询按钮默认在右侧
        btnArrPos:'left',//下方按钮组默认位置
        needAdvanced:true,
        // 表单下方的按钮组
        bottomBtnArr:[
          {
            title:'按钮1',
            key:'btn1',
            type:'primary',
            disabled:false,
            icon:'el-icon-download'
          },
          {
            title:'按钮2',
            key:'btn2',
            icon:'el-icon-setting'
          }
        ],
        // 下拉列表的options
        selectData:{
          vxeSelectKey:[
            {
              text:'吃饭',
              value:'1'
            },
            {
              text:'睡觉',
              value:'2'
            }
          ],
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
            autocomplete:'on',
            outAdvanced:true
          },
          {
            type: "vxeSelect",
            key: "vxeSelectKey",
            title: " ",
            width:120,
            outAdvanced:true,

            hasSlot: true, //是否 可以在当前列中再加入一个输入项，但是两个输入项的宽度需要自定义，否则都为100%
            slotData: {
              type: "inputComp",
              key: "driver1Name",
              maxlength: 50,
              clearable: true,
              autocomplete: "on",
              outAdvanced: true,
              placeholder: "该组件前置下拉列表",
              width: `calc(100% - 120px)`
            }
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
