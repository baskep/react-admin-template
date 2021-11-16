import loadable from '../utils/loadable'

// 首页
const Index = loadable(() => import(/* webpackChunkName: 'index' */ '../pages/index'))

// 通用
const ButtonView = loadable(() => import(/* webpackChunkName: 'button' */ '../pages/common/button'))
const IconView = loadable(() => import(/* webpackChunkName: 'button' */ '../pages/common/icon'))

const routes = [
  { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
  { path: '/common/button', exact: false, name: '按钮', component: ButtonView, auth: [1] },
  { path: '/common/icon', exact: false, name: '图标', component: IconView, auth: [1] },
]

export default routes
