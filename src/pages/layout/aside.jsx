import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import CustomMenu from '@/components/layout/custom-menu.jsx'
import logo from '@/assets/images/logo.svg'

const { Sider } = Layout

const CustomAside = (props) => {
  const { menuToggle, menu } = props
  return (
    <Sider className="aside" collapsed={menuToggle}>
      <div className="logo">
        <a
          rel="noopener noreferrer"
          href="https://github.com/xitd/react-admin-template"
          target="_blank"
        >
          <img src={logo} alt="logo" />
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
