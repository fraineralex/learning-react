import { quizzes } from '../types'
import javascriptQuiz from '../assets/questions-js.json'
import pythonQuiz from '../assets/questions-py.json'

export async function getAllQuestions (limit: number, quiz: quizzes) {
  //const response = await fetch(`http://localhost:5173/questions-${quiz}.json`)
  //const json = await response.json()
  const json = quiz === 'js' ? javascriptQuiz : pythonQuiz

  const questions: any = json.sort(() => Math.random() - 0.5).slice(0, limit)

  return questions
}
