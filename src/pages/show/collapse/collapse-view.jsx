import React from 'react'
import { Layout, Divider, Row, Col, Collapse } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'

import CustomBreadcrumb from '@/components/layout/custom-breadcrumb'

import './index.less'

const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

function callback() {
  // console.log(key)
}

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
}

const CollapseView = () => {
  return (
    <Layout className="animated fadeIn">
      <CustomBreadcrumb arr={['展示', '折叠面板']} />
      <div className="base-style">
        <h3>何时使用</h3>
        <Divider />
        <p>对复杂区域进行分组和隐藏，保持页面的整洁。</p>
        <p>手风琴是一种特殊的折叠面板，只允许单个内容区域展开。</p>
      </div>
      <Row>
        <Col span={24}>
          <div className="base-style">
            <Divider orientation="left">简单使用</Divider>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
              <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="base-style">
            <Divider orientation="left">手风琴</Divider>
            <Collapse accordion>
              <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="base-style">
            <Divider orientation="left">自定义样式功能</Divider>
            <Collapse
              onChange={callback}
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={() => <CaretRightOutlined />}
            >
              <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                <Collapse defaultActiveKey="1">
                  <Panel header="This is panel nest panel" key="1">
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </Panel>
              <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default CollapseView
