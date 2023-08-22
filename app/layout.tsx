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
      <body className={`${baloo.className} bg-bgDark text-white min-h-screen`}>
        <div className=" mx-auto p-4 flex flex-col h-full">
          <h1 className="text-red-300">Design System</h1>
          <div className="flex h-screen">
            <NotificationsProvider>
              <Navbar />
              {children}
            </NotificationsProvider>
          </div>
        </div>
      </body>
    </html>
  )
}
