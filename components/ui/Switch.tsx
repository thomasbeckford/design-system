import React, { useState, useEffect } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

interface SwitchProps extends VariantProps<typeof switchStyles> {
  defaultState?: boolean
  label?: [string, string]
  onToggle?: (state: boolean) => void
  addClass?: Record<string, string | boolean | undefined>
  isActive?: boolean | null // Make isActive nullable
}

const switchStyles = cva('relative inline-block w-10 h-6', {
  variants: {
    isActive: {
      true: 'bg-success',
      false: 'bg-gray-300',
    },
  },
  defaultVariants: {
    isActive: false,
  },
})

const Switch: React.FC<SwitchProps> = ({
  defaultState = false,
  label,
  onToggle,
  addClass,
  isActive: externalIsActive,
  ...rest
}) => {
  const [isActive, setIsActive] = useState<boolean>(defaultState)

  useEffect(() => {
    if (externalIsActive !== undefined && externalIsActive !== null) {
      setIsActive(externalIsActive)
    }
  }, [externalIsActive])

  const handleClick = () => {
    const newState = !isActive
    setIsActive(newState)
    if (onToggle) {
      onToggle(newState)
    }
  }

  const switchClasses = switchStyles({
    isActive,
    ...addClass,
  })

  const toggleClass = ''

  return (
    <div className="flex gap-2">
      <div className="flex flex-col justify-center items-center">
        <div
          className="bg-ciTrans15 md:w-12 md:h-7 w-16 h-6 flex items-center rounded-md p-1 cursor-pointer"
          onClick={handleClick}
          {...rest}
        >
          <div
            className={`${
              isActive ? 'bg-ci' : 'bg-white transform translate-x-5'
            } md:w-5 md:h-5 h-5 w-5 rounded-sm shadow-md transform duration-300 ease-in-out`}
          ></div>
        </div>
      </div>
      {label && (
        <div className="font-bold">{isActive ? label[0] : label[1]}</div>
      )}
    </div>
  )
}

export default Switch
