import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import loadable from '@/utils/loadable'

import 'animate.css'
import 'antd/dist/antd.less'

import '@/assets/css/base.less'
import '@/assets/css/app.less'

const View404 = loadable(() => import(/* webpackChunkName: '404' */ './pages/others/404'))
const View500 = loadable(() => import(/* webpackChunkName: '500' */ './pages/others/500'))
const Layout = loadable(() => import(/* webpackChunkName: 'default' */ './pages/layout'))
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './pages/login'))

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/index" />} />
      <Route path="/500" component={View500} />
      <Route path="/login" component={Login} />
      <Route path="/404" component={View404} />
      <Route component={Layout} />
    </Switch>
  </Router>
)

export default App
