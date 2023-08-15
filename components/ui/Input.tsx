import React, { InputHTMLAttributes } from 'react'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  addClass?: string // New prop for adding custom classes
}

const Input: React.FC<InputProps> = ({
  variant = 'default',
  size = 'medium',
  addClass,
  ...rest
}) => {
  const inputClasses = `
    ${variant === 'outlined' ? 'border' : ''}
    ${
      size === 'small'
        ? 'py-1 px-2 text-sm'
        : size === 'large'
        ? 'py-3 px-4 text-lg'
        : 'py-2 px-3 text-base'
    }
    rounded
    ${addClass || ''} // Add custom classes here
  `

  return <input className={inputClasses} {...rest} />
}

export default Input
