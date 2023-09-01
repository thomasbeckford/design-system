import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import Spinner from '@ui/Spinner'

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

const buttonStyles = cva(
  'rounded-sm transition-all duration-200 ease-out-in block  ',
  {
    variants: {
      intent: {
        primary: 'bg-[#1D9384] transition-all active:scale-95',
        danger: 'bg-[#F82F2F] transition-all active:scale-95',
        secondary: 'bg-[#374151] active:ring-1 ring-white',
        inverted: 'bg-[#60E6C526] text-[#60E6C5] active:ring-1 ring-[#60E6C5]',
        invertedFlat:
          'bg-transparent text-[#60E6C5] active:ring-1 ring-[#60E6C5] hover:bg-[#60E6C526]',

        successDark: 'bg-ciDarkest',
        pendingDark: 'bg-warningDarkest',
        dangerDark: 'bg-dangerDarkest',
      },
      size: {
        sm: 'px-[1rem] h-[2.5rem] text-[1rem]',
        md: 'px-[1.5rem] h-[3rem] text-[1.125rem]',
        lg: 'px-[2rem] h-[3.5rem] text-[1.250rem]',
      },

      fullWidth: {
        true: 'w-full',
      },
      isLoading: {
        true: 'pointer-events-none opacity-100',
      },
      isDisabled: {
        true: 'pointer-events-none opacity-50',
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
      {isLoading ? (
        <WithLoadingIcon />
      ) : leftIcon ? (
        <div className="flex items-center gap-1 justify-center h-full ">
          <span
            className={`${size === 'sm' ? 'w-[20px]' : 'w-[24px]'} fill-white`}
          >
            {leftIcon}
          </span>
          <span className={`text-${size}`}>{children}</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
