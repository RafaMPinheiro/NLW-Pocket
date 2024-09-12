interface CreateGoalParams {
  title: string
  desiredWeeklyFrequency: number
}

export const createGoal = async ({
  title,
  desiredWeeklyFrequency,
}: CreateGoalParams) => {
  await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, desiredWeeklyFrequency }),
  })
}
