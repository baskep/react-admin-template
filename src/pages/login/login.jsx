import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Input, Form, Button, Divider, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import cryptojs from 'crypto-js'

import { useFetch } from '@/utils/hooks'
import { login } from '@/utils/api'
import { setUserToken, setUserInfo } from '@/utils/auth'

import './index.less'

const Login = () => {
  const history = useHistory()

  const [loginData, fetchLogin] = useFetch(login, { data: {}})

  const handleSubmit = async (values) => {
    const { username, password } = values
    const encodePwd = cryptojs.MD5(password).toString()
    fetchLogin({ username, password: encodePwd })

    // switch (values.username) {
    //   case 'admin':
    //     values.auth = 0
    //     break
    //   default:
    //     values.auth = 1
    // }
    // localStorage.setItem('user', JSON.stringify(values))

    // setLoading(true)
    // setTimeout(() => {
    //   message.success('登录成功!')
    //   history.push('/')
    // }, 2000)
  }

  useEffect(() => {
    if (loginData.data && Object.keys(loginData.data).length) {
      const { data, status, msg } = loginData.data
      const { token, auth, username, mobile } = data || {}
      if (status === 200) {
        setUserToken(token)
        setUserInfo({ auth, username, mobile })
        message.success('登录成功')
        history.push('/')
      } else {
        message.error(msg)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData.data])

  return (
    <Layout className="login animated fadeIn">
      <div className="model">
        <div className="login-form">
          <h3>后台管理系统</h3>
          <Divider />
          <Form onFinish={handleSubmit}>
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
              <Input
                prefix={<UserOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
              <Input
                prefix={<LockOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={loginData.loading}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default Login
