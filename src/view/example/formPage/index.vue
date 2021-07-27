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
  </div>
</template>

<script>
export default {
  name: 'formPage',
  data() {
    return {
      // form组件库
      dataForm: {
        id: 'testForm',
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
            type: 'bigInput',
            title: '复合输入框',
            key: 'inputB',
            outAdvanced: true,
            placeholder: '请输入',
          },
          {
            type: 'inputComp',
            title: '复合输入框',
            key: 'driver1Name',
            maxlength: 50,
            clearable: true,
            autocomplete: 'on',
            selectWidth: '150px',
            showSelect: true,
            select: {
              key: 'routeName',
              type: 'bigDataSelectComp',
            },
            showButton: true,
            outAdvanced: true,
          },
          {
            type: 'selectComp',
            title: '普通下拉',
            key: 'selectD',
            placeholder: '不支持巨量数据，大量数据会卡',
          },
          {
            type: 'selectShowIdComp',
            title: '普通带标题',
            key: 'siteName',
            placeholder: '不支持巨量数据，大量数据会卡',
            custText: 'orgName',
            custValue: 'orgName',
            options: [
              {
                title: '城市',
                str: 'orgName',
                mstyle: { width: '50%' },
              },
              {
                title: '编码',
                str: 'orgCode',
                mstyle: { textAlign: 'center', width: '50%' },
              },
            ],
          },
          {
            type: 'textComp',
            title: '文字组件',
            key: 'textContent', //key值，唯一值
            color: '#ff0000',
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'nullComp', //只是占位置的，并不会显示任何东西
            key: '', //因为是占位符使用，所以key可以不设置任何值
            outAdvanced: true,
          },
          {
            type: 'timeHMSComp',
            key: 'hms',
            title: '时分秒', //标题
            editable: false, //是否允许输入编辑
          },
          {
            type: 'dateTime',
            title: '年月日',
            key: 'date',
            clearable: false,
            placeholder: '请选择年月日',
            format: 'yyyy-MM', //该属性不设置默认年月日
            valueFormat: 'yyyy-MM', //该属性不设置默认年月日
          },
          {
            type: 'dateTime',
            title: '只选择月份',
            key: 'month',
            clearable: false,
            placeholder: '请选择月份',
            timeType: 'month', //该属性不设置默认年月日
            format: 'yyyy-MM', //该属性不设置默认年月日
            valueFormat: 'yyyy-MM', //该属性不设置默认年月日
          },
          {
            type: 'radioComp',
            title: 'radio组件',
            key: 'radioComp',
            outAdvanced: true,
            startIndex: 1, //下标从1开始，而不是从0开始
          },
          {
            type: 'checkboxComp',
            key: 'isContain',
            title: 'checkbox',
            secondTitle: '带label的checkbox',
          },
          {
            type: 'checkboxComp',
            key: 'start',
            title: '',
            disabled: false,
            marginLeft: '5px',
            secondTitle: '不带label的checkbox',
          },
          {
            type: 'vxeSelect',
            key: 'vxeSelectKey',
            title: ' ',
            width: 120,
            outAdvanced: true,

            hasSlot: true, //是否 可以在当前列中再加入一个输入项，但是两个输入项的宽度需要自定义，否则都为100%
            slotData: {
              type: 'inputComp',
              key: 'driver1Name',
              maxlength: 50,
              clearable: true,
              autocomplete: 'on',
              outAdvanced: true,
              placeholder: '该组件前置下拉列表',
              width: `calc(100% - 120px)`,
            },
          },
          {
            type: 'inputComp',
            title: '双组件搭配',
            key: 'driver1Name',
            maxlength: 50,
            clearable: true,
            autocomplete: 'on',
            outAdvanced: true,
            width: '65%',

            hasSlot: true, //是否 可以在当前列中再加入一个输入项，但是两个输入项的宽度需要自定义，否则都为100%
            slotData: {
              type: 'checkboxComp',
              key: 'driver3Name',
              title: '勾选框',
              width: '30%',
            },
          },
          {
            type: 'bigDataSelectComp',
            title: '巨量单选',
            key: 'selectA',
            isHand: true,
            placeholder: '支持巨量数据',
          },
          {
            type: 'bigDataSelectComp',
            title: '巨量多选',
            key: 'selectC',
            isHand: true,
            multiple: true,
            placeholder: '支持巨量数据',
          },
          {
            type: 'bigDataSelectComp',
            title: '巨量带标题',
            key: 'selectB',
            isHand: true,
            selectType: 'selectShowIdComp',
            placeholder: '支持巨量数据和自定义标题',
            custText: 'text',
            custValue: 'value',
            options: [
              {
                title: '标题1',
                str: 'text',
                mstyle: { width: '20%' },
              },
              {
                title: '标题2',
                str: 'value',
                mstyle: { width: '40%', textAlign: 'center' },
              },
              {
                title: '标题3',
                str: 'value',
                mstyle: { width: '40%', textAlign: 'center' },
              },
            ],
          },
          {
            type: 'timeRangeComp',
            title: '时间范围', //label名称
            key: 'queryTime', //key值，唯一值
            valueFormat: 'yyyy-MM-dd HH:mm:ss', //时间格式
            disabled: false, //是否允许禁用
            defaultTime: ['12:00:00', '23:59:59'], //默认时间，如果不设置默认['00:00:00', '23:59:59']
            outAdvanced: true,
            clearable: false,
            pickerOption: {},
          },
          {
            type: 'dateRangeComp',
            title: '日期范围',
            key: 'queryTime',
            outAdvanced: true,
            clearable: false,
            pickerOptions: {},
          },
          {
            type: 'cascader',
            title: '级联选择',
            key: 'cascaderKey',
            clearable: true,
            collapseTags: true,
          },
          {
            type: 'checkgroupComp', //checkbox组
            title: 'checkgroup', //checkbox组需要label,但是必须为空格
            key: 'checkGroup',
            showPopover: true, //是否显示提示信息
            popover: [
              //如果有提示信息，设置提示内容
              {
                title: '标题1',

                content: '这是里面的内容1',
              },
              {
                title: '标题2',

                content: '这是里面的内容2',
              },
              {
                title: '标题3',

                content: '这是里面的内容3',
              },
            ]
          },
          {
            type: 'selectTree',
            title: '下拉树',
            key: 'selectTree',
            placeholder: '请选择或输入查找',
            treeObj: {
              isShowInput: false,
              key: 'tree',
              treeDeptData: [
                {
                  label: '一级 1',
                  id: 1,
                },
              ],
              checkedKeys: [],
              defaultProps: {
                children: 'children',
                label: 'label',
              },
              expandAll: false,
              showCheckbox: false,
              checkOnClickNode: true,
              checkStrictly: false,
              expandOnClickNode: false,
              lazy: true,
            },
          },
          // {
          //   type: 'nullComp', //只是占位置的，并不会显示任何东西
          //   key: '', //因为是占位符使用，所以key可以不设置任何值
          //   col:3,
          //   outAdvanced: true,
          // },
          {
            type: 'uploadComp',
            title: '自动上传',
            key: 'uploadA',
            uploadType: 'autoUpload',
            multiple: false, //如果设置未false或者去掉该属性，下方会有列表框，并且支持多选
            acceptSize: 10, //只允许上传小于10M的文件
          },
          {
            type:'uploadComp', //图片展示+预览（这里面的数据需要在imgData里面赋值）
            title:'手动上传',
            key:'uploadB',
            uploadType:'handUpload', //手动上传
            acceptSize:10  //只允许上传小于10M的文件
          },
          {
            type: 'textareaComp',
            title: 'textarea',
            rows: 4,
            minlength: '2',
            maxlength: 100,
            key: 'textarea',
          }
        ],
        model: {
          textContent: '这里是文字展示组件，后面空着的是个占位组件',
          checkGroup:[] //必须先赋值为空数组
        },
      },
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
