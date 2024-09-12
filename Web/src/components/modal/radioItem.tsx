import type { RadioGroupItemProps } from '@radix-ui/react-radio-group'

import { RadioGroupIndicator, RadioGroupItem } from '../ui/radio-group'

interface RadioItemProps extends RadioGroupItemProps {
  text: string
  emoji: string
}

export const RadioItem = ({ value, emoji, text }: RadioItemProps) => {
  return (
    <RadioGroupItem value={value}>
      <RadioGroupIndicator />
      <span className="text-sm leading-none font-medium">{text}</span>
      <span className="text-lg leading-none">{emoji}</span>
    </RadioGroupItem>
  )
}
