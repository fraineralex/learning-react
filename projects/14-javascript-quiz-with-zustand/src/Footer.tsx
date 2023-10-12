import { useQuestionData } from './hooks/useQuestionData'
import { Button } from '@mui/material'
import { useQuestionsStore } from './store/questions'

export function Footer () {
  const { correct, incorrect, unanswered } = useQuestionData()
  const resetGame = useQuestionsStore(state => state.reset)

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>
        {`✅ Corrects: ${correct}`} - {`❌ Incorrect: ${incorrect}`} -{' '}
        {`❔ Unanswered: ${unanswered}`}
      </strong>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => resetGame()}>Reset Game</Button>
      </div>
    </footer>
  )
}
