import type { ComponentProps } from 'react'
import { CircleCheck } from 'lucide-react'
import { useQueryClient } from '@tanstack/react-query'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

import { deleteGoalCompletion } from '../../http/delete-goal-completion'

dayjs.locale('pt-br')

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
  id: string
  title: string
  createdAt: string
}

const ListItem = ({ id, title, createdAt }: ListItemProps) => {
  const queryClient = useQueryClient()
  const time = dayjs(createdAt).format('HH:mm')

  const handleDeleteGoalCompletion = async () => {
    await deleteGoalCompletion(id)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  return (
    <li className="flex items-center gap-2">
      <CircleCheck className="size-4 text-pink-500" />
      <p className="text-sm text-zinc-400">
        Você completou “<span className="text-zinc-100">{title}</span>” às{' '}
        <span className="text-zinc-100">{time}h</span>
      </p>
      <button
        type="button"
        onClick={handleDeleteGoalCompletion}
        className="text-xs text-zinc-500 underline cursor-pointer"
      >
        Desfazer
      </button>
    </li>
  )
}

export { ListRoot, ListHeader, ListContent, ListItem }
