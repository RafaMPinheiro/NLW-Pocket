import type { ComponentProps } from 'react'
import { CircleCheck } from 'lucide-react'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-BR'

dayjs.locale(ptBR)

interface ListRootProps extends ComponentProps<'div'> {}

const ListRoot = (props: ListRootProps) => {
  return <div className="flex flex-col gap-4" {...props} />
}

interface ListHeaderProps extends ComponentProps<'div'> {
  date: string
}

const ListHeader = ({ date, ...props }: ListHeaderProps) => {
  const weekDay = dayjs(date).format('dddd')
  const parsedDate = dayjs(date).format('D[ de ]MMM')
  
  return (
    <h3 className="font-medium" {...props}>
      <span className="capitalize">{weekDay}</span>{' '}
      <span className="text-xs text-zinc-400">({parsedDate})</span>
    </h3>
  )
}

interface ListContentProps extends ComponentProps<'ul'> {}

const ListContent = (props: ListContentProps) => {
  return <ul className="flex flex-col gap-3" {...props} />
}

interface ListItemProps {
  title: string
  createdAt: string
}

const ListItem = ({ title, createdAt }: ListItemProps) => {
  const time = dayjs(createdAt).format('HH:mm')

  return (
    <li className="flex items-center gap-2">
      <CircleCheck className="size-4 text-pink-500" />
      <p className="text-sm text-zinc-400">
        Você completou “<span className="text-zinc-100">{title}</span>” às{' '}
        <span className="text-zinc-100">{time}h</span>
      </p>
      <button
        type="button"
        className="text-xs text-zinc-500 underline cursor-pointer"
      >
        Desfazer
      </button>
    </li>
  )
}

export { ListRoot, ListHeader, ListContent, ListItem }
