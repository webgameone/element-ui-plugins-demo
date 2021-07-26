// 测试路由
export default [
  {
    path: '/defaultPage',
    name: 'defaultPage',
    component: () => import('@/view/example/defaultPage/index'),
    meta: {
        title: '页面预览'
    }
  }
];
