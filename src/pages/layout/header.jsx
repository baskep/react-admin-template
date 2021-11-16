import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Layout, Avatar, Badge } from 'antd'
import {
  EditOutlined,
  SettingOutlined,
  LoginOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GithubOutlined,
  BellOutlined,
} from '@ant-design/icons'

const { Header } = Layout

const CustomHeader = (props) => {
  const { avatar, menuToggle, onMenuClick, onLoginOut } = props
  const menu = (
    <Menu>
      <Menu.ItemGroup title="用户设置">
        <Menu.Divider />
        <Menu.Item>
          <EditOutlined />
          个人设置
        </Menu.Item>
        <Menu.Item>
          <SettingOutlined />
          系统设置
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item>
        <span onClick={onLoginOut}>
          <LoginOutlined />
          退出登录
        </span>
      </Menu.Item>
    </Menu>
  )
  return (
    <Header className="header">
      <div className="left">
        {menuToggle ? (
          <MenuUnfoldOutlined style={{ fontSize: '2rem' }} onClick={onMenuClick} />
        ) : (
          <MenuFoldOutlined style={{ fontSize: '2rem' }} onClick={onMenuClick} />
        )}
      </div>
      <div className="right">
        <div className="mr15">
          <a rel="noopener noreferrer" href="https://github.com/ltadpoles/react-admin" target="_blank">
            <GithubOutlined style={{ color: '#000' }} />
          </a>
        </div>
        <div className="mr15">
          <Badge dot={true} offset={[-2, 0]}>
            <a href="https://github.com/ltadpoles/react-admin" style={{ color: '#000' }}>
              <BellOutlined />
            </a>
          </Badge>
        </div>
        <div>
          <Dropdown overlay={menu} overlayStyle={{ width: '20rem' }}>
            <div className="ant-dropdown-link">
              <Avatar src={avatar} alt="avatar" style={{ cursor: 'pointer' }} />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}

CustomHeader.propTypes = {
  avatar: PropTypes.string,
  menuToggle: PropTypes.bool,
  onMenuClick: PropTypes.func,
  onLoginOut: PropTypes.func,
}

export default CustomHeader
