<template>
  <div class="page-container">
    <div class="header clearfix">
      <ui-form
        ref="uiForm"
        :formObj="dataForm"
        @searchList="searchList"
        @formBtnClick="formBtnClick"
        @formVisibleChange="formVisibleChange"
      ></ui-form>
    </div>

    <!-- table组件 -->
    <div class="middle">
      <ui-table
        :tableObj="tableObj"
        @tableOperation="tableOperation"
      >
      <div slot="tableTopSolt" style="color:#ff0000;height:24px;">
        <i class="el-icon-warning-outline"></i> table的高度是自适应的，如需在form和table之间插入元素，如这句话的高度24px，tbale配置项的offsetHeight也需要设置为24。
      </div>
      </ui-table>
    </div>

    <!-- 分页 -->
    <div class="footer">
      <vxe-pager
        :current-page="usageRecord.page.current"
        :page-size="usageRecord.page.size"
        :total="usageRecord.page.total"
        :page-sizes="usageRecord.pageConfig.pageSizes"
        :layouts="usageRecord.pageConfig.layouts"
        @page-change="pageChange"
      >
        <template v-slot:right>
          <span>共{{usageRecord.page.total}}条记录</span>
        </template>
      </vxe-pager>
    </div>
  </div>
</template>

<script>
export default {
  name: 'defaultPage',
  data () {
    return {
      // form组件库
      dataForm:{
        id:'testForm',
        col:4,// 自定义列数
        labelWidth:110,// 自定义label的宽度
        btnInline:true,//查询按钮默认在右侧
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
      },
      //table组件库
      tableObj:{
        loading:false,
        showFooter:true,
        notArrowDrag:true,
        offsetHeight:24,
        footerMethod:null,//这里要写上null,否则table会不断报错map ,top之类的
        col:[
          {
            type:'column',
            column:[
              {
                type:'checkbox',
                width:60,
                align:'center'
              },
              {
                type:'seq',
                title:'序号',
                width:60,
                align:'center'
              },
              {
                title:'col1',
                key:'col1',
                width:120,
                align:'center'
              },
              {
                title:'col2',
                key:'col2',
                minWidth:120,
                align:'center'
              },
              {
                title:'col3',
                key:'col3',
                width:120,
                align:'center'
              },
              {
                title:'col4',
                key:'col4',
                minwidth:120,
                align:'center'
              },
              {
                title:'col5',
                key:'col5',
                minwidth:250,
                align:'center'
              },
              {
                title:'switch',
                key:'switch',
                width:100,
                align:'center',
                fixed:'right',
                operation:true,
                outFormatter:'bool',
                child:[
                  {
                    title:'状态',
                    key:'switch',
                    onLabel:'是',
                    offLabel:'否',
                    type:'switch'
                  }
                ]
              },
              {
                title:'操作',
                key:'operation',
                width:150,
                align:'center',
                fixed:'right',
                operation:true,
                child:[
                  {
                    title: "编辑",
                    key: "modif",
                    type: "icon",
                    icon: 'iconpencil',
                    size: '18'
                  },
                  {
                    title:'删除',
                    key:'delete',
                    type:'popconfirm',
                    popTitle:'确定执行操作吗？',
                    placement:'top',

                    popconfirmType:'icon',
                    icon: 'iconshanchu4',
                    size: '18',
                    color: '#ff0000'
                  }
                ]
              }
            ]
          }
        ],
        tableData:null
      },
      //分页
      usageRecord: {
        page: {
          current: 1,
          size: 20,
          total: 0
        },
        pageConfig: {
          pageSizes: [{label: '10/条页', value: 10},{label: '20/条页', value: 20},{label: '50/条页', value: 50},{label: '100/条页', value: 100},{label: '200/条页', value: 200},{label: '500/条页', value: 500}],
          layouts: ['Sizes', 'PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'FullJump']
        }
      },
      tableTempData:[]
    }
  },
  created() {
    //创建下拉列表大数据测试
    this.getList();
    //创建table数据
    this.getTableData()
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
    //创建table数据
    getTableData(){
      this.tableTempData=[];
      for(let i=0;i<200;i++){
        let t = {
          col1:'列表数据'+i,
          col2:'今天的天气不错！刮台风呢！',
          col3:'类型'+i,
          col4:'element'+i,
          col5:'iview'+i
        }
        this.tableTempData.push(t)
      }

      this.tableObj.tableData = this.tableTempData.filter((item,index)=>{
        return index<this.usageRecord.page.size;
      })
      this.usageRecord.page.total = this.tableTempData.length;
    },
    //table操作按钮事件
    tableOperation(event, row, key, index){
      if(key=='modif'){
        this.$message.success('你点击了修改按钮')
      }else if(key=='delete'){
        this.$message.success('你点击了删除按钮')
      }else if(key=='switch'){
        this.$message.success('你执行了切换操作')
      }
    },
    //按钮触发事件
    formBtnClick(event,item){
      if(item=='btn1'){
        this.$message.success('按钮1被触发')
      }else if(item=='btn2'){
        this.$message.success('按钮2被触发')
      }
    },
    //分页事件
    pageChange(e) {
      this.usageRecord.page.current = e.currentPage;
      this.usageRecord.page.size = e.pageSize;
      //加载动画
      this.tableObj.loading = true;

      //模拟异步
      setTimeout(() => {
        this.tableObj.tableData = this.tableTempData.filter((item,index)=>{
          return  index > (e.pageSize*(e.currentPage-1))&&index < (e.pageSize*e.currentPage);
        })

        this.tableObj.loading = false;
      }, 500);
    },
  },
}
</script>

<style lang="scss">
  label{
    font-weight:normal;
  }
</style>
