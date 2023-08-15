import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

interface ButtonOrLinkProps {
  onClick?: () => void
  children: React.ReactNode
  addClass?: Record<string, string | boolean | undefined>
}

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

const buttonStyles = cva(
  'px-4 py-2 rounded-md font-semibold  transition-all duration-200 ease-in-out active:scale-95',
  {
    variants: {
      intent: {
        primary:
          'bg-primary border-primary text-primary hover:text-primary-dark hover:bg-primary-dark',
        secondary:
          'bg-secondary border-secondary text-secondary hover:text-secondary-dark hover:bg-secondary-dark',
      },

      size: {
        small: 'px-2 py-1 text-sm',
        large: 'px-6 py-3 text-lg',
      },

      outline: {
        true: 'bg-transparent border hover:bg-transparent',
        false: 'border-white text-white hover:text-white',
      },

      fullWidth: {
        true: 'w-full active:scale-95 ',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'small',
      outline: false,
      fullWidth: false,
    },
  }
)

const Button: React.FC<Props> = ({
  intent,
  size,
  fullWidth,
  outline,
  children,
  onClick,
  addClass,
}: Props) => {
  return (
    <button
      className={buttonStyles({
        intent,
        size,
        fullWidth,
        outline,
        ...addClass,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
