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
      <body className={`${inter.className} bg-bgDark text-white min-h-screen`}>
        <div className=" mx-auto p-4 flex flex-col h-full">
          <h1 className="customh1 text-red-300">Design System</h1>
          <div className="flex h-screen">
            <aside className=" text-white w-1/6 p-4">
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
                    href="switches"
                    className="text-blue-500 hover:underline"
                  >
                    Switches
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="spinners"
                    className="text-blue-500 hover:underline"
                  >
                    Spinners
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
