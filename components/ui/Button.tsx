import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import Spinner from '@ui/Spinner'

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

const buttonStyles = cva(
  'rounded-md font-semibold  transition-all duration-200 ease-in-out active:scale-95  ',
  {
    variants: {
      intent: {
        primary:
          'bg-primary border-primary text-primary hover:text-primary-dark hover:bg-primary-dark',
        secondary:
          'bg-secondary border-secondary text-secondary hover:text-secondary-dark hover:bg-secondary-dark',
      },

      size: {
        sm: 'px-[0.75rem] h-[2rem] text-[0.875rem]',
        md: 'px-[1rem] h-[2.5rem] text-[1rem]',
        lg: 'px-[1.5rem] h-[3rem] text-[1.125rem]',
      },

      outline: {
        true: 'bg-transparent border hover:bg-transparent',
        false: 'border-white text-white hover:text-white',
      },

      fullWidth: {
        true: 'w-full active:scale-95 ',
      },
      isLoading: {
        true: 'opacity-50 pointer-events-none',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
      outline: false,
      fullWidth: false,
    },
  }
)

interface ButtonOrLinkProps {
  children: React.ReactNode
  onClick?: () => void
  spinnerPlacement?: 'start' | 'end'
  loadingText?: string
  leftIcon?: React.ReactNode
  addClass?: Record<string, string | boolean | undefined>
}

const Button: React.FC<Props> = ({
  intent,
  size,
  fullWidth,
  outline,
  isLoading,
  spinnerPlacement = 'start',
  loadingText = 'Loading...',
  leftIcon,
  children,
  onClick,
  addClass,
}: Props) => {
  const iconSize = `w-[1em] h-[1em] flex self-center`

  const WithLoadingIcon = () => {
    return (
      <div className="flex items-center gap-2 justify-center">
        {spinnerPlacement === 'start' && <Spinner />}
        <span>{loadingText}</span>
        {spinnerPlacement === 'end' && <Spinner />}
      </div>
    )
  }

  const WithLeftIcon = () => (
    <div className="flex items-center gap-2 justify-center h-full">
      <span className={`${iconSize} fill-white flex `}>{leftIcon}</span>
      <span>{children}</span>
    </div>
  )

  return (
    <button
      className={buttonStyles({
        intent,
        size,
        fullWidth,
        outline,
        isLoading,
        ...addClass,
      })}
      onClick={onClick}
    >
      {isLoading ? <WithLoadingIcon /> : leftIcon ? <WithLeftIcon /> : children}
    </button>
  )
}

export default Button
