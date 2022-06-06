import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Layout, Avatar, Badge } from 'antd'
import {
  SettingOutlined,
  LoginOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GithubOutlined,
  BellOutlined,
} from '@ant-design/icons'

const { Header } = Layout

const CustomHeader = (props) => {
  const { avatar, menuToggle, onMenuClick, onLoginOutClick, onSettingClick } = props
  const menu = (
    <Menu>
      <Menu.ItemGroup title="设置">
        <Menu.Divider />
        <Menu.Item key="system-setting">
          <span onClick={() => onSettingClick('system')}>
            <SettingOutlined />
            &nbsp; 系统设置
          </span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="login-out">
          <span onClick={onLoginOutClick}>
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
          <a rel="noopener noreferrer" href="" target="_blank">
            <GithubOutlined style={{ color: '#000' }} />
          </a>
        </div>
        <div className="mr15">
          <Badge dot={true} offset={[-2, 0]}>
            <a
              href=""
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
  onLoginOutClick: PropTypes.func,
  onSettingClick: PropTypes.func,
}

export default CustomHeader
