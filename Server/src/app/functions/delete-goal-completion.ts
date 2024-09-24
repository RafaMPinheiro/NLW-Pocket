import { db } from '@/db'
import { goalCompletions } from '@/db/schema'
import { eq } from 'drizzle-orm'

interface DeleteGoalCompletionRequest {
  goalCompletionId: string
}

export async function deleteGoalCompletion({
  goalCompletionId,
}: DeleteGoalCompletionRequest) {
  const result = await db
    .delete(goalCompletions)
    .where(eq(goalCompletions.id, goalCompletionId))
    .returning({ deletedId: goalCompletions.id })

  return result
}
