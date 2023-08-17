'use client'
import { useParams } from 'next/navigation'
import Buttons from '@components/Buttons'
import Inputs from '@components/Inputs'
import Spinners from '@components/Spinners'
import ToggleButtons from '@components/ToggleButtons'

export default function Component() {
  const { component } = useParams()

  const getComponent = () => {
    switch (component) {
      case 'buttons':
        return <Buttons />

      case 'inputs':
        return <Inputs />

      case 'toggleButtons':
        return <ToggleButtons />

      case 'spinners':
        return <Spinners />

      default:
        return <div>No</div>
    }
  }

  return (
    <div className="bg-gray-700 flex-1 p-4 overflow-y-auto">
      {getComponent()}
    </div>
  )
}
