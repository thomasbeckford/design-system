import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

interface SpinnerProps extends VariantProps<typeof spinnerStyles> {
  size?: 'sm' | 'md' | 'lg'
}

const spinnerStyles = cva('animate-spin', {
  variants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-5 w-5',
      lg: 'h-7 w-7',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const Spinner: React.FC<SpinnerProps> = ({ size }: SpinnerProps) => {
  const spinnerSizeClass = spinnerStyles({
    size,
  })

  return (
    <svg
      className={`${spinnerSizeClass} text-blue-500`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}

export default Spinner
