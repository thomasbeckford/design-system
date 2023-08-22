import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import Spinner from '@ui/Spinner'

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

const buttonStyles = cva(
  'rounded-md transition-all duration-200 ease-in-out active:scale-95',
  {
    variants: {
      intent: {
        primary: 'bg-[#1D9384]',
        secondary: 'bg-[#374151]',
        inverted: 'bg-[#60E6C526] text-[#60E6C5] ',

        success: 'bg-ciDarkest',
        pending: 'bg-warningDarkest',
        danger: 'bg-dangerDarkest',
      },
      size: {
        sm: 'px-[0.75rem] h-[2rem] text-[0.875rem]',
        md: 'px-[1rem] h-[2.5rem] text-[1rem]',
        lg: 'px-[1.5rem] h-[3rem] text-[1.125rem]',
      },

      fullWidth: {
        true: 'w-full active:scale-95',
      },
      isLoading: {
        true: 'pointer-events-none opacity-80',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
      fullWidth: false,
      isLoading: false,
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
    const SpinnerSize = () => (
      <Spinner size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'} />
    )

    return (
      <div className="flex items-center gap-2 justify-center">
        {spinnerPlacement === 'start' && <SpinnerSize />}
        <span>{loadingText}</span>
        {spinnerPlacement === 'end' && <SpinnerSize />}
      </div>
    )
  }

  const WithLeftIcon = () => (
    <div className="flex items-center gap-2 justify-center h-full">
      <p className={`${iconSize} fill-white flex`}>{leftIcon}</p>
      <p>{children}</p>
    </div>
  )

  return (
    <button
      className={buttonStyles({
        intent,
        size,
        fullWidth,
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
