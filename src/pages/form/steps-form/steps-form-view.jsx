import React, { useState } from 'react'
import { Layout, Divider, Row, Col, Steps, Button, Form, Input, Select, Result } from 'antd'

import CustomBreadcrumb from '@/components/layout/custom-breadcrumb'

import './index.less'

const { Step } = Steps
const { Option } = Select

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    offset: 8,
  },
}

const FormStep1 = (props) => {
  const { onSetCurrent, onSetFormData } = props

  const hanldeSubmitFormStep1 = (values) => {
    onSetCurrent(1)
    onSetFormData(values)
  }

  return (
    <Form {...formItemLayout} onFinish={hanldeSubmitFormStep1}>
      <Form.Item
        name="username"
        label="用户名"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item
        name="method"
        label="联系方式"
        rules={[{ required: true, message: '请输入联系方式!' }]}
      >
        <Input
          addonBefore={
            <Select style={{ width: '80px' }} defaultValue="weixin">
              <Option value="weixin">微信</Option>
              <Option value="twitter">twitter</Option>
              <Option value="facebook">facebook</Option>
            </Select>
          }
          placeholder="请输入联系方式"
        />
      </Form.Item>
      <Form.Item className="form-steps-button">
        <Button type="primary" htmlType="submit">
          下一步
        </Button>
      </Form.Item>
    </Form>
  )
}

const FormStep2 = (props) => {
  const { onSetCurrent, formData } = props
  const [iconLoading, setIconLoading] = useState(false)

  const hanldeClickFormStep1 = () => {
    setIconLoading(true)
    setTimeout(() => {
      setIconLoading(false)
      onSetCurrent(2)
    }, 2000)
  }

  return (
    <Form hideRequiredMark {...formItemLayout}>
      <Form.Item label="用户名">{formData && formData.username}</Form.Item>
      <Form.Item label="联系方式">{formData && formData.method}</Form.Item>
      <Divider />
      <Form.Item {...tailFormItemLayout}>
        <Button onClick={() => onSetCurrent(0)}>上一步</Button>
        <Button
          className="form-steps2-button"
          type="primary"
          loading={iconLoading}
          onClick={hanldeClickFormStep1}
        >
          确定
        </Button>
      </Form.Item>
    </Form>
  )
}

const FormStep3 = (props) => {
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

  return (
    <Layout className="animated fadeIn">
      <div>
        <CustomBreadcrumb arr={['表单', '步骤表单']}></CustomBreadcrumb>
      </div>
      <div className="base-style">
        <h3>何时使用</h3>
        <Divider />
        <p>当用户需要分步收集不同信息时</p>
      </div>
      <Row>
        <Col span={24}>
          <div className="base-style">
            <Divider orientation="center">分步表单</Divider>
            <div>
              <Steps style={{ margin: '30px auto', maxWidth: '650px' }} current={current}>
                <Step title="填写信息"></Step>
                <Step title="确认信息"></Step>
                <Step title="完成"></Step>
              </Steps>
              {current === 0 && <FormStep1 onSetCurrent={setCurrent} onSetFormData={setFormData} />}
              {current === 1 && <FormStep2 onSetCurrent={setCurrent} formData={formData} />}
              {current === 2 && <FormStep3 onSetCurrent={setCurrent} />}
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default FormStepView
