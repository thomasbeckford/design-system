import Link from 'next/link'

export default function Navbar() {
  return (
    <aside className=" text-white w-1/6 p-4">
      <h2 className="text-xl font-bold mb-4">Components</h2>

      <ul>
        <li className="mb-2">
          <Link href="buttons" className="text-blue-500 hover:underline">
            Button
          </Link>
        </li>
        <li className="mb-2">
          <Link href="inputs" className="text-blue-500 hover:underline">
            Input
          </Link>
        </li>
        <li className="mb-2">
          <Link href="switches" className="text-blue-500 hover:underline">
            Switches
          </Link>
        </li>
        <li className="mb-2">
          <Link href="spinners" className="text-blue-500 hover:underline">
            Spinners
          </Link>
        </li>
        <li className="mb-2">
          <Link href="notifications" className="text-blue-500 hover:underline">
            Notifications
          </Link>
        </li>
      </ul>
    </aside>
  )
}
