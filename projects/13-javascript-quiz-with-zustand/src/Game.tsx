import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  IconButton
} from '@mui/material'
import { useQuestionsStore } from './store/questions'
import { type Question as QuestionType } from './types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { Footer } from './Footer'

const getBackgroundColor = (info: QuestionType, answerIndex: number) => {
  const { userSelectedAnswer, correctAnswer } = info

  if (userSelectedAnswer == null) return 'transparent'

  if (
    userSelectedAnswer !== correctAnswer &&
    userSelectedAnswer === answerIndex
  )
    return 'red'
  else if (correctAnswer === answerIndex) return 'green'
  else return 'transparent'
}

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore(state => state.selectAnswer)

  const handleSelectAnswer = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }

  return (
    <Card
      variant='outlined'
      sx={{ bgcolor: '#222', textAlign: 'left', padding: 2, marginTop: 4 }}
    >
      <Typography variant='h5' sx={{ textAlign: 'center' }}>
        {info.question}
      </Typography>

      <SyntaxHighlighter language='javascript' style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: '#333' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              onClick={handleSelectAnswer(index)}
              sx={{ backgroundColor: getBackgroundColor(info, index) }}
              disabled={info.userSelectedAnswer != null}
            >
              <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export const Game = () => {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(
    state => state.goPreviousQuestion
  )

  const questionInfo = questions[currentQuestion]
  return (
    <>
      <Stack
        direction='row'
        gap={2}
        alignItems='center'
        justifyContent='center'
      >
        <IconButton
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <ArrowBackIosNew />
        </IconButton>

        {currentQuestion + 1} / {questions.length}

        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
      <Footer />
    </>
  )
}
