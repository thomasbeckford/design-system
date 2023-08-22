import React from 'react'
import Button from '@ui/Button'
import { useContext } from 'react'
import { NotificationsContext } from '@/providers/Notifications'

const Notifications: React.FC = () => {
  const { showNotification } = useContext(NotificationsContext)

  const handleShowSuccess = () => {
    showNotification({
      title: 'Add liquidity successful',
      description: 'Adding 3 tokens to liquidity pool',
      type: 'success',
    })
  }

  return (
    <div>
      <Button onClick={handleShowSuccess}>Show Success Notification</Button>
    </div>
  )
}

export default Notifications
