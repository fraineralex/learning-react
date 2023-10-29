import './App.css'
import { Container, Stack, Typography } from '@mui/material'
import { LanguageLogo } from './components/LanguagesLogos'
import { Start } from './components/Start'
import { useQuestionsStore } from './store/questions'
import { Game } from './components/Game'
import { Header } from './components/Header'
import { Contact } from './components/Contact'

function App () {
  const questions = useQuestionsStore(state => state.questions)
  const quiz = useQuestionsStore(state => state.quiz)

  return (
    <>
      <Header />
      <main>
        <Container maxWidth='sm'>
          <Stack
            direction='row'
            gap={2}
            alignItems='center'
            justifyContent='center'
          >
            <LanguageLogo language={quiz} />
            <Typography variant='h2' component='h1'>
              <strong>
                {quiz === 'js' && 'JavaScript Quiz'}
                {quiz === 'py' && 'Python Quiz'}
              </strong>
            </Typography>
          </Stack>

          {questions.length === 0 && <Start />}
          {questions.length > 0 && <Game />}
        </Container>
      </main>
      <Contact />
    </>
  )
}

export default App
