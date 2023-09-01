'use client'

import React, { ReactNode, createContext, useState, useEffect } from 'react'
import Notification from '@/components/Notifications/Notification'

type NotificationContextProps = {
  showNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (notificationId: string) => void
  notifications: Notification[]
}

type NotificationProviderProps = {
  children: ReactNode
}

export const NotificationsContext = createContext<NotificationContextProps>(
  {} as NotificationContextProps
)

export const NotificationsProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Date.now().toString() // Using Date.now() as ID
    const newNotification = { ...notification, id }
    setNotifications([...notifications, newNotification])
  }

  const removeNotification = (notificationId: string) => {
    if (!notificationId) return
    const updatedNotifications = notifications.filter(
      (n) => n.id !== notificationId
    )
    setNotifications(updatedNotifications)
  }

  const showNotification = (notification: Omit<Notification, 'id'>) => {
    addNotification(notification)
  }
  useEffect(() => {
    const notificationCleanup = setInterval(() => {
      const currentTime = Date.now()
      const updatedNotifications = notifications
        .map((notification) => {
          const notificationTime = parseInt(notification.id)
          const elapsedTime = currentTime - notificationTime

          const fadeDuration = 1800

          if (elapsedTime <= fadeDuration) {
            // Calculate the opacity based on the elapsed time
            const opacity = 1 - elapsedTime / fadeDuration
            return { ...notification, opacity }
          } else {
            return null // Notification has faded out completely
          }
        })
        .filter((notification) => notification !== null) // Remove null values

      setNotifications(updatedNotifications as Notification[]) // Cast to Notification[]
    }, 100) // Check every 0.1 seconds for smoother animation

    return () => {
      clearInterval(notificationCleanup)
    }
  }, [notifications])

  return (
    <NotificationsContext.Provider
      value={{
        showNotification,
        removeNotification,
        notifications,
      }}
    >
      {children}
      <Notification />
    </NotificationsContext.Provider>
  )
}
