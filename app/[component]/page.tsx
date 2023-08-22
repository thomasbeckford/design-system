'use client'
import { useParams } from 'next/navigation'
import Buttons from '@components/Buttons'
import Inputs from '@components/Inputs'
import Spinners from '@components/Spinners'
import Switches from '@/components/Switches'
import Notifications from '@/components/Notifications'

export default function Component() {
  const { component } = useParams()

  const getComponent = () => {
    switch (component) {
      case 'buttons':
        return <Buttons />

      case 'inputs':
        return <Inputs />

      case 'switches':
        return <Switches />

      case 'spinners':
        return <Spinners />

      case 'notifications':
        return <Notifications />

      default:
        return <div>No</div>
    }
  }

  return <div className="flex-1 p-4 overflow-y-auto">{getComponent()}</div>
}
