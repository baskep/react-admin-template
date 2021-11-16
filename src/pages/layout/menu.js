import {
  HomeOutlined,
  AppstoreOutlined,
  BulbOutlined,
  FormOutlined,
  PieChartOutlined,
  PaperClipOutlined,
  BarsOutlined,
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
    title: '通用',
    key: '/common',
    auth: [1],
    subs: [
      { title: '按钮', key: '/common/button', Icon: '' },
      { title: '图标', key: '/common/icon', Icon: '' },
    ],
    Icon: AppstoreOutlined,
  },
  {
    title: '导航',
    key: '/nav',
    subs: [
      { title: '下拉菜单', key: '/nav/dropdown', Icon: '' },
      { title: '导航菜单', key: '/nav/menu', Icon: '' },
      { title: '步骤条', key: '/nav/steps', Icon: '' },
    ],
    Icon: BulbOutlined,
  },
  {
    title: '表单',
    key: '/form',
    subs: [
      { title: '基础表单', key: '/form/base-form', Icon: '' },
      { title: '步骤表单', key: '/form/step-form', Icon: '' },
    ],
    Icon: FormOutlined,
  },
  {
    title: '展示',
    key: '/show',
    subs: [
      { title: '表格', key: '/show/table', Icon: '' },
      { title: '折叠面板', key: '/show/collapse', Icon: '' },
      { title: '树形控件', key: '/show/tree', Icon: '' },
      { title: '标签页', key: '/show/tabs', Icon: '' },
    ],
    Icon: PieChartOutlined,
  },
  {
    title: '其它',
    key: '/others',
    auth: [1],
    subs: [
      { title: '进度条', key: '/others/progress', Icon: '' },
      { title: '动画', key: '/others/animation', Icon: '' },
      { title: '上传', key: '/others/upload', Icon: '' },
      { title: '富文本', key: '/others/editor', Icon: '' },
      { title: '404', key: '/404', Icon: '' },
      { title: '500', key: '/500', Icon: '' },
    ],
    Icon: PaperClipOutlined,
  },
  {
    title: '多级导航',
    key: '/one',
    subs: [
      {
        title: '二级',
        key: '/one/two',
        Icon: '',
        subs: [{ title: '三级', key: '/one/two/three', Icon: '' }],
      },
    ],
    Icon: BarsOutlined,
  },
  {
    title: '关于',
    key: '/about',
    auth: [1],
    Icon: UserOutlined,
  },
]

export default menu
