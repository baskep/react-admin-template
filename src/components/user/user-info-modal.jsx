import React from 'react'
import { Button, Modal } from 'antd'

const UserInfoModal = (props) => {
  const { isModalShow, onToggelModal } = props

  const handleToggelModal = (status) => {
    onToggelModal(status)
  }
  return (
    <Modal
      title="Basic Modal"
      visible={isModalShow}
      footer={[
        <Button key="back" onClick={() => handleToggelModal(false)}>
          取消
        </Button>,
        <Button type="primary">确定</Button>,
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default UserInfoModal
