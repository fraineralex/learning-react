import { Button } from '@mui/material'
import { useQuestionsStore } from '../store/questions'

const LIMIT_QUESTIONS = 10

export const Start = () => {
  const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)
  const quiz = useQuestionsStore(state => state.quiz)

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS, quiz)
  }

  return (
    <Button onClick={handleClick} variant='contained'>
      Start quiz!
    </Button>
  )
}
