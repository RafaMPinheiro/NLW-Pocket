interface PendingGoalsResponse {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}

export const getPendingGoals = async (): Promise<PendingGoalsResponse[]> => {
  const res = await fetch('http://localhost:3333/pending-goals')
  const data = await res.json()
  return data.pendingGoals
}
