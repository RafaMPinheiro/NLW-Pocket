import z from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

import { deleteGoalCompletion } from '@/app/functions/delete-goal-completion'

export const deleteGoalCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/completions',
    {
      schema: {
        body: z.object({
          goalCompletionId: z.string(),
        }),
      },
    },
    async request => {
      const { goalCompletionId } = request.body

      const result = await deleteGoalCompletion({
        goalCompletionId,
      })

      return result
    }
  )
}
