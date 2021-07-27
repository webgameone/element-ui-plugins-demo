<template>
  <div class="page-container">
    <div class="header clearfix">
      <p class="titleComp">form表单的详情页展示，配置label左侧展示，可以配置文字颜色和字数，也可以配置触摸文字后的文字提示</p>
      <ui-form
        ref="uiForm1"
        :formObj="dataForm1"
      ></ui-form>
      <br>
      <hr>
      <p class="titleComp">form表单的详情页展示，配置label顶部展示，可以配置文字颜色和字数，也可以配置触摸文字后的文字提示</p>
      <ui-form
        ref="uiForm2"
        :formObj="dataForm2"
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
        labelSuffix:':',
        noButton:true,
        // 表单下方的按钮组
        bottomBtnArr:[
        ],
        // form表单组件
        formArr:[
          {
            type: 'textComp',
            title: '前端',
            key: 'text1', //key值，唯一值
            color: '#ff0000'
          },
          {
            type: 'textComp',
            title: '颜色',
            key: 'text2', //key值，唯一值
            color: '#f900c3'
          },
          {
            type: 'textComp',
            title: '字数',
            key: 'text3', //key值，唯一值
            color: '#006ff9',
            textCount:8,
            showTitle: false, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '鼠标触摸',
            key: 'text4', //key值，唯一值
            color: '#008aa0',
            textCount:8,
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '详情1',
            key: 'text6', //key值，唯一值
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '详情2',
            key: 'text7', //key值，唯一值
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
           {
            type: 'textComp',
            title: '占2列详情',
            key: 'text8', //key值，唯一值
            col:2,
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '详情3',
            key: 'text6', //key值，唯一值
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '详情4',
            key: 'text7', //key值，唯一值
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '详情5',
            key: 'text8', //key值，唯一值
            col:1,
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '详情6',
            key: 'text9', //key值，唯一值
            col:1,
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          }
        ],
        model:{
          text1:'前端是一个非常有发展的职业啊，以后肯定是大前端的时代了！',
          text2:'文字的颜色可以自定义设置',
          text3:'8个字数限制，再多就不允许显示了',
          text4:'字数被限制后，鼠标触摸可显示全部的文字啊',
          text6:'不苦不累，高三无味。不拼不搏，等于白活。 就算拼个头PX流，也要跟俺冲进一本的大楼！ 考过高富帅，胜过富二代。 要成功，先发疯。',
          text7:'HTML5 是跨平台的，被设计为在不同类型的硬件（PC、平板、手机、电视机等等）之上运行',
          text8:'今天早上带着四岁的女儿来幼儿园上班，我在打扫卫生，给她一块抹布让她去擦滑滑梯，她一屁股从滑滑梯滑下来说：妈妈，擦干净啦。。。',
          text9:'精神病院的看护们带着病人们在院子里玩耍，正在热闹地玩着老鹰捉小鸡，这时候院长看见了气得大发雷霆：“简直胡闹！病人万一全部飞走了怎么办'
        }
      },
      // form组件库2
      dataForm2:{
        id:'testForm2',
        col:4,// 自定义列数
        labelWidth:100,// 自定义label的宽度
        labelSuffix:':',
        labelTop:true,
        labelPosition:'left',
        noButton:true,
        // 表单下方的按钮组
        bottomBtnArr:[
        ],
        // form表单组件
        formArr:[
          {
            type: 'textComp',
            title: '前端',
            key: 'text1', //key值，唯一值
            color: '#ff0000'
          },
          {
            type: 'textComp',
            title: '颜色',
            key: 'text2', //key值，唯一值
            color: '#f900c3'
          },
          {
            type: 'textComp',
            title: '字数',
            key: 'text3', //key值，唯一值
            color: '#006ff9',
            textCount:8,
            showTitle: false, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '鼠标触摸',
            key: 'text4', //key值，唯一值
            color: '#008aa0',
            textCount:8,
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '详情1',
            key: 'text6', //key值，唯一值
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '详情2',
            key: 'text7', //key值，唯一值
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
           {
            type: 'textComp',
            title: '占2列详情',
            key: 'text8', //key值，唯一值
            col:2,
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '详情3',
            key: 'text6', //key值，唯一值
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '详情4',
            key: 'text7', //key值，唯一值
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '详情5',
            key: 'text8', //key值，唯一值
            col:1,
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          },
          {
            type: 'textComp',
            title: '详情6',
            key: 'text9', //key值，唯一值
            col:1,
            showTitle: true, //如果有字数限制时，是否显示全部文字弹窗
          }
        ],
        model:{
          text1:'前端是一个非常有发展的职业啊，以后肯定是大前端的时代了！',
          text2:'文字的颜色可以自定义设置',
          text3:'8个字数限制，再多就不允许显示了',
          text4:'字数被限制后，鼠标触摸可显示全部的文字啊',
          text6:'不苦不累，高三无味。不拼不搏，等于白活。 就算拼个头PX流，也要跟俺冲进一本的大楼！ 考过高富帅，胜过富二代。 要成功，先发疯。',
          text7:'HTML5 是跨平台的，被设计为在不同类型的硬件（PC、平板、手机、电视机等等）之上运行',
          text8:'今天早上带着四岁的女儿来幼儿园上班，我在打扫卫生，给她一块抹布让她去擦滑滑梯，她一屁股从滑滑梯滑下来说：妈妈，擦干净啦。。。',
          text9:'精神病院的看护们带着病人们在院子里玩耍，正在热闹地玩着老鹰捉小鸡，这时候院长看见了气得大发雷霆：“简直胡闹！病人万一全部飞走了怎么办'
        }
      }
    }
  },
  created() {

  },
  mounted() {
    this.$nextTick(()=>{
    })
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
  label{
    font-weight:normal;
  }
</style>
