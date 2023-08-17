import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

interface ProgressBarProps extends VariantProps<typeof progressBarStyles> {
  value: number // Value between 0 and 100
  addClass?: Record<string, string | boolean | undefined>
}

const progressBarStyles = cva('h-4 rounded-full overflow-hidden', {
  variants: {
    color: {
      default: 'bg-primary',
      success: 'bg-success',
      warning: 'bg-warning',
      danger: 'bg-danger',
    },
  },
  defaultVariants: {
    color: 'default',
  },
})

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color,
  addClass,
}: ProgressBarProps) => {
  // Ensure the value is within the range of 0 to 100
  const normalizedValue = Math.min(100, Math.max(0, value))

  const progressBarClasses = progressBarStyles({
    color,
    ...addClass,
  })

  return (
    <div className={progressBarClasses}>
      <div
        className={`h-full w-${normalizedValue} transition-all duration-300`}
      ></div>
    </div>
  )
}

export default ProgressBar
