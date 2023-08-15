import React, { useState } from 'react'

interface ToggleButtonProps {
  defaultState?: boolean
  label: string
  onToggle?: (state: boolean) => void
  addClass?: string // New prop for adding custom classes
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  defaultState = false,
  label,
  onToggle,
  addClass,
}) => {
  const [isActive, setIsActive] = useState(defaultState)

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive)
    if (onToggle) {
      onToggle(!isActive)
    }
  }

  const buttonClasses = `
    bg-${isActive ? 'success' : 'primary'}  hover:bg-${
    isActive ? 'success' : 'stone'
  }-700 text-white font-bold py-2 px-4 rounded
    ${addClass || ''} // Add custom classes here
  `

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {isActive ? `${label} On` : `${label} Off`}
    </button>
  )
}

export default ToggleButton
