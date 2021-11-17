import loadable from '../utils/loadable'

// 首页
const Index = loadable(() => import(/* webpackChunkName: 'index' */ '../pages/index'))

// 通用
const ButtonView = loadable(() => import(/* webpackChunkName: 'button' */ '../pages/common/button'))
const IconView = loadable(() => import(/* webpackChunkName: 'icon' */ '../pages/common/icon'))

// 导航
const DropdownView = loadable(() =>
  import(/* webpackChunkName: 'dropdown' */ '../pages/navigation/dropdown')
)
const MenuView = loadable(() => import(/* webpackChunkName: 'menu' */ '../pages/navigation/menu'))
const StepsView = loadable(() => import(/* webpackChunkName: 'step' */ '../pages/navigation/steps'))

// 表单
const BaseFormView = loadable(() =>
  import(/* webpackChunkName: 'formBase' */ '../pages/form/base-form')
)
const StepsFormView = loadable(() =>
  import(/* webpackChunkName: 'formBase' */ '../pages/form/steps-form')
)

// 其它
const routes = [
  { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
  { path: '/common/button', exact: false, name: '按钮', component: ButtonView, auth: [1] },
  { path: '/common/icon', exact: false, name: '图标', component: IconView, auth: [1] },
  { path: '/common/icon', exact: false, name: '图标', component: IconView, auth: [1] },
  { path: '/nav/dropdown', exact: false, name: '下拉菜单', component: DropdownView },
  { path: '/nav/menu', exact: false, name: '导航菜单', component: MenuView },
  { path: '/nav/steps', exact: false, name: '步骤条', component: StepsView },
  { path: '/form/base-form', exact: false, name: '基础表单', component: BaseFormView },
  { path: '/form/steps-form', exact: false, name: '步骤表单', component: StepsFormView },
]

export default routes
