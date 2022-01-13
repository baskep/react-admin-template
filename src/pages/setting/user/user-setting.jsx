import React, { useState } from 'react'
import { Layout, Divider, Steps, Button, Form, Input, Result } from 'antd'

import CustomBreadcrumb from '@/components/layout/custom-breadcrumb'

import { getUserInfo } from '@/utils/auth'

import './index.less'

const { Step } = Steps

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
}

const UserInfoSetForm = (props) => {
  const { onSetCurrent, onSetFormData, userInfo } = props

  const hanldeSubmitUserInfo = (values) => {
    onSetCurrent(1)
    onSetFormData(values)
  }

  return (
    <div>
      <Form {...formItemLayout} onFinish={hanldeSubmitUserInfo}>
        <Form.Item name="username" label="用户名">
          <span>{userInfo.username}</span>
        </Form.Item>
        <Form.Item
          name="mobile"
          label="手机号码"
          rules={[
            { required: true, message: '请输入手机号码!' },
            {
              validator: (_, value) => {
                const reg = /^1\d{10}$/
                return !value || reg.test(value)
                  ? Promise.resolve()
                  : Promise.reject('手机号码格式不正确!')
              },
            },
          ]}
          initialValue={userInfo.mobile}
        >
          <Input placeholder="请输入手机号码" />
        </Form.Item>
        <Divider />
        <Form.Item className="form-steps-button">
          <Button type="primary" htmlType="submit">
            下一步
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

const UserInfoConfirmForm = (props) => {
  const { onSetCurrent, formData, userInfo } = props
  const [iconLoading, setIconLoading] = useState(false)

  const hanldeConfirmUserInfo = () => {
    setIconLoading(true)
    setTimeout(() => {
      setIconLoading(false)
      onSetCurrent(2)
    }, 2000)
  }

  return (
    <div>
      <Form hideRequiredMark {...formItemLayout}>
        <Form.Item label="用户名">{userInfo.username}</Form.Item>
        <Form.Item label="联系方式">{formData && formData.mobile}</Form.Item>
        <Divider />
        <Form.Item className="form-steps-button">
          <Button onClick={() => onSetCurrent(0)}>上一步</Button>
          <Button
            className="form-steps2-button"
            type="primary"
            loading={iconLoading}
            onClick={hanldeConfirmUserInfo}
          >
            确定
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

const UserInfoSubmitForm = (props) => {
  const { onSetCurrent } = props
  return (
    <Result
      status="success"
      title="提交成功!"
      extra={[
        <Button type="primary" key="console" onClick={() => onSetCurrent(0)}>
          再次填写
        </Button>,
      ]}
    />
  )
}

const FormStepView = () => {
  const [current, setCurrent] = useState(0)
  const [formData, setFormData] = useState(null)
  const userInfo = getUserInfo()
  return (
    <Layout className="animated fadeIn">
      <div>
        <CustomBreadcrumb arr={['设置', '账号设置']}></CustomBreadcrumb>
      </div>
      <div className="base-style">
        <Divider orientation="center">账号设置</Divider>
        <div>
          <Steps style={{ margin: '30px auto', maxWidth: '650px' }} current={current}>
            <Step title="修改信息"></Step>
            <Step title="确认信息"></Step>
            <Step title="完成"></Step>
          </Steps>
          {current === 0 && (
            <UserInfoSetForm
              userInfo={userInfo}
              onSetCurrent={setCurrent}
              onSetFormData={setFormData}
            />
          )}
          {current === 1 && (
            <UserInfoConfirmForm
              formData={formData}
              userInfo={userInfo}
              onSetCurrent={setCurrent}
            />
          )}
          {current === 2 && <UserInfoSubmitForm onSetCurrent={setCurrent} />}
        </div>
      </div>
    </Layout>
  )
}

export default FormStepView
