import React, { InputHTMLAttributes } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputStyles> {
  intent?: 'default'
  size?: 'sm' | 'md' | 'lg'
  addClass?: Record<string, string | boolean | undefined>
  isDisabled?: boolean
  leftIcon?: React.ReactNode
}

const inputStyles = cva(
  'rounded-md transition-all duration-200 ease-in-out text-white rounded-[8px] w-full focus:outline-none focus:ring-[1px] focus:ring-[#1D9384]',
  {
    variants: {
      intent: {
        default: 'bg-[#374151]',
        outlined: 'border',
      },
      size: {
        sm: 'py-1 px-2 text-sm',
        md: 'py-2 px-3 text-base',
        lg: 'py-3 px-4 text-lg',
      },
      isDisabled: {
        true: 'opacity-50 pointer-events-none',
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
)

const iconSize = `w-[1em] h-[1em] flex self-center`

const Input: React.FC<InputProps> = ({
  intent,
  size,
  addClass,
  isDisabled,
  leftIcon,
  ...rest
}: InputProps) => {
  const inputClasses = inputStyles({
    intent,
    size,
    isDisabled,
    ...addClass,
  })

  const WithLeftIcon = () => (
    <div className={`${inputClasses} flex h-full`}>
      <span className={`${iconSize} fill-white flex `}>{leftIcon}</span>
      <input {...rest} className={inputClasses} />
    </div>
  )

  return (
    <>
      {leftIcon ? (
        <WithLeftIcon />
      ) : (
        <input className={inputClasses} {...rest} />
      )}
    </>
  )
}

export default Input
