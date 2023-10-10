import { useQuestionData } from './hooks/useQuestionData'

export function Footer () {
  const { correct, incorrect, unanswered } = useQuestionData()

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>
        {`✅ Corrects: ${correct}`} - {`❌ Incorrect: ${incorrect}`} -{' '}
        {`❔ Unanswered: ${unanswered}`}
      </strong>
    </footer>
  )
}
