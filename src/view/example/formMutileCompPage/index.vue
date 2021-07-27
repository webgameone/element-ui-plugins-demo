<template>
  <div class="page-container">
    <div class="header clearfix">
      <p class="titleComp">当前表单3列布局，每个组件的宽度都三等分自适应</p>
      <ui-form
        ref="uiForm1"
        :formObj="dataForm1"
        @searchList="searchList"
        @formBtnClick="formBtnClick"
        @formVisibleChange="formVisibleChange"
      ></ui-form>
      <br>
      <hr>
      <p class="titleComp">每个组件内部包含2个组件，并且都带标题，可以任意组件组合使用</p>
      <ui-form
        ref="uiForm2"
        :formObj="dataForm2"
        @searchList="searchList"
        @formBtnClick="formBtnClick"
        @formVisibleChange="formVisibleChange"
      ></ui-form>
      <br>
      <hr>
      <p class="titleComp">每个组件内部包含2个组件,只有第一个组件带标题，可以任意组件组合使用</p>
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
  name: 'formPage',
  data() {
    return {
      // form组件库1
      dataForm1: {
        id: 'testForm1',
        col: 3, // 自定义列数
        labelWidth: 110, // 自定义label的宽度
        btnInline: true, //查询按钮默认在右侧
        btnArrPos: 'left', //下方按钮组默认位置
        noButton: true, //不需要查询
        // 下拉列表的options
        selectData: {
          vxeSelectKey: [
            {
              text: '吃饭',
              value: '1',
            },
            {
              text: '睡觉',
              value: '2',
            },
          ],
          //radio
          radioComp: [
            {
              title: '男人',
            },
            {
              title: '女人',
            },
            {
              title: '老人',
            },
          ],
          //级联选择
          cascaderKey: [
            {
              value: 'shanghai',
              label: '上海市',
              children: [
                {
                  value: 'qingpu',
                  label: '青浦区',
                },
                {
                  value: 'minhang',
                  label: '闵行',
                },
              ],
            },
          ],
          selectA: [],
          selectC: [],
          selectB: [],
          selectD: [],
          selectE: [],
          checkGroup:['标题1','标题2','标题3']
        },
        // form表单组件
        formArr: [
          {
            type: 'inputComp',
            title: '输入框',
            key: 'inputA',
            maxlength: 50,
            clearable: true,
            autocomplete: 'on',
            outAdvanced: true,
          },
          {
            type: 'numberInputComp', //数字输入框
            title: '数字输入框',
            key: 'brand',
            placeholder: '可以设置小数点或者整数输入，以及小数点精度',
            precision: 2, //数值精度 2-2个小数点，不设置该属性或者为0时只能输入整数
            controls: false, //是否显示右侧的数值调节按钮
            min: 0, //最小值，可以不设置
            max: 50, //最大值，可以不设置
          },
          {
            type: 'selectComp',
            title: '普通下拉',
            key: 'selectD',
            placeholder: '不支持巨量数据，大量数据会卡',
          }
        ],
        model: {
        },
      },
      // form组件库2
      dataForm2: {
        id: 'testForm2',
        col: 3, // 自定义列数
        labelWidth: 110, // 自定义label的宽度
        btnInline: true, //查询按钮默认在右侧
        btnArrPos: 'left', //下方按钮组默认位置
        noButton: true, //不需要查询
        // 下拉列表的options
        selectData: {
          vxeSelectKey: [
            {
              text: '吃饭',
              value: '1',
            },
            {
              text: '睡觉',
              value: '2',
            },
          ],
          //radio
          radioComp: [
            {
              title: '男人',
            },
            {
              title: '女人',
            },
            {
              title: '老人',
            },
          ],
          //级联选择
          cascaderKey: [
            {
              value: 'shanghai',
              label: '上海市',
              children: [
                {
                  value: 'qingpu',
                  label: '青浦区',
                },
                {
                  value: 'minhang',
                  label: '闵行',
                },
              ],
            },
          ],
          selectA: [],
          selectC: [],
          selectB: [],
          selectD: [],
          selectE: [],
          checkGroup:['标题1','标题2','标题3']
        },
        // form表单组件
        formArr: [
          {
            type: 'inputComp',
            title: '输入A',
            key: 'inputA',
            maxlength: 50,
            clearable: true,
            autocomplete: 'on',
            width: '43%',

            hasSlot: true, //是否 可以在当前列中再加入一个输入项，但是两个输入项的宽度需要自定义，否则都为100%
            needLable:true,
            secondTitleWidth:'calc(14% - 5px)',
            slotData: {
              type: 'cascader',
              title: '级联选择',
              key: 'cascaderKey',
              clearable: true,
              collapseTags: true,
              marginLeft:'5px',
              width: '43%',
            },
          },
          {
            type: "selectComp",
            title: "下拉A",
            key: "selectA",
            isHand:true,
            placeholder: "请选择或输入查找",
            width:'43%',

            hasSlot:true,//是否 可以在当前列中再加入一个输入项，但是两个输入项的宽度需要自定义，否则都为100%
            needLable:true,
            secondTitleWidth:'calc(14% - 5px)',
            slotData:{
              width:'43%',
              type: "selectComp",
              marginLeft:'5px',
              title: "下拉B",
              key: "selectB",
              custText: "content",
              custValue: "content",
              placeholder: "请选择或输入查找"
            },
          },
          {
            type: "selectComp",
            title: "下拉C",
            key: "selectC",
            isHand:true,
            placeholder: "请选择或输入查找",
            width:'43%',

            hasSlot:true,//是否 可以在当前列中再加入一个输入项，但是两个输入项的宽度需要自定义，否则都为100%
            needLable:true,
            secondTitleWidth:'calc(14% - 5px)',
            slotData:{
              type: 'timeHMSComp',
              key: 'hms',
              title: '时分秒', //标题
              editable: false, //是否允许输入编辑
              marginLeft:'5px',
              width: '43%',
            },
          }
        ],
        model: {
        },
      },
      // form组件库3
      dataForm3: {
        id: 'testForm3',
        col: 3, // 自定义列数
        labelWidth: 110, // 自定义label的宽度
        btnInline: true, //查询按钮默认在右侧
        btnArrPos: 'left', //下方按钮组默认位置
        noButton: true, //不需要查询
        // 下拉列表的options
        selectData: {
          vxeSelectKey: [
            {
              text: '吃饭',
              value: '1',
            },
            {
              text: '睡觉',
              value: '2',
            },
          ],
          //radio
          radioComp: [
            {
              title: '男人',
            },
            {
              title: '女人',
            },
            {
              title: '老人',
            },
          ],
          //级联选择
          cascaderKey: [
            {
              value: 'shanghai',
              label: '上海市',
              children: [
                {
                  value: 'qingpu',
                  label: '青浦区',
                },
                {
                  value: 'minhang',
                  label: '闵行',
                },
              ],
            },
          ],
          selectA: [],
          selectC: [],
          selectB: [],
          selectD: [],
          selectE: [],
          checkGroup:['标题1','标题2','标题3']
        },
        // form表单组件
        formArr: [
          {
            type: 'dateRangeComp',
            title: '日期范围',
            key: 'queryTime',
            outAdvanced: true,
            clearable: false,
            pickerOptions: {},
            width:'49%',

            hasSlot:true,//是否 可以在当前列中再加入一个输入项，但是两个输入项的宽度需要自定义，否则都为100%
            needLable:false,//不需要第二个标题
            slotData:{
              type: 'timeHMSComp',
              key: 'hms',
              title: '', //标题
              editable: false, //是否允许输入编辑
              width: '49%',
            },
          },
          {
            title: "下拉C",
            type: 'timeHMSComp',
            key: 'hms',
            editable: false, //是否允许输入编辑
            width:'calc(50% - 5px)',

            hasSlot:true,//是否 可以在当前列中再加入一个输入项，但是两个输入项的宽度需要自定义，否则都为100%
            needLable:true,
            secondTitleWidth:'8px',
            slotData:{
              type: 'timeHMSComp',
              key: 'hms',
              marginLeft:'2px',
              title: '-', //中间的-
              editable: false, //是否允许输入编辑
              width:'calc(50% - 5px)',
            },
          }
        ],
        model: {
        },
      }
    }
  },
  created() {
    //创建下拉列表大数据测试
    this.getList()
  },
  mounted() {
    this.$nextTick(() => {})
  },
  methods: {
    //查询按钮事件
    searchList() {
      this.$message.success('查询按钮被触发')
    },
    //创建下拉列表大数据测试
    getList() {
      let tempArr = []
      for (let i = 0; i < 300; i++) {
        tempArr.push({
          text: 'menu' + i,
          value: 'menu' + i,
        })
        this.dataForm.selectData.selectA = tempArr
        this.dataForm.selectData.selectC = tempArr
        this.dataForm.selectData.selectB = tempArr
        this.dataForm.selectData.selectD = tempArr
        this.dataForm.selectData.selectE = tempArr
      }
    },
    //按钮触发事件
    formBtnClick(event, item) {
      if (item == 'btn1') {
        this.$message.success('按钮1被触发')
      } else if (item == 'btn2') {
        this.$message.success('按钮2被触发')
      }
    },
  },
}
</script>

<style lang="scss">
label {
  font-weight: normal;
}
</style>
