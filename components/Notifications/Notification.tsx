import React from 'react'
import SuccessIcon from '@/public/icons/success.svg'
import CloseIcon from '@/public/icons/close.svg'
import UpRightArrowIcon from '@/public/icons/up-right-arrow.svg'

type Notification = {
  id?: string
  title: string
  description: string
  type: 'success' | 'error' | 'warning' | 'info'
}

type NotificationProps = {
  notification: Notification
  removeNotification: (notificationId: string) => void
}

const Notification: React.FC<NotificationProps> = ({
  notification,
  removeNotification,
}) => {
  const { id, title, description, type } = notification

  const handleDismiss = () => {
    if (id) removeNotification(id)
  }

  return (
    <div className="w-[365px] h-10 absolute right-4">
      <div className="bg-ciDarkest flex items-center p-1 rounded-t-sm justify-between">
        <div className="flex items-center gap-1">
          <SuccessIcon />
          <p>{title}</p>
        </div>
        <CloseIcon className="cursor-pointer" onClick={handleDismiss} />
      </div>
      <div className="bg-bgBoxDarker px-2 py-1 flex gap-1 items-center rounded-b-sm justify-between">
        {description}
        <UpRightArrowIcon />
      </div>
    </div>
  )
}

export default Notification
