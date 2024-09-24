export const deleteGoalCompletion = async (goalCompletionId: string) => {
  await fetch('http://localhost:3333/completions', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ goalCompletionId }),
  })
}
