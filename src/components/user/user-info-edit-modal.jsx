import React, { useRef, useState, useMemo } from 'react'
import { Button, Form, Input, Modal, Message, Spin, Select } from 'antd'
import cryptojs from 'crypto-js'

import { setUserInfo, getUserInfo } from '@/utils/auth'
import { modifyUserInfo } from '@/utils/api'

const { Option } = Select

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
}

const UserInfoModal = (props) => {
  const { userInfo, isEditModalShow, onToggleEidtModal, onCloseEditModal } = props

  const [loading, setLoading] = useState(false)

  const formRef = useRef()
  const isNameChange = useRef(false)
  const curUserInfo = getUserInfo()

  const isCurrentUser = useMemo(() => {
    return curUserInfo.id === userInfo.id
  }, [curUserInfo, userInfo])

  const hanldeSubmitUserInfo = () => {
    formRef.current.validateFields()
      .then(async(values) => {
        const { id } = userInfo
        const formData = values

        const { username, mobile, password, auth } = formData

        const param = {
          id,
          username,
          mobile,
          auth: isNaN(auth) ? curUserInfo.auth : auth,
          isNameChange: isNameChange.current,
        }

        if (password) {
          const encodePwd = cryptojs.MD5(password).toString()
          param.password = encodePwd
        }

        setLoading(true)
        const res = await modifyUserInfo(param)
        const { status, msg } = res
        setLoading(false)

        if (status !== 200) {
          Message.error(msg)
          return
        }
        Message.success('修改账号信息成功')
        if (isCurrentUser) {
          const curUserInfo = Object.assign({}, { ...userInfo }, { username, mobile })
          setUserInfo(curUserInfo)
        }
        onCloseEditModal()
      })
      .catch(() => { })
  }

  const handleChangeUserName = () => {
    const { username } = formRef.current.getFieldsValue()
    isNameChange.current = userInfo.username !== username
  }

  return (
    <Modal
      title="修改账号信息"
      visible={isEditModalShow}
      footer={[
        <Button key="cancel" onClick={onToggleEidtModal}>
          取消
        </Button>,
        <Button key="confirm" type="primary" onClick={() => hanldeSubmitUserInfo()}>
          确定
        </Button>,
      ]}
      onCancel={onToggleEidtModal}
    >
      <Spin spinning={loading}>
        <Form {...formItemLayout} ref={formRef}>
          <Form.Item
            name="username"
            label="用户名"
            initialValue={userInfo.username}
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input placeholder="请输入用户名" maxLength={11} onChange={handleChangeUserName}/>
          </Form.Item>

          <Form.Item
            name="mobile"
            label="手机号码"
            initialValue={userInfo.mobile}
            rules={[{
              required: true,
              message: '请输入手机号码!',
            }, {
              validator(_, value) {
                const reg = /^1\d{10}$/
                return !value || reg.test(value)
                  ? Promise.resolve()
                  : Promise.reject('手机号码格式不正确!')
              },
            }]}
          >
            <Input placeholder="请输入手机号码" maxLength={11} />
          </Form.Item>

          {!isCurrentUser && (
            <Form.Item
              name="auth"
              label="角色"
              initialValue={userInfo.auth}
              rules={[{
                required: true,
                message: '请选择账号角色!',
              }]}
            >
              <Select>
                <Option value={0}>普通用户</Option>
                <Option value={1}>超级管理员</Option>
              </Select>
            </Form.Item>
          )}

          <Form.Item
            name="password"
            label="新密码"
            rules={[{
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
            }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="确认密码"
            rules={[{
              validator(_, value) {
                const { password } = formRef.current.getFieldsValue()
                if (password && password !== value) {
                  return Promise.reject('两次输入的密码不一致')
                }
                return Promise.resolve()
              },
            }]}
          >
            <Input.Password placeholder="请再次输入密码" />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  )
}

export default UserInfoModal
