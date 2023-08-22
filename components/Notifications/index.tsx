import React from 'react'
import Button from '@ui/Button'
import { useContext } from 'react'
import { NotificationsContext } from '@/providers/Notifications'
import Card from '@ui/Card'

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
    <Card title="Notifications">
      <div className="space-y-5">
        <Button intent="successDark" onClick={handleShowSuccess}>
          Success Notification
        </Button>
        <Button intent="pendingDark" onClick={handleShowPending}>
          Pending Notification
        </Button>

        <Button intent="dangerDark" onClick={handleShowDanger}>
          Pending Notification
        </Button>
      </div>
    </Card>
  )
}

export default Notifications
