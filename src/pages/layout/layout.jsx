import React, { useState, useEffect, useReducer } from 'react'
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom'
import { Layout, BackTop, message } from 'antd'
import * as echarts from 'echarts/lib/echarts'
import avatar from '@/assets/images/avatar.jpg'
import routes from '@/routes'
import { getUserToken, getUserInfo, removeUserToken, removeUserInfo } from '@/utils/auth'
import menus from './menu'

import './index.less'

import CustomAside from './aside.jsx'
import CustomHeader from './header'
import CustomFooter from './footer.jsx'

const { Content } = Layout

const reducer = (state, action) => {
  switch (action.type) {
    case 'menuToggle':
      return { ...state, menuToggle: !state.menuToggle }
    default:
      return state
  }
}

const CustomLayout = () => {
  const history = useHistory()
  const location = useLocation()
  const userInfo = getUserInfo()
  const auth = (userInfo && userInfo.auth) || 0
  const getMenu = (menu) => {
    let newMenu = []
    if (auth === 1) {
      return menu
    }
    newMenu = menu.filter(res => !res.auth || res.auth.indexOf(auth) !== -1)
    return newMenu

  }

  const [menu] = useState(() => {
    if (!getUserToken()) {
      history.push('/login')
      return []
    }
    return getMenu(menus)

  })

  const [state, dispatch] = useReducer(reducer, { menuToggle: false })

  const handleMenuClick = () => {
    dispatch({ type: 'menuToggle' })
  }

  const handleSettingClick = (key) => {
    if (key === 'user') {
      history.push('/user/setting')
    }
  }

  const handleLoginOutClick = () => {
    removeUserToken()
    removeUserInfo()
    history.push('/login')
    message.success('登出成功')
  }

  const renderItem = (item, props) => {
    return auth || auth === 0 ? <item.component {...props} /> : <Redirect to="/404" {...props} />
  }

  useEffect(() => {
    const { pathname } = location
    let timer

    // 菜单收缩展开时 echarts 图表的自适应
    // 用不着canvas可以删除
    if (pathname === '/' || pathname === '/index') {
      timer = setTimeout(() => {
        echarts.init(document.getElementById('bar')).resize()
        echarts.init(document.getElementById('line')).resize()
        echarts.init(document.getElementById('pie')).resize()
        echarts.init(document.getElementById('pictorialBar')).resize()
        echarts.init(document.getElementById('scatter')).resize()
      }, 500)
    } else {
      timer = null
    }
    return () => {
      timer && clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <Layout className="app">
      <BackTop />
      <CustomAside menuToggle={state.menuToggle} menu={menu} />
      <Layout style={{ marginLeft: state.menuToggle ? '80px' : '200px', minHeight: '100vh', minWidth: '1200px' }}>
        <CustomHeader
          menuToggle={state.menuToggle}
          onMenuClick={handleMenuClick}
          onLoginOutClick={handleLoginOutClick}
          onSettingClick={handleSettingClick}
          avatar={avatar}
        />
        <Content className="content">
          <Switch>
            {routes.map((item) => {
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  exact={item.exact}
                  render={props => renderItem(item, props)}
                />
              )
            })}
            <Redirect to="/404" />
          </Switch>
        </Content>
        <CustomFooter />
      </Layout>
    </Layout>
  )
}

export default CustomLayout
