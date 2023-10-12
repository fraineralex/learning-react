import { useQuestionsStore } from '../store/questions'
import { type Question } from '../types.d'

export function useQuestionData () {
  const questions = useQuestionsStore(state => state.questions)

  let correct = 0
  let incorrect = 0
  let unanswered = 0

  questions.forEach((question: Question) => {
    const { userSelectedAnswer, correctAnswer } = question
    if (userSelectedAnswer == null) unanswered++
    else if (userSelectedAnswer === correctAnswer) correct++
    else incorrect++
  })

  return { correct, incorrect, unanswered }
}