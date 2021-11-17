import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Input, Form, Button, Divider, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import './index.scss'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = (values) => {
    switch (values.username) {
      case 'admin':
        values.auth = 0
        break
      default:
        values.auth = 1
    }
    localStorage.setItem('user', JSON.stringify(values))
    setLoading(true)
    setTimeout(() => {
      message.success('登录成功!')
      history.push('/')
    }, 2000)
  }

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
                loading={loading}
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
