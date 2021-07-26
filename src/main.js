// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/style/common.scss' // global css
import "@/assets/iconfont.css"
import "@/assets/z-tree/css/zTreeStyle/zTreeStyle.css"

import Vue from 'vue'
import App from './App'
import router from './router'

import ui from 'element-ui-plugins'
import Element from 'element-ui'

import XEUtils from 'XEUtils'
import Sortable from 'sortablejs'
import VXETable from 'VXETable'

//z-tree下的所有引用
import jQuery from 'jQuery'
import "@/assets/z-tree/js/jquery.ztree.core.min.js"
import "@/assets/z-tree/js/jquery.ztree.excheck.min.js"
import "@/assets/z-tree/js/jquery.ztree.exedit.min.js"
import "@/assets/z-tree/js/jquery.ztree.exhide.min.js"


//国际化
import VueI18n from 'VueI18n'
let i18n = new VueI18n({
  locale: 'en',
  messages:{
    'zh': require('@/assets/languages/zh.json'),
    'en': require('@/assets/languages/en.json')
  }
})

Vue.use(ui)
// Element
Vue.use(Element)
Vue.use(VXETable)
Vue.use(VueI18n)
Vue.prototype.Sortable = Sortable;
Vue.prototype.XEUtils = XEUtils;
Vue.prototype.VXETable = VXETable;
//jquery使用this.$$
Vue.prototype.$$ = jQuery;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
