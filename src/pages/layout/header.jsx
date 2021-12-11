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
        <Menu.Item key="personel-setting">
          <EditOutlined />
          &nbsp; 个人设置
        </Menu.Item>
        <Menu.Item key="system-setting">
          <SettingOutlined />
          &nbsp; 系统设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="login-out">
          <span onClick={onLoginOut}>
            <LoginOutlined />
            &nbsp; 退出登录
          </span>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  )
  return (
    <Header className="header">
      <div className="left">
        {menuToggle ? (
          <MenuUnfoldOutlined style={{ fontSize: '20px' }} onClick={onMenuClick} />
        ) : (
          <MenuFoldOutlined style={{ fontSize: '20px' }} onClick={onMenuClick} />
        )}
      </div>
      <div className="right">
        <div className="mr15">
          <a rel="noopener noreferrer" href="https://github.com/sentianc" target="_blank">
            <GithubOutlined style={{ color: '#000' }} />
          </a>
        </div>
        <div className="mr15">
          <Badge dot={true} offset={[-2, 0]}>
            <a
              href="https://github.com/sentianc/react-admin-template"
              target="_blank"
              style={{ color: '#000' }}
              rel="noreferrer"
            >
              <BellOutlined />
            </a>
          </Badge>
        </div>
        <div>
          <Dropdown overlay={menu} overlayStyle={{ width: '200px' }}>
            <div className="ant-dropdown-link">
              <Avatar
                src={avatar}
                alt="avatar"
                style={{ cursor: 'pointer' }}
                shape="square"
                size="small"
              />
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
