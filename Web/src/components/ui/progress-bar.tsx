import * as ProgressPrimitive from '@radix-ui/react-progress'
import { twMerge } from 'tailwind-merge'

export function Progress(props: ProgressPrimitive.ProgressProps) {
  return (
    <ProgressPrimitive.Progress
      {...props}
      className="bg-zinc-900 rounded-full h-2 w-full"
    />
  )
}

export function ProgressIndicator({
  className,
  ...props
}: ProgressPrimitive.ProgressIndicatorProps) {
  return (
    <ProgressPrimitive.Indicator
      {...props}
      className={twMerge(
        'bg-gradient-to-r from-pink-500 to-violet-500 h-2 rounded-full',
        className
      )}
    />
  )
}
