import React, { useState } from 'react'
import { Layout, Divider, Row, Col, Menu, Button } from 'antd'

import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'

import CustomBreadcrumb from '@/components/layout/custom-breadcrumb'

import './index.less'

const { SubMenu } = Menu

const MenuView = () => {
  const [current, setCurrent] = useState('mail')
  const [collapsed, setCollapsed] = useState(false)

  const handleClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className="animated fadeIn">
      <CustomBreadcrumb arr={['导航', '下拉菜单']}></CustomBreadcrumb>
      <div className="base-style">
        <h3>何时使用</h3>
        <Divider />
        <p>
          导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。
        </p>
      </div>
      <div className="base-style">
        <Divider orientation="left">顶部导航</Divider>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Navigation One
          </Menu.Item>
          <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
            Navigation Two
          </Menu.Item>
          <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
      </div>
      <Row gutter={12}>
        <Col span={12}>
          <div className="base-style">
            <Divider orientation="left">内嵌菜单</Divider>
            <Menu
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </Col>

        <Col span={12}>
          <div className="base-style">
            <Divider orientation="left">内嵌菜单</Divider>
            <div style={{ width: 256 }}>
              <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
              </Button>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
              >
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  Option 2
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined />}>
                  Option 3
                </Menu.Item>
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                </SubMenu>
              </Menu>
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default MenuView
