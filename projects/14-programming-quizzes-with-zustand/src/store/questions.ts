import { create } from 'zustand'
import { type Question, quizzes } from '../types'
import confetti from 'canvas-confetti'
import { persist } from 'zustand/middleware'
import { getAllQuestions } from '../services/getAllQuestions'

interface State {
  questions: Question[]
  quiz: quizzes
  currentQuestion: number
  fetchQuestions: (limit: number, quiz: quizzes) => Promise<void>
  selectAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  reset: () => void
  setQuiz: (quiz: quizzes) => void
}

export const useQuestionsStore = create<State>()(
  persist(
    (set, get) => {
      return {
        questions: [],
        currentQuestion: 0,
        quiz: 'js',

        fetchQuestions: async (limit: number, quiz: quizzes) => {
          const questions = await getAllQuestions(limit, quiz)
          set({ questions })
        },

        selectAnswer: (questionId: number, answerIndex: number) => {
          const { questions } = get()
          // using structuredClone to clone the object
          const newQuestions = structuredClone(questions)
          const questionIndex = newQuestions.findIndex(
            question => question.id === questionId
          )
          const questionInfo = newQuestions[questionIndex]
          const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex

          if (isCorrectUserAnswer) confetti()

          // update the question info
          newQuestions[questionIndex] = {
            ...questionInfo,
            isCorrectUserAnswer,
            userSelectedAnswer: answerIndex
          }

          // update the state
          set({ questions: newQuestions })
        },

        goNextQuestion: () => {
          const { currentQuestion, questions } = get()
          const nextQuestion = currentQuestion + 1

          if (nextQuestion <= questions.length) {
            set({ currentQuestion: nextQuestion })
          }
        },

        goPreviousQuestion: () => {
          const { currentQuestion } = get()
          const previousQuestion = currentQuestion - 1

          if (previousQuestion >= 0) {
            set({ currentQuestion: previousQuestion })
          }
        },

        reset: () => {
          set({ questions: [], currentQuestion: 0 })
        },

        setQuiz: (quiz: quizzes) => {
          set({ quiz })
        }
      }
    },
    {
      name: 'questions-store'
    }
  )
)
