import React, { useRef } from 'react'
import { Button, Form, Input, Modal } from 'antd'

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
}

const UserInfoModal = (props) => {
  const { userInfo = {}, isModalShow, onToggelModal } = props
  const formRef = useRef()

  const handleToggelModal = (status) => {
    onToggelModal(status)
  }

  const hanldeSubmitUserInfo = () => {
    // to do
    // 提交用户信息修改
    // onSubmitUserInfo
    console.log(formRef.current.getFieldsValue())
    console.log(userInfo)
  }

  return (
    <Modal
      title="修改用户信息"
      visible={isModalShow}
      footer={[
        <Button key="cancel" onClick={() => handleToggelModal(false)}>
          取消
        </Button>,
        <Button key="confirm" type="primary" onClick={() => hanldeSubmitUserInfo()}>
          确定
        </Button>,
      ]}
    >
      <Form {...formItemLayout} ref={formRef}>
        <Form.Item
          name="username"
          label="用户名"
          initialValue={userInfo.username}
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input placeholder="请输入用户名" maxLength={11} />
        </Form.Item>

        <Form.Item
          name="mobile"
          label="手机号码"
          initialValue={userInfo.mobile}
          rules={[
            { required: true, message: '请输入手机号码!' },
            {
              validator(_, value) {
                const reg = /^1\d{10}$/
                return !value || reg.test(value)
                  ? Promise.resolve()
                  : Promise.reject('手机号码格式不正确!')
              },
            },
          ]}
        >
          <Input placeholder="请输入手机号码" maxLength={11} />
        </Form.Item>
        <Form.Item
          name="password"
          label="新密码"
          rules={[
            {
              validator(_, value) {
                const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/
                if (value) {
                  if (value.length < 8 || value.length > 30) {
                    return Promise.reject('密码长度8-30位')
                  }
                  if (!passwordReg.test(value)) {
                    return Promise.reject('密码必须同时包含大写字母、小写字母和数字')
                  }
                }
                return Promise.resolve()
              },
            },
          ]}
        >
          <Input.Password placeholder="请再次输入密码" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="确认密码"
          rules={[
            {
              validator(_, value) {
                const { password } = formRef.current.getFieldsValue()
                if (password && password !== value) {
                  return Promise.reject('两次输入的密码不一致')
                }
                return Promise.resolve()
              },
            },
          ]}
        >
          <Input.Password placeholder="请输入需要修改的密码，非必填项" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UserInfoModal
