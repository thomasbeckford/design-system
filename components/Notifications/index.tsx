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

  const handleShowPending = () => {
    showNotification({
      title: 'Approve pending',
      description: 'Approving FTM',
      type: 'warning',
    })
  }

  const handleShowDanger = () => {
    showNotification({
      title: 'Farm deposit failed',
      description: 'Claiming 1003.44 TOKENS',
      type: 'error',
    })
  }

  return (
    <div className="flex flex-col gap-5 w-1/6">
      <Button intent="success" onClick={handleShowSuccess}>
        Show Success Notification
      </Button>
      <Button intent="pending" onClick={handleShowPending}>
        Show Pending Notification
      </Button>

      <Button intent="danger" onClick={handleShowDanger}>
        Show Pending Notification
      </Button>
    </div>
  )
}

export default Notifications
