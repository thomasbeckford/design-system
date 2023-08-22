import './globals.css'
import type { Metadata } from 'next'
import { Baloo_2 } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { NotificationsProvider } from '@/providers/Notifications'

const baloo = Baloo_2({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Design System',
  description: 'Created by Thomas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${baloo.className} bg-darkBorderBox text-white`}>
        <h1 className="text-red-300">Design System</h1>
        <div className="flex ">
          <NotificationsProvider>
            <Navbar />
            {children}
          </NotificationsProvider>
        </div>
      </body>
    </html>
  )
}
