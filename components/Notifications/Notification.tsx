import SuccessIcon from '@/public/icons/success.svg'
import CloseIcon from '@/public/icons/close.svg'
import ErrorIcon from '@/public/icons/error.svg'
import PendingIcon from '@/public/icons/pending.svg'
import { useContext } from 'react'
import { NotificationsContext } from '@/providers/Notifications'
import UpRightArrowIcon from '@/public/icons/up-right-arrow.svg'
import { Notification } from '@/interfaces'

const Notification = () => {
  const { notifications, removeNotification } = useContext(NotificationsContext)

  if (!notifications.length) return null

  const handleDismiss = (id: string) => {
    removeNotification(id)
  }

  const getIcon = (type: Notification['type']) => {
    if (type === 'error') return <ErrorIcon />
    if (type === 'warning')
      return <PendingIcon className="animate-[spin_2s_linear_infinite]" />
    return <SuccessIcon />
  }

  return (
    <div className="w-[365px] absolute right-4 ">
      {notifications.map(({ id, title, description, type }) => (
        <div key={id} className="mb-2">
          <div
            className={`${
              type === 'error'
                ? 'bg-dangerDarkest'
                : type === 'warning'
                ? 'bg-warningDarkest'
                : 'bg-ciDarkest'
            } flex items-center p-1 rounded-t-sm justify-between `}
          >
            <div className="flex items-center gap-1">
              {getIcon(type)}
              <p>{title}</p>
            </div>
            <CloseIcon
              className="cursor-pointer"
              onClick={() => id && handleDismiss(id)}
            />
          </div>
          <div className="bg-bgBoxDarker px-2 py-1 flex gap-1 items-center rounded-b-sm justify-between">
            {description}
            <UpRightArrowIcon />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Notification
