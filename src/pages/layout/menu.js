import {
  HomeOutlined,
  AppstoreOutlined,
  BulbOutlined,
  FormOutlined,
  PieChartOutlined,
  PaperClipOutlined,
  UserOutlined,
} from '@ant-design/icons'

const menu = [
  {
    key: '/index',
    title: '首页',
    auth: [1],
    Icon: HomeOutlined,
  },
  {
    title: '用户管理',
    key: '/user',
    auth: [1],
    subs: [{ title: '用户列表', key: '/user/list' }],
    Icon: UserOutlined,
  },
  {
    title: '通用',
    key: '/common',
    auth: [1],
    subs: [
      { title: '按钮', key: '/common/button' },
      { title: '图标', key: '/common/icon' },
    ],
    Icon: AppstoreOutlined,
  },
  {
    title: '导航',
    key: '/nav',
    subs: [
      { title: '下拉菜单', key: '/nav/dropdown' },
      { title: '导航菜单', key: '/nav/menu' },
      { title: '步骤条', key: '/nav/steps' },
    ],
    Icon: BulbOutlined,
  },
  {
    title: '表单',
    key: '/form',
    subs: [
      { title: '基础表单', key: '/form/base-form' },
      { title: '步骤表单', key: '/form/steps-form' },
    ],
    Icon: FormOutlined,
  },
  {
    title: '展示',
    key: '/show',
    subs: [
      { title: '表格', key: '/show/table' },
      { title: '折叠面板', key: '/show/collapse' },
      { title: '树形控件', key: '/show/tree' },
      { title: '标签页', key: '/show/tab' },
    ],
    Icon: PieChartOutlined,
  },
  {
    title: '其它',
    key: '/others',
    auth: [1],
    subs: [
      { title: '进度条', key: '/others/progress' },
      { title: '动画', key: '/others/animation' },
      { title: '上传', key: '/others/upload' },
      { title: '富文本', key: '/others/editor' },
      { title: '404', key: '/404' },
      { title: '500', key: '/500' },
    ],
    Icon: PaperClipOutlined,
  },
  {
    title: '关于',
    key: '/about',
    auth: [1],
    Icon: UserOutlined,
  },
]

export default menu
