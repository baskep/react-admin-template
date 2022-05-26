import React from 'react'
import { Layout, Divider } from 'antd'

import CustomBreadcrumb from '@/components/layout/custom-breadcrumb'

import './index.less'

const AboutView = () => (
  <Layout>
    <CustomBreadcrumb arr={['关于']} />
    <div className="base-style">
      <h3>关于作者</h3>
      <Divider />
      <p>这个人很懒，什么都没有留下……</p>
    </div>
  </Layout>
)

export default AboutView
