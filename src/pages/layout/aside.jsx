import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import CustomMenu from '../../components/layout/custom-menu.jsx'

const { Sider } = Layout

const CustomAside = (props) => {
  const { menuToggle, menu } = props
  return (
    <Sider className="aside" collapsed={menuToggle}>
      <div className="logo">
        <a rel="noopener noreferrer" href="https://github.com/xtid" target="_blank">
          <GithubOutlined style={{ fontSize: '3.8rem', color: '#fff' }} />
        </a>
      </div>
      <CustomMenu menu={menu}></CustomMenu>
    </Sider>
  )
}

CustomAside.propTypes = {
  menuToggle: PropTypes.bool,
  menu: PropTypes.array.isRequired,
}

export default CustomAside
