import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} bg-dark text-white min-h-screen`}>
        <div className="container mx-auto p-4 flex flex-col h-full">
          <h1 className="text-3xl font-bold mb-4">My Design System</h1>
          <div className="flex h-screen">
            <aside className="bg-gray-800 text-white w-1/4 p-4">
              <h2 className="text-xl font-bold mb-4">Components</h2>
              <ul>
                <li className="mb-2">
                  <Link
                    href="buttons"
                    className="text-blue-500 hover:underline"
                  >
                    Button
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="inputs" className="text-blue-500 hover:underline">
                    Input
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="toggleButtons"
                    className="text-blue-500 hover:underline"
                  >
                    Toggle Buttons
                  </Link>
                </li>
              </ul>
            </aside>

            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
