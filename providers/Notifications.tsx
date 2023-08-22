'use client'

import React, { ReactNode, createContext, useState } from 'react'
import Notification from '@/components/Notifications/Notification'

type NotificationContextProps = {
  showNotification: (notification: Notification) => void
  removeNotification: (notificationId: string) => void
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

  const addNotification = (notification: Notification) => {
    const newNotification = { ...notification, id: Date.now().toString() }
    console.log('added new notification', newNotification)
    setNotifications([...notifications, newNotification])
  }

  const removeNotification = (notificationId: string) => {
    console.log('Removing notification', notificationId)
    const updatedNotifications = notifications.filter(
      (n) => n.id !== notificationId
    )
    setNotifications(updatedNotifications)
  }

  const showNotification = (notification: Notification) => {
    const id = Date.now().toString()
    addNotification({
      ...notification,
      id,
    })

    setTimeout(() => {
      removeNotification(id)
    }, 3000)
  }

  console.log('Notifications', notifications)

  return (
    <NotificationsContext.Provider
      value={{
        showNotification,
        removeNotification,
      }}
    >
      {children}
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          removeNotification={removeNotification}
        />
      ))}
    </NotificationsContext.Provider>
  )
}
