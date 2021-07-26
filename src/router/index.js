import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home';

//路由全部按照模块划分文件夹，最终全部引入主路由
// 自动引入路由
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    ...[...Object.values(modules)].flat()
  ]
})
