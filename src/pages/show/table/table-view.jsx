import React, { useMemo, useState } from 'react'
import { Layout, Divider, Table, Button } from 'antd'
import CustomBreadcrumb from '../../../components/layout/custom-breadcrumb'

import './index.scss'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}
const TableView = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [loading, setLoading] = useState(false)

  const hasSelected = useMemo(() => {
    return selectedRowKeys.length > 0
  }, [selectedRowKeys])

  const start = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSelectedRowKeys([])
    }, 1000)
  }

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = useMemo(() => {
    return {
      selectedRowKeys,
      onChange: onSelectChange,
    }
  }, [selectedRowKeys])

  return (
    <Layout className="animated fadeIn">
      <div>
        <CustomBreadcrumb arr={['展示', '树形控件']}></CustomBreadcrumb>
      </div>
      <div className="base-style">
        <h3>何时使用</h3>
        <Divider />
        <p>
          文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 树控件
          可以完整展现其中的层级关系，并具有展开收起选择等交互功能。
        </p>
      </div>
      <div className="base-style">
        <div>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
              Reload
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </div>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
      </div>
    </Layout>
  )
}

export default TableView
