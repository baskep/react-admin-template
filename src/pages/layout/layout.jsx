import React, { useState, useEffect, useReducer, useMemo } from 'react'
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom'
import { Layout, BackTop, message } from 'antd'
import * as echarts from 'echarts/lib/echarts'
import avatar from '../../assets/images/avatar.jpg'
import routes from '../../routes'
import menus from './menu'

import './index.scss'

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

const getMenu = (menu) => {
  let newMenu = []
  const auth = JSON.parse(localStorage.getItem('user')).auth
  if (!auth) {
    return menu
  } else {
    newMenu = menu.filter((res) => res.auth && res.auth.indexOf(auth) !== -1)
    return newMenu
  }
}

const CustomLayout = () => {
  const history = useHistory()
  const location = useLocation()

  const [menu] = useState(() => {
    if (!localStorage.getItem('user')) {
      history.push('/login')
      return []
    } else {
      return getMenu(menus)
    }
  })

  const [state, dispatch] = useReducer(reducer, { menuToggle: false })

  const auth = useMemo(() => {
    const res = JSON.parse(localStorage.getItem('user'))
    return res ? res.auth : ''
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage])

  const handleMenuClick = () => {
    dispatch({ type: 'menuToggle' })
  }

  const handleloginOut = () => {
    localStorage.clear()
    history.push('/login')
    message.success('登出成功!')
  }

  const renderItem = (item, props) => {
    return !auth ? (
      <item.component {...props} />
    ) : item.auth && item.auth.indexOf(auth) !== -1 ? (
      <item.component {...props} />
    ) : (
      <Redirect to="/404" {...props} />
    )
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
      <Layout style={{ marginLeft: state.menuToggle ? '80px' : '200px', minHeight: '100vh' }}>
        <CustomHeader
          menuToggle={state.menuToggle}
          onMenuClick={handleMenuClick}
          avatar={avatar}
          onLoginOut={handleloginOut}
        />
        <Content className="content">
          <Switch>
            {routes.map((item) => {
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  exact={item.exact}
                  render={(props) => renderItem(item, props)}
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
