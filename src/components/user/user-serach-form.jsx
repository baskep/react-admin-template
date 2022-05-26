import React, { useRef } from 'react'
import { Form, Input, Row, Col, Select, Button } from 'antd'

const { Option } = Select

const UserSearchForm = (props) => {
  const { onUserSearch, onAddUserInfo, onModifyUserInfo, onSetUserStatus } = props
  const formRef = useRef()

  return (
    <div className="search-form-wrap search-form base-style">
      <div>
        <Form onFinish={onUserSearch} ref={formRef}>
          <Row>
            <Col span={4}>
              <Form.Item name="username" label="用户名">
                <Input placeholder="请输入用户名" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="mobile" label="手机号">
                <Input placeholder="请输入手机号" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="status" label="用户状态">
                <Select style={{ width: 120 }} allowClear>
                  <Option value={1}>有效</Option>
                  <Option value={0}>禁用</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  搜索
                </Button>
                <Button
                  type="primary"
                  className="search-operation-button"
                  onClick={onAddUserInfo}
                  style={{ marginLeft: '80px' }}
                >
                  新增账号信息
                </Button>
                <Button
                  type="primary"
                  className="search-operation-button"
                  onClick={onModifyUserInfo}
                >
                  修改账号信息
                </Button>
                <Button
                  type="primary"
                  className="search-operation-button"
                  onClick={() => onSetUserStatus(1)}
                >
                  启用
                </Button>
                <Button
                  type="primary"
                  className="search-operation-button"
                  onClick={() => onSetUserStatus(0)}
                >
                  禁用
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default UserSearchForm
