import React, { useEffect, useMemo, useState } from 'react'
import { Layout, Message } from 'antd'
import { cloneDeep } from 'lodash'

import CustomBreadcrumb from '@/components/layout/custom-breadcrumb'
import UserSearchForm from '@/components/user/user-serach-form'
import UserTableList from '@/components/user/user-table-list'
import UserInfoAddModal from '@/components/user/user-info-add-modal'
import UserInfoEditModal from '@/components/user/user-info-edit-modal'

import { getUserInfo } from '@/utils/auth'
import { getUserList, setUserStatus } from '@/utils/api'
import useFetch from '@/utils/hooks'

import './index.less'

const defaultSearchParam = {
  pageInfo: { pageNum: 1, pageSize: 10 },
  searchValue: {},
}

const curLoginUser = getUserInfo()

const UserList = () => {
  const [selectedValues, setSelectedValues] = useState([])
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [current, setCurrent] = useState(1)
  const [searchParam, setSearchParam] = useState(defaultSearchParam)
  const [isAddModalShow, setIsAddModalShow] = useState(false)
  const [isEditModalShow, setIsEditModalShow] = useState(false)
  const [userList, fetchUserList] = useFetch(getUserList, {})

  useEffect(() => {
    fetchUserList({
      ...searchParam.pageInfo,
      ...searchParam.searchValue,
    })
    setSelectedRowKeys([])
  }, [searchParam])

  const userInfo = useMemo(() => {
    return selectedValues.length ? selectedValues[0] : {}
  }, [selectedValues])

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

  const handleReload = () => {
    const curSearchParam = cloneDeep(searchParam)
    setSearchParam(curSearchParam)
  }

  const handleModifyUserInfo = () => {
    if (!selectedRowKeys.length) {
      Message.warning('请选中需要修改的信息')
    } else if (selectedRowKeys.length !== 1) {
      Message.warning('每次只能修改一条信息')
    } else {
      setIsEditModalShow(true)
    }
  }

  const handleCloseAddModal = () => {
    setIsAddModalShow(false)
    handleReload()
  }

  const handleCloseEditModal = () => {
    setIsEditModalShow(false)
    handleReload()
  }

  const handleSetSelectedRowKeys = (selectedRowKeys, selectedArr) => {
    setSelectedRowKeys(selectedRowKeys)
    setSelectedValues(selectedArr)
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
        handleReload()
      } else {
        Message.error('操作失败，请稍后再试')
      }
    }
  }

  return (
    <Layout>
      <CustomBreadcrumb arr={['用户管理', '用户列表']} />
      <UserSearchForm
        onUserSearch={handleUserSearch}
        onModifyUserInfo={handleModifyUserInfo}
        onSetUserStatus={handleSetUserStatus}
        onAddUserInfo={() => setIsAddModalShow(true)}
      />
      <UserTableList
        selectedRowKeys={selectedRowKeys}
        userList={userList}
        current={current}
        onSetSelectedRowKeys={handleSetSelectedRowKeys}
        onPageChange={handlePageChange}
      />
      {isAddModalShow && (
        <UserInfoAddModal
          isAddModalShow={isAddModalShow}
          onCloseAddModal={handleCloseAddModal}
          onToggleAddModal={() => setIsAddModalShow(false)}
        />
      )}
      {isEditModalShow && (
        <UserInfoEditModal
          curLoginUser={curLoginUser}
          userInfo={userInfo}
          isEditModalShow={isEditModalShow}
          onCloseEditModal={handleCloseEditModal}
          onToggleEidtModal={() => setIsEditModalShow(false)}
        />
      )}
    </Layout>
  )
}

export default UserList
