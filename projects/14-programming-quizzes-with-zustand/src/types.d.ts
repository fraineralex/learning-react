import { type OverridableStringUnion } from '@material-ui/types'
export interface Question {
  id: number
  question: string
  code: string
  answers: string[]
  correctAnswer: number
  userSelectedAnswer?: number
  isCorrectUserAnswer?: boolean
}

export type quizzes = 'js' | 'py'

interface SoporteQuizzesType {
  Object: {
    language: quizzes
    text: string
    color: string
    backgroundColor: string
  }
}

export const SoporteQuizzes: SoporteQuizzesType = {
  js: {
    language: 'js' as quizzes,
    text: 'JavaScript Quiz',
    color: 'black',
    backgroundColor: 'white',
  },
  py: {
    language: 'py' as quizzes,
    text: 'Python Quiz',
    color: 'black',
    backgroundColor: 'white'
  }
}
