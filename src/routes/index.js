import loadable from '../utils/loadable'

// 首页
const Index = loadable(() => import(/* webpackChunkName: 'index' */ '../pages/index'))

// 用户管理
// const UserList = loadable(() => import(/* webpackChunkName: 'userList' */ '../pages/user/user-list'))

// 通用
const ButtonView = loadable(() => import(/* webpackChunkName: 'button' */ '../pages/common/button'))
const IconView = loadable(() => import(/* webpackChunkName: 'icon' */ '../pages/common/icon'))

// 导航
const DropdownView = loadable(() => import(/* webpackChunkName: 'dropdown' */ '../pages/navigation/dropdown'))
const MenuView = loadable(() => import(/* webpackChunkName: 'menu' */ '../pages/navigation/menu'))
const StepsView = loadable(() => import(/* webpackChunkName: 'step' */ '../pages/navigation/steps'))

// 表单
const BaseFormView = loadable(() => import(/* webpackChunkName: 'formBase' */ '../pages/form/base-form'))
const StepsFormView = loadable(() => import(/* webpackChunkName: 'formBase' */ '../pages/form/steps-form'))

// 展示
const CollapseView = loadable(() => import(/* webpackChunkName: 'collapse' */ '../pages/show/collapse'))
const TableView = loadable(() => import(/* webpackChunkName: 'table' */ '../pages/show/table'))
const TreeView = loadable(() => import(/* webpackChunkName: 'tree' */ '../pages/show/tree'))
const TabView = loadable(() => import(/* webpackChunkName: 'tab' */ '../pages/show/tab'))

// 其它
const ProgressView = loadable(() =>
  import(/* webpackChunkName: 'progress' */ '../pages/others/progress'))
const AnimationView = loadable(() =>
  import(/* webpackChunkName: 'animation' */ '../pages/others/animation'))
const UploadView = loadable(() => import(/* webpackChunkName: 'upload' */ '../pages/others/upload'))
const EditorView = loadable(() => import(/* webpackChunkName: 'editor' */ '../pages/others/editor'))

// 关于
const About = loadable(() => import(/* webpackChunkName: 'about' */ '../pages/about'))

// 设置
const UserSetting = loadable(() => import(/* webpackChunkName: 'userSetting' */ '../pages/setting/user'))

const routes = [
  { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
  // { path: '/user/list', exact: false, name: '用户管理', component: UserList, auth: [1] },
  { path: '/common/button', exact: false, name: '按钮', component: ButtonView, auth: [1] },
  { path: '/common/icon', exact: false, name: '图标', component: IconView, auth: [1] },
  { path: '/nav/dropdown', exact: false, name: '下拉菜单', component: DropdownView },
  { path: '/nav/menu', exact: false, name: '导航菜单', component: MenuView },
  { path: '/nav/steps', exact: false, name: '步骤条', component: StepsView },
  { path: '/form/base-form', exact: false, name: '基础表单', component: BaseFormView },
  { path: '/form/steps-form', exact: false, name: '步骤表单', component: StepsFormView },
  { path: '/show/table', exact: false, name: '表格', component: TableView },
  { path: '/show/collapse', exact: false, name: '折叠面板', component: CollapseView },
  { path: '/show/tree', exact: false, name: '折叠面板', component: TreeView },
  { path: '/show/tab', exact: false, name: '标签页', component: TabView },
  { path: '/others/progress', exact: false, name: '进度条', component: ProgressView, auth: [1] },
  { path: '/others/animation', exact: false, name: '动画', component: AnimationView, auth: [1] },
  { path: '/others/upload', exact: false, name: '上传', component: UploadView, auth: [1] },
  { path: '/others/editor', exact: false, name: '富文本', component: EditorView, auth: [1] },
  { path: '/about', exact: false, name: '关于', component: About, auth: [1] },
  { path: '/user/setting', exact: false, name: '个人设置', component: UserSetting },
]

export default routes
