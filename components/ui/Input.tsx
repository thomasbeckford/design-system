import React, { InputHTMLAttributes } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputStyles> {
  variant?: 'default' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  addClass?: Record<string, string | boolean | undefined>
}

const inputStyles = cva(
  'rounded-md transition-all duration-200 ease-in-out text-black',
  {
    variants: {
      variant: {
        default: 'bg-white',
        outlined: 'border',
      },
      size: {
        small: 'py-1 px-2 text-sm',
        medium: 'py-2 px-3 text-base',
        large: 'py-3 px-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
)

const Input: React.FC<InputProps> = ({
  variant,
  size,
  addClass,
  ...rest
}: InputProps) => {
  const inputClasses = inputStyles({
    variant,
    size,
    ...addClass,
  })

  return <input className={inputClasses} {...rest} />
}

export default Input
