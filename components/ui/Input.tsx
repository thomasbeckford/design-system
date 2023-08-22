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
  autoFocus?: boolean
}

const inputStyles = cva(
  'rounded-md transition-all duration-200 ease-in-out text-white  w-full focus:outline-none focus:ring-[1px] focus:ring-[#1D9384]',
  {
    variants: {
      intent: {
        default: 'bg-darkBorderBox',
        outlined: 'border',
      },
      size: {
        sm: 'py-2 px-3 text-sm',
        md: 'py-3 px-4 text-base',
        lg: 'py-4 px-5 text-lg',
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
  autoFocus,
  ...rest
}: InputProps) => {
  const inputClasses = inputStyles({
    intent,
    size,
    isDisabled,
    ...addClass,
  })

  const WithLeftIcon = () => (
    <div className={`relative flex items-center h-full `}>
      <span
        className={` flex items-center w-fit absolute pl-2 ${iconSize} fill-white`}
      >
        {leftIcon}
      </span>
      <input {...rest} className={` ${inputClasses} pl-10`} />
    </div>
  )

  return (
    <>
      {leftIcon ? (
        <WithLeftIcon />
      ) : (
        <input className={inputClasses} {...rest} autoFocus={autoFocus} />
      )}
    </>
  )
}

export default Input
