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
    path: '/formNumerColumns',
    name: 'formNumerColumns',
    component: () => import('@/view/example/formNumerColumns/index'),
    meta: {
        title: 'form组件自定义列数排列'
    }
  },
  {
    path: '/formCustomColumns',
    name: 'formCustomColumns',
    component: () => import('@/view/example/formCustomColumns/index'),
    meta: {
        title: 'form组件的列宽'
    }
  },
  {
    path: '/formFixedWidth',
    name: 'formFixedWidth',
    component: () => import('@/view/example/formFixedWidth/index'),
    meta: {
        title: 'form组件固定宽度'
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
    path: '/formCollapse',
    name: 'formCollapse',
    component: () => import('@/view/example/formCollapse/index'),
    meta: {
        title: '单个form折叠展示'
    }
  },
  {
    path: '/formLabelWidthPage',
    name: 'formLabelWidthPage',
    component: () => import('@/view/example/formLabelWidthPage/index'),
    meta: {
        title: 'form Label宽度设置'
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
  {
    path: '/formDefaultValue',
    name: 'formDefaultValue',
    component: () => import('@/view/example/formDefaultValue/index'),
    meta: {
        title: 'form默认值'
    }
  },
  {
    path: '/popup',
    name: 'popup',
    component: () => import('@/view/example/popupPage/index'),
    meta: {
        title: '弹窗组件'
    }
  },
  {
    path: '/tableFitHeight',
    name: 'tableFitHeight',
    component: () => import('@/view/example/tableFitHeight/index'),
    meta: {
        title: 'table自适应高度'
    }
  },
  {
    path: '/noPagerTable',
    name: 'noPagerTable',
    component: () => import('@/view/example/noPagerTable/index'),
    meta: {
        title: '无分页的table'
    }
  },
  {
    path: '/tabsTable',
    name: 'tabsTable',
    component: () => import('@/view/example/tabsTable/index'),
    meta: {
        title: '标签页下的table'
    }
  },
];
