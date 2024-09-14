import { client, db } from '@/db'

import { goals } from './schema'
import { goalCompletions } from './schema/goal-completions'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)
}

seed().then(() => {
  console.log('🌱 Database cleared successfully!')
  client.end()
})
