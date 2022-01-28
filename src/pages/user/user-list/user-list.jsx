import React, { useEffect, useState } from 'react'
import { Layout, Message } from 'antd'
import { cloneDeep } from 'lodash'

import CustomBreadcrumb from '@/components/layout/custom-breadcrumb'
import UserSearchForm from '@/components/user/user-serach-form'
import UserTableList from '@/components/user/user-table-list'
import UserInfoModal from '@/components/user/user-info-modal'

import { getUserList, setUserStatus } from '@/utils/api'
import useFetch from '@/utils/hooks'

import './index.less'

const defaultSearchParam = {
  pageInfo: { pageNum: 1, pageSize: 10 },
  searchValue: {},
}

const UserList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [current, setCurrent] = useState(1)
  const [searchParam, setSearchParam] = useState(defaultSearchParam)
  const [isModalShow, setIsModalShow] = useState(false)
  const [userList, fetchUserList] = useFetch(getUserList, {})

  useEffect(() => {
    fetchUserList({
      ...searchParam.pageInfo,
      ...searchParam.searchValue,
    })
    setSelectedRowKeys([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParam])

  const handleUserSearch = (value) => {
    const param = {}
    Object.keys(value).forEach((key) => {
      if (value[key] || value[key] === 0) {
        param[key] = value[key]
      }
    })
    setSearchParam({
      pageInfo: { pageNum: 1, pageSize: 10 },
      searchValue: param,
    })
    setCurrent(1)
  }

  const handleToggelModal = (status) => {
    setIsModalShow(status)
  }

  const handleModifyUserInfo = () => {
    if (!selectedRowKeys.length) {
      Message.warning('请选中所需要修改的信息')
    }
    // to do 修改用户信息
  }

  const handleSetSelectedRowKeys = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const handlePageChange = (value) => {
    const { current } = value
    const curSearchParam = cloneDeep(searchParam)
    curSearchParam.pageInfo.pageNum = current

    setSearchParam(curSearchParam)
    setCurrent(current)
  }

  const handleSetUserStatus = async (status) => {
    if (!selectedRowKeys.length) {
      Message.warning(`请选中所需要${status ? '禁用' : '启用'}的用户`)
    } else {
      const result = await setUserStatus({ selectedRowKeys, status })
      if (result.status === 200) {
        Message.success('操作成功')
        const curSearchParam = cloneDeep(searchParam)
        setSearchParam(curSearchParam)
      } else {
        Message.error('操作失败，请稍后再试')
      }
    }
  }

  return (
    <Layout>
      <CustomBreadcrumb arr={['用户管理', '用户列表']}></CustomBreadcrumb>
      <UserSearchForm
        onUserSearch={handleUserSearch}
        onModifyUserInfo={handleModifyUserInfo}
        onSetUserStatus={handleSetUserStatus}
      ></UserSearchForm>
      <UserTableList
        selectedRowKeys={selectedRowKeys}
        userList={userList}
        current={current}
        onSetSelectedRowKeys={handleSetSelectedRowKeys}
        onPageChange={handlePageChange}
      ></UserTableList>
      <UserInfoModal isModalShow={isModalShow} onToggelModal={handleToggelModal}></UserInfoModal>
    </Layout>
  )
}

export default UserList
