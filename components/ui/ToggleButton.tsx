import React, { useState } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

interface ToggleButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>,
    VariantProps<typeof buttonStyles> {
  defaultState?: boolean
  label: string
  onToggle?: (state: boolean) => void
  addClass?: Record<string, string | boolean | undefined>
}

const buttonStyles = cva(
  'font-bold py-2 px-4 rounded transition-all duration-200 ease-in-out',
  {
    variants: {
      isActive: {
        true: 'bg-success hover:bg-stone-700 text-white',
        false: 'bg-primary hover:bg-primary-700 text-white',
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
)

const ToggleButton: React.FC<ToggleButtonProps> = ({
  defaultState = false,
  label,
  onToggle,
  addClass,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(defaultState)

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive)
    if (onToggle) {
      onToggle(!isActive)
    }
  }

  const buttonClasses = buttonStyles({
    isActive,
    ...addClass,
  })

  return (
    <button className={buttonClasses} onClick={handleClick} {...rest}>
      {isActive ? `${label} On` : `${label} Off`}
    </button>
  )
}

export default ToggleButton
