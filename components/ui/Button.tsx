import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import Spinner from '@/public/icons/spinner.svg'

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
        small: 'px-2 py-1 text-xs',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
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
      size: 'medium',
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
  const WithLoadingIcon = (props: { iconSize: string }) => {
    const SpinnerLoader = () => (
      <Spinner className={`animate-spin ${props.iconSize}`} />
    )

    return (
      <div className="flex items-center gap-2 justify-center">
        {spinnerPlacement === 'start' && <SpinnerLoader />}
        <span>{loadingText}</span>
        {spinnerPlacement === 'end' && <SpinnerLoader />}
      </div>
    )
  }

  const WithLeftIcon = (props: { iconSize: string }) => (
    <div className="flex items-center gap-3 justify-center">
      <span className={`${props.iconSize} fill-white flex `}>{leftIcon}</span>
      <span>{children}</span>
    </div>
  )

  const iconSize =
    size === 'large' ? 'h-8 w-8' : size === 'small' ? 'h-5 w-5' : 'h-6 w-6'

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
      {isLoading ? (
        <WithLoadingIcon iconSize={iconSize} />
      ) : leftIcon ? (
        <WithLeftIcon iconSize={iconSize} />
      ) : (
        children
      )}
    </button>
  )
}

export default Button
