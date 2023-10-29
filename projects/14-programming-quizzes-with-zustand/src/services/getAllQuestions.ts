import { quizzes } from '../types'

export async function getAllQuestions (limit: number, quiz: quizzes) {
  const response = await fetch(`http://localhost:5173/questions-${quiz}.json`)
  const json = await response.json()

  const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)

  return questions
}
