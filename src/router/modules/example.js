// 测试路由
export default [
  {
    path: '/defaultPage',
    name: 'defaultPage',
    component: () => import('@/view/example/defaultPage/index'),
    meta: {
        title: '页面预览'
    }
  },
  {
    path: '/formPage',
    name: 'formPage',
    component: () => import('@/view/example/formPage/index'),
    meta: {
        title: 'form组件预览'
    }
  },
  {
    path: '/formDetailPage',
    name: 'formDetailPage',
    component: () => import('@/view/example/formDetailPage/index'),
    meta: {
        title: 'form详情类页面预览'
    }
  },
  {
    path: '/formLabelTopPage',
    name: 'formLabelTopPage',
    component: () => import('@/view/example/formLabelTopPage/index'),
    meta: {
        title: 'form标题顶部显示'
    }
  },
  {
    path: '/formMutileCompPage',
    name: 'formMutileCompPage',
    component: () => import('@/view/example/formMutileCompPage/index'),
    meta: {
        title: 'form组合组件'
    }
  },
  {
    path: '/formExpand',
    name: 'formExpand',
    component: () => import('@/view/example/formExpand/index'),
    meta: {
        title: 'form展开收起和自定义按钮组'
    }
  },
];
