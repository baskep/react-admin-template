import React, { useMemo } from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: '账号名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
    key: 'mobile',
  },
  {
    title: '账号状态',
    dataIndex: 'status',
    key: 'status',
    render(record) {
      return record === 1 ? '有效' : '禁用'
    },
  },
]

const UserTableList = (props) => {
  const { current, selectedRowKeys, userList, onSetSelectedRowKeys, onPageChange } = props

  const dataSource = useMemo(() => {
    if (userList.data) {
      const userListData = userList.data.data
      const userListResultData = userListData.result ? userListData.result || [] : []
      const total = userListData.total || 0
      const result = []
      userListResultData.forEach((item) => {
        item.key = item.id
        result.push(item)
      })
      return { data: result, total }
    }
    return { data: [], total: 0 }
  }, [userList.data])

  const rowSelection = useMemo(() => {
    return {
      selectedRowKeys,
      onChange: onSetSelectedRowKeys,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRowKeys])

  return (
    <div className="base-style">
      <Table
        bordered
        loading={userList.loading}
        dataSource={dataSource.data}
        columns={columns}
        rowSelection={rowSelection}
        pagination={{ total: dataSource.total, current }}
        onChange={onPageChange}
      />
    </div>
  )
}

export default UserTableList
